class Api::GamesController < ApplicationController
  def index
    render json: Game.all
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def create
    game = Game.new(name: params["formattedGame"]["name"])

    if game.save
      params["formattedGame"]["players"].each do |player|
        p = Player.find_or_create_by(name: player["name"])
        o = Option.new(player_id: p.id, game_id: game.id, description: player["description"],  draw:player["draw"], )
        o.save
      end
      render json: game
    else
      render json: { message: game.errors }, status: 400
    end
  end

  def destroy
    if @game.destroy
      render status: 201
    else
      render json: {error: "Unable to delete this saved game." + @game.errors.full_messages.to_sentence}, status: 400
    end
  end

  private

  def game_params
    params.require(:game).permit(:name)
  end
end

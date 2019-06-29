class Api::GamesController < ApplicationController
  def index
    render json: Game.all
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def create
    #create (or update)the players and options here too
    game = Game.new(name: params["game"]["name"])

    if game.save
      params["game"]["players"].each do |player|
        p = game.players.build(name: player["name"])
        p.save
        o = game.options.build(description: player["description"], player_id: p.id, draw:player["draw"])
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

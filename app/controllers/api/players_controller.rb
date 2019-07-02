class Api::PlayersController < ApplicationController
  def index
    render json: Player.all
  end

  def show
    @player = Player.find(params[:id])
    render json: @player
  end

  def create
    player = Player.new(player_params)
    if player.save
      render json: player
    else
      render json: { message: player.errors }, status: 400
    end
  end

  def destroy
    if @player.destroy
      render status: 201
    else
      render json: {error: "Unable to delete this saved player." + @player.errors.full_messages.to_sentence}, status: 400
    end
  end

  private

  def player_params
    params.require(:player).permit(:name)
  end

end

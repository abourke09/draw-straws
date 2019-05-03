class API::PlayersController < ApplicationController
  def index
    render json: Player.all
  end

  def show
    render json: @player
  end
end

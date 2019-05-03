class API::GamesController < ApplicationController
  def index
    render json: Game.all
  end

  def show
    render json: @game
  end
end

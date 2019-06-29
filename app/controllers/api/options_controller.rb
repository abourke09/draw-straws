class Api::OptionsController < ApplicationController
  def index
    render json: Option.all
  end

  def show
    render json: @option
  end

  def create
    option = Option.new(option_params)
    if option.save
      render json: option
    else
      render json: { message: option.errors }, status: 400
    end
  end

  def destroy
    if @option.destroy
      render status: 201
    else
      render json: {error: "Unable to delete this saved option." + @option.errors.full_messages.to_sentence}, status: 400
    end
  end

  private

  def option_params
    params.require(:option).permit(:player_id, :game_id, :description, :draw)
  end

end

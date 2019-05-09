class Api::OptionsController < ApplicationController
  def index
    render json: Option.all
  end

  def show
    render json: @option
  end
end

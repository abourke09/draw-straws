class OptionSerializer < ActiveModel::Serializer
  attributes :id, :description, :draw, :player, :game

  belongs_to :player
  belongs_to :game
end

class OptionSerializer < ActiveModel::Serializer
  attributes :id, :description, :draw, :player_id, :game_id
end

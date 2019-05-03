class GameSerializer < ActiveModel::Serializer
  attributes :id, :player_id, :option_id
end

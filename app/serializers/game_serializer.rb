class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :players, :options

  has_many :options
  has_many :players
end

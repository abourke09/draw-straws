class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :options, :games

  has_many :options
  has_many :games
end

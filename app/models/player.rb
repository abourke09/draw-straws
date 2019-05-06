class Player < ApplicationRecord
  has_many :options
  has_many :games, through: :options
end

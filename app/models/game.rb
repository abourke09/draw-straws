class Game < ApplicationRecord
  has_many :players
  has_many :options, through: :players
end

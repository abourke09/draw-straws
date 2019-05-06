class Game < ApplicationRecord
  has_many :options
  has_many :players, through: :options
end

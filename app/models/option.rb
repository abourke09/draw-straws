class Option < ApplicationRecord
  belongs_to :player
  belongs_to :game, through: :player
end

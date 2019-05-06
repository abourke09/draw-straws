class CreateOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :options do |t|
      t.belongs_to :player
      t.belongs_to :game
      t.string :description
      t.integer :draw

      t.timestamps
    end
  end
end

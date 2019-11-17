class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.integer :adjustment_point
      t.date :date
      t.decimal :weight
      t.time :time
      t.references :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end

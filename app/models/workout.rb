class Workout < ApplicationRecord
  has_many :exercise_sets, inverse_of: :workout, dependent: :destroy

  accepts_nested_attributes_for :exercise_sets, allow_destroy: true
end

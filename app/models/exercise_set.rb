class ExerciseSet < ApplicationRecord
  belongs_to :workout, inverse_of: :exercise_sets
  belongs_to :exercise

  validates_presence_of :workout
  validates_presence_of :exercise

  scope :ordered, lambda {
    select('DISTINCT ON (exercise_id) *')
  }
end

class Exercise < ApplicationRecord
  has_many :exercise_sets

  accepts_nested_attributes_for :exercise_sets, allow_destroy: true
end

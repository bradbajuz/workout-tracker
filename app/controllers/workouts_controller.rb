class WorkoutsController < ApplicationController
  def index
  end

  def new
    @workout = Workout.new
    @workout.exercise_sets.build
  end

  private

  def workout_params
    params.require(:workout).permit(:name,
                                    exercise_sets_attributes: [:id, :workout_id, :adjustment_point, :date, :weight, :time])
  end
end

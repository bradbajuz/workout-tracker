class ExercisesController < ApplicationController
  def index
  end

  def new
    @exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new(exercise_params)

    respond_to do |format|
      if @exercise.save
        format.html { redirect_to workouts_path, notice: "Exercise was successfully created." }
        # puts @exercise.errors.inspect
      else
        format.html { render :new, error: "Error creating exercise. Please try again." }
        # puts @exercise.errors.inspect
      end
    end
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :adjustment_point,
                                     exercise_sets_attributes: [:id, :exercise_id])
  end
end

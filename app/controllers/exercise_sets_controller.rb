class ExerciseSetsController < ApplicationController
  def new
    @exercise_set = ExerciseSet.new(exercise_id: params[:exercise_id],
                                    workout_id: params[:workout_id])
  end

  def create
    @exercise_set = ExerciseSet.new(exercise_set_params)

    respond_to do |format|
      if @exercise_set.save
        format.html { redirect_to workouts_path, notice: "Exercise Set was successfully created." }
      else
        format.html { render :new, error: "Error creating exercise set. Please try again." }
      end
    end
  end

  private

  def exercise_set_params
    params.require(:exercise_set).permit(:workout_id, :exercise_id, :adjustment_point, :date, :weight, :time)
  end
end

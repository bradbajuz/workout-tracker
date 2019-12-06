class WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all

    @today = ExerciseSet.where(date: Date.today).order(date: :desc)
  end

  def new
    @workout = Workout.new
    @workout.exercise_sets.build
  end

  def create
    @workout = Workout.new(workout_params)

    respond_to do |format|
      if @workout.save
        format.html { redirect_to workouts_path, notice: 'Workout was successfully created.' }
        # puts @workout.errors.inspect
      else
        format.html { render :new, error: 'Error creating workout. Please try again.' }
        # puts @workout.errors.inspect
      end
    end
  end

  private

  def workout_params
    params.require(:workout).permit(:name,
                                    exercise_sets_attributes: [:id, :workout_id, :exercise_id, :date, :weight, :time])
  end
end

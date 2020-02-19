class ExerciseSetsController < ApplicationController
  before_action :set_exercise_set, only: [:edit, :update, :destroy]

  def index
    @pagy, @exercise_sets = pagy(ExerciseSet.all.order(date: :desc), items: 10)
  end

  def new
    session[:return_to] = request.referer

    @exercise_set = ExerciseSet.new(exercise_id: params[:exercise_id],
                                    workout_id: params[:workout_id])
    authorize @exercise_set

    @exercises = ExerciseSet.where(exercise_id: params[:exercise_id]).order(date: :desc).limit(10)
  end

  def create
    @exercise_set = ExerciseSet.new(exercise_set_params)
    authorize @exercise_set

    respond_to do |format|
      if @exercise_set.save
        format.html { redirect_to workouts_path, notice: 'Exercise Set was successfully created.' }
      else
        format.html { render :new, error: 'Error creating exercise set. Please try again.' }
      end
    end
  end

  def edit
    session[:return_to] = request.referer
    authorize @exercise_set
  end

  def update
    authorize @exercise_set
    respond_to do |format|
      if @exercise_set.update(exercise_set_params)
        format.html { redirect_to session[:return_to], notice: 'Exercise Set was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize @exercise_set
    @exercise_set.destroy
    respond_to do |format|
      format.html { redirect_to workouts_path, notice: 'Exercise Set was successfully destroyed.' }
    end
  end

  private

  def set_exercise_set
    @exercise_set = ExerciseSet.find_by(id: params[:id])
  end

  def exercise_set_params
    params.require(:exercise_set).permit(:workout_id, :exercise_id, :date, :weight, :time)
  end
end

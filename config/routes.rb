Rails.application.routes.draw do
  root 'workouts#index'

  resources :workouts
  resources :exercises
  resources :exercise_sets
end

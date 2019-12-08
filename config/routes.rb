Rails.application.routes.draw do
  devise_for :users
  root 'workouts#index'

  resources :workouts
  resources :exercises
  resources :exercise_sets
end

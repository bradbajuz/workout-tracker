Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'

  resources :workouts
  resources :exercises
  resources :exercise_sets
end

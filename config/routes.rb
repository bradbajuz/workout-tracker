Rails.application.routes.draw do
  root "workouts#index"
  resources :workouts
  resources :exercises
  resources :exercise_sets

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :messages, only: [:index]
  resources :groups, only: [:new, :create, :edit, :update]  do
  resources :users, only: [:index, :edit, :update]
end
end
Rails.application.routes.draw do
  devise_for :models
  resources :users
  resources :sessions
  #get 'hello_world', to: 'hello_world#index'
end

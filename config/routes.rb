Rails.application.routes.draw do

  get '/contact', to: 'pages#contact'
  # get '/works', to: 'pages#works'
  match '/about', to: 'pages#about', via: :get

  get '/services', to: 'pages#services'
  get '/works', to: 'works#index'
  get '/works/cookpal', to: 'works#cookpal'

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

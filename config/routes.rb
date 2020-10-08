Rails.application.routes.draw do

  get '/contact', to: 'pages#contact'
  get '/works', to: 'pages#works'
  match '/about', to: 'pages#about', via: :get

  get '/services', to: 'pages#services'

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

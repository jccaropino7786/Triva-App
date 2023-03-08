Rails.application.routes.draw do
  
  resources :games
  resources :scores
  resources :questions
  resources :users
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#logout"
  get '/auth/:provider/callback', to: 'sessions#create'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  
  resources :user_games
  resources :games
  resources :question_answers
  resources :answers
  resources :questions
  resources :users
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#logout"
  post "/oauth", to: "users#oauth"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

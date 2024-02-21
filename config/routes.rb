Rails.application.routes.draw do
  get 'root/index'

  get "up" => "rails/health#show", as: :rails_health_check
  root "root#index"
  namespace :api do
      resources :greetings
  end
end

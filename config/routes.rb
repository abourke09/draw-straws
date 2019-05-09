Rails.application.routes.draw do

  namespace :api do

    resources :games
    resources :options
    resources :players

    resources :games do
      resources :players
      resources :options
    end

    resources :players do
      resources :games
      resources :options
    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

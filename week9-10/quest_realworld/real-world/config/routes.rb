Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  scope :api do
    resources :articles, only: [:create]
    get '/articles/:slug', to: 'articles#show'
    put '/articles/:slug', to: 'articles#update'
    delete '/articles/:slug', to: 'articles#destroy'
  end
end

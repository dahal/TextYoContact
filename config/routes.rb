Rails.application.routes.draw do
  root 'contacts#index'
  post '/contacts/create' => 'contacts#create'
end

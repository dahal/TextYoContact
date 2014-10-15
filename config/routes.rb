Rails.application.routes.draw do
  root 'contacts#index'
  post '/contacts/create' => 'contacts#create'
  post '/sendhub/message' => 'send_hub#create'
end

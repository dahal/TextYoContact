class ContactsController < ApplicationController
  
  # GET /contacts
  def index
    @contacts = Contact.all
  end

  # POST /contacts
  def create
    @contact = Contact.create(name: params[:name], cellphone: params[:cellphone])
    render json: @contact
  end

end

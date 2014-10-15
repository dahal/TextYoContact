class ContactsController < ApplicationController
  before_action :set_contact, only: [:edit, :update, :destroy]
  # GET /contacts
  def index
    @contacts = Contact.all
  end

  # GET /contacts
  def new
    @contact = Contact.new
  end

  # POST /contacts
  def create
    @contact = Contact.create(name: params[:name], cellphone: params[:cellphone])
    render json: @contact
  end

  # GET /contacts/:id/edit
  def edit
  end

  # PATCH/PUT /contacts/:id
  def update
  end

  # DELETE /contacts/:id
  def destroy
  end

  private
    # Set contact to be avalilable to multiple different routes
    def set_contact
      @contact = Contact.find(params[:id])
    end
  end

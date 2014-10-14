class ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :edit, :update, :destroy]
  # GET /contacts
  def index
    @contacts = Contact.all
  end

  # GET /contacts/:id
  def show
    render json: @contact
  end

  # GET /contacts/new
  def new
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

    # White listing params for security reason.
    def contact_params
      params.require(:contact).permit(:name, :cellphone)
    end
  end

class ContactsController < ApplicationController
  def index
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

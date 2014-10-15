class SendHubController < ApplicationController
  before_action :api_key, :phone_number, :details, only: [:create]

  def create
    @sendhub = SendHub.new(api_key, phone_number)
    @sendhub.post_messages(@details)
    if response.status == 200
      render json: {"success"=> "Message Successfully Sent!"}.to_json
    else
      render json: {"error"=> "Snap! there is an error!"}.to_json
    end
  end

  private
    def api_key
      ENV['API_KEY']
    end

    def phone_number
      ENV['PHONE_NUMBER']
    end

    def details
      @cellphone = params[:contacts].first.gsub(/[.-]/, '')
      @cellphone = @cellphone.insert(0, '+1') unless @cellphone.include? '+1'
      @details = { "contacts"=> [@cellphone], "text"=> params[:text] }
    end
end
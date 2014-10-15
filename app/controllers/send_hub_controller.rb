class SendHubController < ApplicationController
  before_action :api_key, :phone_number

  def create
    @cellphone = params[:contacts].first.gsub(/[.-]/, '')
    @cellphone = @cellphone.insert(0, '+1') unless @cellphone.include? '+1'
    @details = { "contacts"=> [@cellphone], "text"=> params[:text] }
    @sendhub = SendHub.new(api_key, phone_number)
  end

  private
    def api_key
      ENV['API_KEY']
    end

    def phone_number
      ENV['PHONE_NUMBER']
    end
end
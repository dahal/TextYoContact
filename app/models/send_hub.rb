class SendHub
  include HTTParty
  base_url 'https://api.sendhub.com/v1/messages'
  headers 'Content-Type' => "application/json"

  def initialize
    @number     = ENV['PHONE_NUMBER']
    @api_key    = ENV['API_KEY']
  end

  def send_text(message)
    self.class.post(credentials, message)
  end


  private

    def credentials
      "/?username=#{@number}\&api_key=#{@api_key}"
    end
end

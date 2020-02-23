class HomeController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.all.order(created_at: :desc)
  end
end

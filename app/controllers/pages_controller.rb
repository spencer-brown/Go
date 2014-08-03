class PagesController < ApplicationController
  def dashboard
    @users = User.all

    #@graph = Koala::Facebook::API.new(session(:access_token))
    #@locations = @graph.get_connections('me', 'locations')

    if current_user
      @user_requests = current_user.requests.where(user_id: current_user.id)
    end
  end
end

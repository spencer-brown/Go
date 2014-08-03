class PagesController < ApplicationController
  def dashboard
    @users = User.all

    if current_user
      @user_requests = current_user.requests.where(user_id: current_user.id)

      @graph = Koala::Facebook::API.new(current_user.access_token)
      profile = @graph.get_object('me')
      friends = @graph.get_connections('me', 'friends')
    end
  end
end

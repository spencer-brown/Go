class PagesController < ApplicationController
  def dashboard
    @users = User.all
    @user_requests = current_user.requests.where(user_id: current_user.id)
  end
end

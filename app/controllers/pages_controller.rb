class PagesController < ApplicationController
  def dashboard
    @users = User.all

    if current_user
      @user_requests = current_user.requests.where(user_id: current_user.id)
    end
  end
end

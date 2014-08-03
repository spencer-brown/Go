class RequestsController < ApplicationController
  def create
    @request = current_user.requests.build(host_id: params[:host_id])
    @request.status = 'Pending host acceptance'
    if @request.save
      flash[:notice] = 'Request sent.'
      redirect_to root_url
    else
      flash[:notice] = 'Request failed to send.'
      redirect_to root_url
    end
  end

  def destroy
    @request = current_user.requests.find(params[:id])
    @request.destroy
    flash[:notice] = 'Request deleted'
    redirect_to root_path
  end
end

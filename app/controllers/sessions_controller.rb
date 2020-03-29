class SessionsController < ApplicationController
  layout "hello_world"

  def new; end
  
  def create
    @user = Model.find_by email: params[:user_params][:email]
    if @user
      sign_in @user
      redirect_to hello_world_index_path
    else
      puts("login False")
    end

  end
end

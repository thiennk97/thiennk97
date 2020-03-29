# frozen_string_literal: true

class UsersController < ApplicationController
  layout "hello_world"
  before_action :selectUserJson, only: %i(index) 

  def index
  end

  def new
  end

  def destroy
    Model.destroy(params[:id])
    @users = Model.all.sorted.to_json
    render json: @users
  end

  def create
    @user = Model.new(name: params[:user_params][:name], email: params[:user_params][:email], phone_number: params[:user_params][:contact], image: params[:user_params][:image])
    if @user.save
      @users = Model.all.sorted.to_json
      render json: @users
    end
  end

  private
    def selectUserJson
      @users = Model.all.sorted.to_json
    end
end

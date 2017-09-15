class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
    # Log them in and redirect them if we find them
      login!(@user)
      render 'api/users/show';
    end

  end

  def destroy
    logout!
    render json: {message: 'Logout successful.'}
  end
end

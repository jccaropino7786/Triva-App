class UsersController < ApplicationController
    before_action :find_user, only: [ :update, :destroy]
    skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end
    
    def show
        render json: @user
    end

    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def update
        render json: @user.update!(user_params), status: :ok
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :username, :password)
    end
end

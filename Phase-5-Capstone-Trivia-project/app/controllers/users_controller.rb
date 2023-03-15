class UsersController < ApplicationController
    before_action :find_user, only: [ :update, :destroy]
    skip_before_action :authorized_user, only: [:create, :oauth]

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
        @user.update!(user_params)
        render json: @user, status: :ok
    end

    def destroy
        @user.destroy
        head :no_content, status: 204
    end

    def oauth
        user = User.find_or_create_by(email: params[:email]) do |u|
            u.username = params[:name] 
            u.email = params[:email] 
            u.password = SecureRandom.hex(16)
          end
          if user.id
            session[:user_id] = user.id
            render json: user, status: :created
          else
            render json: {message: user.errors.full_messages}, status: :unprocessable_entity
          end
    end

    

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :username, :password)
    end
end

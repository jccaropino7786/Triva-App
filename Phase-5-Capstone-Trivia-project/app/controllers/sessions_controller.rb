class SessionsController < ApplicationController
    skip_before_action :authorized_user, only:[:login]
    
    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created            
        else
            render json: {error: "Invalid Credentials"}, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end

    

end
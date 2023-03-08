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

    def create
        @userAuth = User.find_or_create_from_auth_hash(auth_hash)
        self.current_user = @userAuth
        redirect_to '/'
      end
    
      protected
    
      def auth_hash
        request.env['omniauth.auth']
      end
end
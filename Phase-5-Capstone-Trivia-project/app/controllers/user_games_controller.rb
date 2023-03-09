class UserGamesController < ApplicationController

    def index
        render json: UserGame.order(params[:score]).reverse, status: :ok
    end

   

end


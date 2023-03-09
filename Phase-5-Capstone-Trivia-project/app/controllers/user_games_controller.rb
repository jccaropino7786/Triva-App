class UserGamesController < ApplicationController

    def index
        render json: UserGame.all, status: :ok
    end
end

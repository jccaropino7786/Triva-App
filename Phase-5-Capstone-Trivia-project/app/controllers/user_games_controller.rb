class UserGamesController < ApplicationController

    def index
        render json: UserGame.order(score: :desc), status: :ok
    end

    def create
        new_user_game = UserGame.create!(user_game_params)
        render json: new_user_game, status: :created
    end

    private

    def user_game_params
        params.permit(:user_id, :game_id, :score)
    end
   

end


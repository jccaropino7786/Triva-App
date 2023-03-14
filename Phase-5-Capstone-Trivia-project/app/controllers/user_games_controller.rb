class UserGamesController < ApplicationController

    def index
        render json: UserGame.order(score: :desc), status: :ok
    end

    def create
        new_user_game = @user.user_games.create!(score: 0, game_id: 4)
        render json: new_user_game, status: :created
    end

    private

    def user_game_params
        params.permit( :game_id, :score)
    end
   

end


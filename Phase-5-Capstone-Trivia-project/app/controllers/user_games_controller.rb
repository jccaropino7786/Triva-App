class UserGamesController < ApplicationController
    before_action :find_user_game, only: [:destroy,:update]
    before_action :find_user, only: [ :show, :create]

    def index
        render json: UserGame.order(score: :desc), status: :ok
    end

    def show
        render json: @user, status: :ok
    end

    def create
        new_user_game = @user.user_games.create!(score: 0, game_id: 4)
        session[:user_game_id] = user_game.id
        render json: new_user_game, status: :created
    end

    def update
        @user_game.update!(:score)
        render json: @user_game
    end

    def destroy
        @user_game.destroy
        render json: {}, status: 204
    end

    private

    def user_game_params
        params.permit( :game_id, :score)
    end

    def find_user_game
        @user_game = UserGame.find(params[:id])
    end
   

end


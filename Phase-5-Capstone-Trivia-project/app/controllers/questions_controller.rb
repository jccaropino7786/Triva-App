class QuestionsController < ApplicationController

    def create
        new_question = @user.find_or_create_by( :question )
        render json: new_user_game, status: :created
    end
end

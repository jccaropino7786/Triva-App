class QuestionsController < ApplicationController

    def create
        new_question = @user.find_or_create_by( :question )
        render json: new_user_game, status: :created
    end
end


# 1. Send questions to backend
# QuestionsController#create
# Use each to iterate through params[:questions]
# For each question object (use [] to access data) create:
# A. A question object
# B. An answer object
# C. A QuestionAnswer that points to the question and answer AND game_id (stored in session)



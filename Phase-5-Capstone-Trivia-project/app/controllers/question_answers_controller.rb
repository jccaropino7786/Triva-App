class QuestionAnswersController < ApplicationController

    def create
        new_question_answer = @user.find_or_create_by( :answer_id, :question_id, :user_game_id )
        render json: new_question_answer, status: :created
    end
    
end

class QuestionsController < ApplicationController


    def index
        render json: Question.all, status: :ok
    end

    def create
       
        params[:questions].each do |q|
        question = Question.find_or_create_by!(question_text: q[:question])
        answer = Answer.find_or_create_by!(answer_text: q[:correctAnswer])
        
        QuestionAnswer.find_or_create_by!(question:question, answer:answer, user_game: @user.user_games[-1])
        end
        render json: QuestionAnswer.where(user_game_id: @user.user_games[-1].id) , status: :created
      end
      
      private
      
      def question_params
        params.permit(:question_text)
      end
end


# 1. Send questions to backend
# QuestionsController#create
# Use each to iterate through params[:questions]
# For each question object (use [] to access data) create:
# A. A question object
# B. An answer object
# C. A QuestionAnswer that points to the question and answer AND game_id (stored in session)



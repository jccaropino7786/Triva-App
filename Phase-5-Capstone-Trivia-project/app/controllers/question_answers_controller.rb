class QuestionAnswersController < ApplicationController


    def create
        @question_answer = QuestionAnswer.new(question_answer_params)
        if @question_answer.save
          render json: @question_answer, status: :created
        else
          render json: @question_answer.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def question_answer_params
        params.permit(:question_id, :answer_id, :user_game_id)
      end
    
end

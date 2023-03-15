class QuestionAnswersController < ApplicationController

  def index
    render json: QuestionAnswer.all, status: :ok
  end


    def create
      render json: QuestionAnswer.create!(answer_params), status: :created
      end
    
      private
    
      def question_answer_params
        params.permit(:question_id, :answer_id, :user_game_id)
      end
    
end

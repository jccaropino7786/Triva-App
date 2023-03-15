class AnswersController < ApplicationController

    def create
        @answer = Answer.new(answer_params)
        if @answer.save
          render json: @answer, status: :created
        else
          render json: @answer.errors, status: :unprocessable_entity
        end
      end
      
      private
      
      def answer_params
        params.permit(:answer_text)
      end    

end

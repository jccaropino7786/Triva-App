class AnswersController < ApplicationController


    def index
        render json: Answer.all, status: :ok
    end

  
      
      private
      
      def answer_params
        params.permit(:answer_text)
      end    

end

class AnswersController < ApplicationController


    def index
        render json: Answer.all, status: :ok
    end

    # def create
    #     params[:questions].each do |q|
    #         question = Question.create!(answer_text: q.question)
    #     end
    #   end
      
      private
      
      def answer_params
        params.permit(:answer_text)
      end    

end

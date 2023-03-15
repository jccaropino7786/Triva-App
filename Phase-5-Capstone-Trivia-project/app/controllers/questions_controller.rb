class QuestionsController < ApplicationController

    def create
        @question = Question.new(question_params)
        if @question.save
          render json: @question, status: :created
        else
          render json: @question.errors, status: :unprocessable_entity
        end
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



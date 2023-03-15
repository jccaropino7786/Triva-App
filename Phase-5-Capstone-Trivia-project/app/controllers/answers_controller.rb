class AnswersController < ApplicationController

    def create
        new_answer = @user.find_or_create_by( :answer )
        render json: new_answer, status: :created
    end

end

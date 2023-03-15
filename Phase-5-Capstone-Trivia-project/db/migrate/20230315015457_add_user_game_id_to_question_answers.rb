class AddUserGameIdToQuestionAnswers < ActiveRecord::Migration[6.1]
  def change
    add_reference :question_answers, :user_game, null: false, foreign_key: true
  end
end

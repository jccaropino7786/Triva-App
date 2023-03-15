class UserGame < ApplicationRecord
    belongs_to :game
    belongs_to :user
    has_many :question_answers, dependent: :destroy
end

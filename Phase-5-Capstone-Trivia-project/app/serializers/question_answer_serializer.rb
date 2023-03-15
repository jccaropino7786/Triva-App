class QuestionAnswerSerializer < ActiveModel::Serializer
  attributes :id, :user_game_id
  has_one :question
  has_one :answer
end

class QuestionAnswerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :question
  has_one :answer
end

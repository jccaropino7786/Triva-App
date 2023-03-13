class UserGameSerializer < ActiveModel::Serializer
  attributes :id, :score
  has_one :user
  has_one :game
end

class UserGameSerializer < ActiveModel::Serializer
  attributes :id, :user, :score
end

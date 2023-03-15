class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :username
  has_many :user_games
  has_many :games
end

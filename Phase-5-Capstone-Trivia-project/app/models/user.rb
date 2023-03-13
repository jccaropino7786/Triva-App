class User < ApplicationRecord
    has_many :user_games, dependent: :destroy
    has_many :games, through: :user_games
    

    has_secure_password

    validates :email, presence: true, uniqueness:true
    validates :username, presence: true, uniqueness:true
    validates :password, presence: true, length: { minimum: 8 }, on: :create

end

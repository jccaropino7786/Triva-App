# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting Old Data"
User.destroy_all
UserGame.destroy_all
Game.destroy_all


g1 = Game.create(name: "Trivia")

aaa = User.create(username:"AAA", password:"password", email: "aaa@faketrivia.com")

puts "creating usergame"
UserGame.create(user:aaa, game:g1, score: 1)
UserGame.create(user:aaa, game:g1, score: 2)
UserGame.create(user:aaa, game:g1, score: 3)
UserGame.create(user:aaa, game:g1, score: 4)
UserGame.create(user:aaa, game:g1, score: 5)
UserGame.create(user:aaa, game:g1, score: 6)
UserGame.create(user:aaa, game:g1, score: 7)
UserGame.create(user:aaa, game:g1, score: 8)
UserGame.create(user:aaa, game:g1, score: 9)
UserGame.create(user:aaa, game:g1, score: 10)

puts "🌱🌱🌱Data Seeded🌱🌱🌱"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Chirp.destroy_all
Like.destroy_all

user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user4 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user5 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user6 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user7 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user8 = User.create(username: Faker::Name.name, email: Faker::Internet.email)
user9 = User.create(username: Faker::Name.name, email: Faker::Internet.email)

chirp1 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user1.id)
chirp2 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user1.id)
chirp3 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user1.id)
chirp4 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user2.id)
chirp5 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user2.id)
chirp6 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user2.id)

Like.create(user_id: user3.id, chirp_id: chirp1.id)
Like.create(user_id: user4.id, chirp_id: chirp2.id)
Like.create(user_id: user5.id, chirp_id: chirp3.id)
Like.create(user_id: user3.id, chirp_id: chirp3.id)
Like.create(user_id: user4.id, chirp_id: chirp1.id)
Like.create(user_id: user5.id, chirp_id: chirp2.id)

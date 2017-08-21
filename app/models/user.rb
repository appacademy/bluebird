# == Schema Information
#
# Table name: users
#
#  id       :integer          not null, primary key
#  username :string           not null
#  email    :string
#

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :liked_chirps,
    through: :likes,
    source: :chirp

  has_many :chirps,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chirp
end

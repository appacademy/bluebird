# == Schema Information
#
# Table name: chirps
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chirp < ApplicationRecord
  validates :body, :author_id, presence: true
  validate :chirp_too_long

  has_many :likes,
    primary_key: :id,
    foreign_key: :chirp_id,
    class_name: :Like

  has_many: :likers,
    through: :likes,
    source: :user

  def chirp_too_long
    if body.length > 140
      errors[:body] << "too long"
    end
  end
end

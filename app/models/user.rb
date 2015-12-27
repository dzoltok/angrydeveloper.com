class User < ActiveRecord::Base
  has_many :posts

  validates :uid, presence: true
  validates :handle, presence: true
end

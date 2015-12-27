class User < ActiveRecord::Base
  validates :uid, presence: true
  validates :handle, presence: true
end

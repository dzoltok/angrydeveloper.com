class Oauth < ActiveRecord::Base
  validates :token, presence: true
  validates :secret, presence: true
end

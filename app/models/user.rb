class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable,
    :omniauthable, :omniauth_providers => [:facebook]

  has_many :requests
  has_many :hosts, through: :requests

  def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.access_token = auth.credentials.token
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.location = auth.extra.raw_info.location.name unless auth.extra.raw_info.location.nil?
    end
  end
end

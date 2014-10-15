class Contact < ActiveRecord::Base
  validates :name, :cellphone, presence: true
  validates :cellphone, uniqueness: true
  validates_format_of :cellphone, :with => /\A(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\z/
  default_scope {order('created_at DESC')}
end

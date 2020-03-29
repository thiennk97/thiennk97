class Model < ApplicationRecord
  scope :sorted, ->{order id: :desc}
end

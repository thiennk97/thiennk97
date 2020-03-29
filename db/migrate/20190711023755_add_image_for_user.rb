class AddImageForUser < ActiveRecord::Migration[6.0]
  def change
    add_column :models, :image, :string
  end
end

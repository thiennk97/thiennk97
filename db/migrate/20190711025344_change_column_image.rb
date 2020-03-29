class ChangeColumnImage < ActiveRecord::Migration[6.0]
  def change
    change_column :models, :image, :text
  end
end

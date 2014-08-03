class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :user_id
      t.integer :host_id
      t.string :status

      t.timestamps
    end
  end
end

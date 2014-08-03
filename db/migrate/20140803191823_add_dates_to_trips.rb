class AddDatesToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :start_date, :string
    add_column :trips, :end_date, :string
  end
end

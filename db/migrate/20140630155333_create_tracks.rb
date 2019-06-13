class CreateTracks < ActiveRecord::Migration[4.2]
  def change
    create_table :tracks do |t|
      t.belongs_to :bootleg, index: true
      t.string :name
      t.string :filepicker_url

      t.timestamps
    end
  end
end

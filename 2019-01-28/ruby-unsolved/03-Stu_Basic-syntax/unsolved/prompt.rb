# 1. Create you store's profile using a hash. You must include at least 4 different keys, and one of those keys must point to an array of items your store sells.
store1 = {
    :name => "Deli& Liquor",
    :location => "3948 Fulton st",
    :phone => "415.342.9479",
    :hours => "9am - 9pm",
    :items => ["Bread", "Cheese", "Chicken", "Bacon", "Beer", "Stuff"]
}

# 2. Print out a short bio about your store using some of the keys in the hash you just created.
name_alt = store1[:name]
puts name_alt

store1_alt = store1[store1]
puts store1_alt

# 3. Print all the items your store sells.
items_alt = store1[:items]
puts items_alt

# 4. Add 5 new items to your warehouse and print out your updated stores.

# 5. Remove three items from your warehourse and print out your updated stores.



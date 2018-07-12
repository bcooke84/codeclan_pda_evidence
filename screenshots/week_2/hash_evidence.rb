def printAllKeysAndValues(hash)
  hash.each do |key, value|
    puts "The key is #{key} and the value is #{value}."
  end
end

new_hash = {
  name: "Brian",
  lottery: [7, 10, 13, 25, 30, 48],
  hometown: "Inverness",
}

puts  printAllKeysAndValues(new_hash)

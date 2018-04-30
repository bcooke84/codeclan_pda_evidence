### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# 1. card.value should be == 1 in this conditional statement.
# 2. This should be a self method.
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end


# 1. Card class does not have a name property
# 2. def spelt wrongly
# 3. the instance of the card class is not specified on line 35
# 4. there is an extra end on line 40
# 5. return in front of card 2 on line 37?
# 6. Is it the value being returned or the whole object?
# 7. Comma missing between arguments

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

# 1. total should be declared with a value. eg total = 0 on line 49
# 2. the total will be returned on each iteration of the loop.  If the true total is required, it should be returned after the for loop is finished - between the 'ends' on lines 51 & 52.
# 3. self method not required, should be for a specific instance of the class
# 4. Conversion of total to string or string interpolation required.

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of #{total}"
  end
end

# class does not end

```

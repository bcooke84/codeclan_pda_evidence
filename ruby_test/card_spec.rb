require( 'minitest/autorun' )
require( 'minitest/rg' )

require_relative( 'testing_task_2.rb' )

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("hearts", 1)
    @card2 = Card.new("diamonds", 2)
    @card3 = Card.new("spades", 7)
    @card4 = Card.new("clubs", 10)
    @cards = [@card1, @card2, @card3, @card4]

    @cardgame1 = CardGame.new()
  end

  # def test_check_for_ace()
  #   assert_equal(true, @cardgame1.checkforAce(@card1))
  #   assert_equal(false, @cardgame1.checkforAce(@card2))
  # end

  def test_highest_card()
    assert_equal(@card4, @cardgame1.highest_card(@card3, @card4))
    assert_equal(@card3, @cardgame1.highest_card(@card3, @card2))
  end

  # def test_cards_total()
  #   assert_equal("You have a total of #{20}", @cardgame1.cards_total(@cards))
  # end


end

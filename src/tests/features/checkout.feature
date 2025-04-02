Feature: Checkout process

  Scenario: Complete purchase
    Given I have products in my cart
    When I proceed to checkout
    And I fill in the shipping details
    And I complete the purchase
    Then I should see the order confirmation page

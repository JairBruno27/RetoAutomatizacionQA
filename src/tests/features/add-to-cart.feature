Feature: Add product to the cart

  Scenario: Add product to cart successfully
    Given I am logged in as a standard user
    When I add multiple products to the cart
    Then I should see the product in the cart

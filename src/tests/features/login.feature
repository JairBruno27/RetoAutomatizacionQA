Feature: Login

    Scenario: Login with valid credentials
    Given I am on the Sauce Demo login page
    When I enter valid credentials
    And I click on the login button
    Then I should be redirected to the products page


    Scenario: Login with invalid credentials
    Given I am on the Sauce Demo login page
    When I enter invalid credentials
    And I click on the login button
    Then I should see an error message
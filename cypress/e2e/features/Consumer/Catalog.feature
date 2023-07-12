Feature: Consumer Catalog

    As a user of consummer website
    I want to verify the statuses on the thumbnail

    Background:
        Given the user opens the consumer portal

    @PABL-405 @PB-23 @M2
    Scenario: Check the display of configurable product blocks M2
        When  the user checks the display of configurable product blocks in 'Clothing > Men > T-Shirt'
        Then  verify that the display of button to see the options
        And verify that the number of available options is displayed in the product block
        And verify the display of product options on the product page

    @PABL-51 @PB-24 @M3_2
    Scenario: Check the functioning and display of the filters and sorting M3-2
        When the user enter to "Clothing" blocks
        And the user click in this Filter button
        Then the user checks the functioning of the following sorting option
            | option       |
            | Price        |
            | Product Name |
        And the user checks the buttons 'ascending' and 'descending' are displayed correctly
        When the user sorting the list
            | option   | typeSorting   |
            | <option> | <typeSorting> |
        Then verify that the sorting options are displayed correctly and functional
            | option   | typeSorting   |
            | <option> | <typeSorting> |
        Examples:
            | option       | typeSorting |
            | Price        | Ascending   |
            # This is unavailable -> Due to a bug found https://panierbleu.atlassian.net/browse/PAN-35
            #| Price        | Descending  |
            | Product Name | Ascending   |
            | Product Name | Descending  |
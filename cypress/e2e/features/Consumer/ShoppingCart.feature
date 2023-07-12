Feature: Consumer Cart Page

    As a user of the consumer website
    I want to add products to my cart

    Background:
        Given the user opens the consumer portal

    @PABL-388 @PB-30 @P2
    Scenario: Verify the data concerning the vendor on the consumer website P2
        When the user adds a product to the cart
        And the user accesses the cart
        Then  verify that Vendors section titles have the information
            | information                 |
            | Vendor Name - City - Region |

    @PABL-671 @PB-32 @P4
    Scenario: Check blocks of products are present on the consumer website P4
        When the user adds a product to the cart
        And the user accesses the cart
        Then verify that the blocks do not have any cta 'add to cart'
        And the user checks that the product recommendation blocks are present in the cart

    @PABL-757 @PB-34 @P6
    Scenario: Verification of address display and check out on the consumer website P6
        When the user adds a product that has the tag 'Free in-store pickup' to the cart
        And the user clicks on the 'Search' icon
        And the user adds a product to the cart
        And the user accesses the cart
        And the user scrolls 'Estimate shipping changes and tax'
        Then verify that the full address appears in parentheses below the store name
        And verify that the checkout can be completed
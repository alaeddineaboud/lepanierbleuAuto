Feature: Consummer Search

    As a user of the consummer website
    I want to search products

    Background:
        Given the user opens the consumer portal

    @PABL-346 @PB-21 @L1
    Scenario: Search products on the consumer website L1
        When the user enters a partial label "Livre" that may correspond to a product or a type of product in the Search field
        Then verify that an auto-completion is provided along with a list of suggestions
        And  verify that the elements in the suggestion list are sorted by type
            | type               |
            | Suggested Searches |
            | Blog posts         |
            | Products           |
            | Categories         |
            | Vendors            |
        When the user clicks on the 'Search' icon
        Then verify the display of the 'Search Results' page
            | display                        |
            | Header                         |
            | Search results                 |
            | Tab Products + number of items |
            | Tab Vendors + number of items  |
            | Tab Blog + number of items     |
            | Filters                        |
            | List                           |

    @PABL-191 @PB-53 @L2
    Scenario: Search products on the consummer website L2
        When  the user enters a partial label "Peluche" that may correspond to a product or a type of product in the Search field
        Then the user checks the display of 'Quick search'
        And  verify the 'Quick search' is displayed in the following order
            | order                     |
            | Icon + Suggested Searches |
            | Icon + Products           |
            | Icon + Categories         |
            | Icon + Vendors            |
            | Icon + Blog posts         |
            | Icon + Content            |
        And verify the number of results included in the 'Quick search'
        And verify that a maximum of 5 results are displayed for the category 'Product'
        And verify that a maximum of 3 results are displayed for other entities
        And verify that if no results exist for an entity then the entity is not present

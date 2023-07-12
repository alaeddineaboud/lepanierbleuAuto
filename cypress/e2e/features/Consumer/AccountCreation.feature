Feature: Consumer Creation of Account

    As a user of consumer website
    I want to create an account on the consumer website

    Background:
        Given the user opens the consumer portal

    @PABL-339 @PB-46 @T1
    Scenario: Verification that user is redirected to account creation page on the consumer website T1
        When the user selects 'My Account'
        Then verify user is redirected to the account creation page

    @PABL-336 @PB-47 @T2_1
    Scenario: Verification of creation of new account on the consumer website
        When the user selects 'My Account'
        Then verify the title is "My Account"
        And verify that the account creation page contains sentence "Or register with email"
        And verify the page contains field
            | field            | link |
            | First Name       | -    |
            | Last Name        | -    |
            | Email            | -    |
            | Password         | Show |
            | Confirm Password | -    |
        And verify the page contains icon Information with text "Your password must be at least 8 characters long, with a minimum of 3 different classes of characters (upper case, lower case, number or special character)"
        And verify the page contains cta "Create my Account"
        And verify the page contains text
            | text                                           |
            | Already have an account? Go back to login page |
            | Required Fields                                |

    @PABL-336 @PB-47 @T2_2
    Scenario Outline: Verification of creation of new account on the consumer website : T2-2
        When the user selects 'My Account'
        And the user selects Create my Account cta
        And the user selects the cta 'Create My Account'
        Then verify that all the fields turn red with the message "This is a required field."
        When the user fills in the fields to create a new account
            | first_Name   | last_Name   | email   | password   | confirm_Password   |
            | <first_Name> | <last_Name> | <email> | <password> | <confirm_Password> |
        Then verify that the validation bar is displayed in "<expected_Result>"
        Examples:
            | first_Name | last_Name | email           | password      | confirm_Password | expected_Result |
            | CTG        | Test      | ctg.test@ctg.lu | Abg$pu**98qsA | Abg$pu**98qsA    | green           |
            | CTG        | Test      | ctg.test@ctg.lu | Abg$p         | Abg$p            | red             |
            | CTG        | Test      | ctg.test@ctg.lu | abgopkjp      | abgopkjp         | red             |
            | CTG        | Test      | ctg.test@ctg.lu | aAaAaAaA      | aAaAaAaA         | red             |

    @PABL-336 @PB-47 @T2_5
    Scenario: Verification of creation of new account on the consummer website : T2-5
        When the user selects 'My Account'
        And the user selects Create my Account cta
        And the user fills in the fields to create a new account with random email
            | first_Name | last_Name | email      | password      | confirm_Password |
            | CTG        | Test      | @gmail.com | Abg$pu**98qsA | Abg$pu**98qsA    |
        And the user selects the cta 'Create My Account'
        Then verify that the user is redirected to the 'My Account' page
        And verify that a pop-in appears indicating 'Thank you for registering with Le Panier Bleu.'

    @PABL-510 @PB-49 @T4
    Scenario: Verification of phone number field on the consumer website T4
        Given the user is logged in
            | email           | password      |
            | ctg.test@ctg.lu | Abg$pu**98qsA |
        When the user selects 'My Account'
        And the user chooses "My Address Book"
        And the user clicks "Edit Billing Address"
        Then the user checks the field 'Phone Number'
        And verify that the phone number is automatically formatted as example below
            | example      |
            | 514-123-4567 |
        And verify that the user cannot enter more than 10 digits

    @PABL-509 @PB-50 @T5
    Scenario Outline: Verification of postal code field on the consumer website that do not start with letter below are not working G-H-J T5
        Given the user is logged in
            | email           | password      |
            | ctg.test@ctg.lu | Abg$pu**98qsA |
        When the user selects 'My Account'
        And the user chooses "My Address Book"
        And the user clicks "Edit Billing Address"
        And the user enter 'postal_Code' and 'phone_Number' and validate
            | postal_Code   | phone_Number   |
            | <postal_Code> | <phone_Number> |
        And the user clicks on 'Save Address'
        Then verify that result on the Edit Address page is displayed "<expected_Result>"
        Examples:
            | postal_Code | phone_Number | expected_Result                          |
            | F2T 2S5     | 514-282-4545 | Please enter a valid postcode in Quebec. |
            | A2T 2S5     | 514-282-4545 | Please enter a valid postcode in Quebec. |
            | A1B 2C3     | 514-282-4545 | Please enter a valid postcode in Quebec. |

    @PABL-509 @PB-50 @T7
    Scenario Outline: Verification of postal code field on the consumer website that do not start with letter below are working G-H-J T7
        Given the user is logged in
            | email           | password      |
            | ctg.test@ctg.lu | Abg$pu**98qsA |
        When the user selects 'My Account'
        And the user chooses "My Address Book"
        And the user clicks "Edit Billing Address"
        And the user enter 'postal_Code' and 'phone_Number' and validate
            | postal_Code   | phone_Number   |
            | <postal_Code> | <phone_Number> |
        And the user clicks 'Save Address'
        Then verify that result on the My Address Book page is displayed "<expected_Result>"
        Examples:
            | postal_Code | phone_Number | expected_Result        |
            | G2T 2S5     | 514-282-4545 | You saved the address. |
            | H2T 2S5     | 514-282-4545 | You saved the address. |
            | J2T 2S5     | 514-282-4545 | You saved the address. |

    @PABL-509 @PB-50 @T8
    Scenario Outline: Verification of invalid number field on the consumer website T8
        Given the user is logged in
            | email           | password      |
            | ctg.test@ctg.lu | Abg$pu**98qsA |
        When the user selects 'My Account'
        And the user chooses "My Address Book"
        And the user clicks "Edit Billing Address"
        And the user enter 'postal_Code' and 'phone_Number' and validate
            | postal_Code   | phone_Number   |
            | <postal_Code> | <phone_Number> |
        And the user clicks 'Save Address'
        Then verify that phone number result on the Edit Address page is displayed "<expected_Result>"
        Examples:
            | postal_Code | phone_Number | expected_Result                    |
            | G2T 2S5     | 514-282-454  | Please enter a valid phone number. |

   
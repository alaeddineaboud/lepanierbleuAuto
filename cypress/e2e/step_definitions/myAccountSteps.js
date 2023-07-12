import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const myAccount = require("../../pages/MyAccountPage");

Then("verify that the user is redirected to the 'My Account' page", () => {
  myAccount.verifyMyAccountTittleDisplayed();
});

Then(
  "verify that a pop-in appears indicating 'Thank you for registering with Le Panier Bleu.'",
  () => {
    myAccount.verifyPopInSuccessAccountCreation();
  }
);

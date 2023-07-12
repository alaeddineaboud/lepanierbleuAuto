import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const payementDetailsPage = require("../../pages/PayementDetailsPage");

Then("The url will contains the shipping subdirectory", () => {
  cy.wait(8000);
  cy.url().should("contains", "shipping");
});

And("In Order Summary should see {string} Qte", (qte) => {
  payementDetailsPage.verifyQte(qte);
});
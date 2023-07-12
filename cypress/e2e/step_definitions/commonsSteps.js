import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("the user opens the consumer portal", () => {
  cy.openConsumerPortal();
});

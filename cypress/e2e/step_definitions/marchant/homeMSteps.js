import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("l'utilisateur est sur le site marchant", () => {
  cy.visit("https://mcstaging.lepanierbleu.ca/fr/udropship");
});


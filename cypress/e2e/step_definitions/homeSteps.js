import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/HomePage");

Given("l'utilisateur est sur le site web panier bleu avec {string}", (configBrowser) => {
  if(configBrowser != "pc"){
    cy.viewport(configBrowser)
  } 
  cy.visit("/");
});

When ("l'utilisateur recherche le produit {string}", (produit) => {
  Cypress.env('produit',produit);
   homePage.typeProduit(produit);
   homePage.clickLogin();
 });
 
And ("l'utilisateur fait défiler les résultats de recherche jusqu'à trouver le produit {string}", (produitDetail) => {
  Cypress.env('produitDetail',produitDetail);
  homePage.verifyProduit(produitDetail);
});

And ("l'utilisateur selectionne le produit", () => {
  var produitDetail = Cypress.env('produitDetail');
  homePage.detailProduit(produitDetail);
});

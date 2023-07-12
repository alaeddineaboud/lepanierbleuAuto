import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const articleDetailsPage = require("../../pages/ArticleDetailsPage");
const articlePage = require("../../pages/ArticlePage");

And("A user adds the article in the basket", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  articleDetailsPage.addToBasket();
});

And(
  "l'utilisateur repère l'encadré 'VENDU ET EXPÉDIÉ PAR' et clique sur '2 marchands pour ce produit'",
  () => {
    articleDetailsPage.verifierVenduExpedie();
    articleDetailsPage.getDetailleMarchands();
  }
);

And(
  "l'utilisateur voit apparaître une pop-up latérale avec les différents vendeurs proposant le produit",
  () => {
    var produitDetail = Cypress.env("produitDetail");
    //cy.get('.notifications-wrapper').contains('Vous avez ajouté ' + produitDetail).should('be.visible')
    articleDetailsPage.fermerPopupMarchands();
  }
);

And(
  "l'utilisateur clique sur le bouton 'Ajouter au panier' pour le vendeur {string}",
  (vendeur) => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    articleDetailsPage.addToBasket();
  }
);

And("la pop-up se ferme automatiquement", () => {
  cy.get(".notifications-wrapper")
    .contains("Vendu et Expédié Par")
    .should("not.be.visible");
});

And(
  "l'utilisateur voit apparaître un bandeau de notifications {string}",
  (message) => {
    articleDetailsPage.verifierMessageAjoutArticlePannier(message);
  }
);

Then("verify the display of product options on the product page", () => {
  articlePage.clickOnAnyProduct();
  articleDetailsPage.verifyOptionsProductsDisplayed();
});

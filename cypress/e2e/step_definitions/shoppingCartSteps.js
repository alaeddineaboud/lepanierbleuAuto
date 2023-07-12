import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const shoppingCartPage = require("../../pages/ShoppingCartPage");

And("A user enter on the basket", () => {
  cy.wait(3000);
  shoppingCartPage.goToShopping();
});

And("A user clicks on the proceed to checkout button", () => {
  cy.wait(3000);
  shoppingCartPage.clickPasserCommande();
});

And("l'utilisateur clique sur le lien 'Panier'", () => {
  cy.wait(3000);
  shoppingCartPage.goToShopping();
});

And(
  "l'utilisateur se trouve sur la page de son panier et il repère le champ quantité",
  () => {
    shoppingCartPage.verifierQuantite();
  }
);

And(
  "l'utilisateur écrit {string} dans le champ et il clique sur 'Mettre à jour'",
  (qt) => {
    shoppingCartPage.typeQuantite(qt);
    shoppingCartPage.majQuantite();
  }
);

And(
  "l'utilisateur voit apparaître le récapitulatif de son panier à droite de la page et il clique sur 'Estimer les frais de livraisons et les taxes'",
  () => {
    shoppingCartPage.goToEstimerFraisLivraisonsTaxes();
  }
);

And(
  "dans le champ 'Code Postal', l'utilisateur saisit {string} et il clique sur 'Livraison standard'",
  (codePostal) => {
    shoppingCartPage.typeCodePostal(codePostal);
    shoppingCartPage.enterLivraisonStandard();
  }
);

And("l'utilisateur clique sur 'Passer à la caisse'", () => {
  shoppingCartPage.enterPasserALaCaisse();
});

Then("verify that Vendors section titles have the information", (dataTable) => {
  shoppingCartPage.verifyVendorsInfo(dataTable);
});

Then("verify that the blocks do not have any cta 'add to cart'", () => {
  shoppingCartPage.verifyAddToCartButtonIsNotDisplayed();
});

Then(
  "the user checks that the product recommendation blocks are present in the cart",
  () => {
    shoppingCartPage.verifyProductRecommendationIsDisplayed();
  }
);

When("the user scrolls 'Estimate shipping changes and tax'", () => {
  shoppingCartPage.clickEstimateShippingTax();
});

Then(
  "verify that the full address appears in parentheses below the store name",
  () => {
    shoppingCartPage.verifyFullShippingAddressDisplayed();
  }
);

Then("verify that the checkout can be completed", () => {
  shoppingCartPage.verifyProceedCheckoutButtonEnable();
});

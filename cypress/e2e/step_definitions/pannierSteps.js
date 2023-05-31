import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const pannierPage = require("../../pages/PannierPage");

And("A user enter on the basket", () => {
  cy.wait(3000);
  pannierPage.enterBasket();
});

And("A user clicks on the proceed to checkout button", () => {
  cy.wait(3000);
  pannierPage.clickPasserCommande();
});

And ("l'utilisateur clique sur le lien 'Panier'", () => {
  cy.wait(3000);
  pannierPage.enterBasket();
});



And ("l'utilisateur se trouve sur la page de son panier et il repère le champ quantité", () => {
  pannierPage.verifierQuantite();
});

And ("l'utilisateur écrit {string} dans le champ et il clique sur 'Mettre à jour'", (qt) => {
  pannierPage.typeQuantite(qt);
  pannierPage.majQuantite();
});

And ("l'utilisateur voit apparaître le récapitulatif de son panier à droite de la page et il clique sur 'Estimer les frais de livraisons et les taxes'", () => {
  pannierPage.goToEstimerFraisLivraisonsTaxes();
});

And ("dans le champ 'Code Postal', l'utilisateur saisit {string} et il clique sur 'Livraison standard'", (codePostal) => {
  pannierPage.typeCodePostal(codePostal);
  pannierPage.enterLivraisonStandard();
});

And ("l'utilisateur clique sur 'Passer à la caisse'", () => {
  pannierPage.enterPasserALaCaisse();
});









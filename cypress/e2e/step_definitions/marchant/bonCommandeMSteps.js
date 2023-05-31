import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const bonCommandePage = require("../../../pages/Marchant/BonCommandeMPage");


And("l'utilisateur selectionne le Bon de commande numéro {string}", (numBonCommande) => {
  bonCommandePage.afficheBponCommande(numBonCommande);
});


And("l'utilisateur modife l'état du bon de commande à {string}", (etatBonCommande) => {
  bonCommandePage.setEtatBonCommande(etatBonCommande);
});


And("l'utilisateur choisir un expediteur {string} avec un numéro {string} et il valide", (nomExpediteur, numeroSuivi) => {
  bonCommandePage.setExpediteur(nomExpediteur);
  bonCommandePage.setNumeroSuivi(numeroSuivi);
  bonCommandePage.clickCreerExpedition();
});


Then("vérifier la présence d'un message de validation {string}", (message) => {
  bonCommandePage.verifierMessageValidation(message);
});


And("verifier la présence du lien 'Bordereau d'expédition' pour téléchargemant", () => {
  bonCommandePage.verifierBorderauExpedition();
});








import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const connexionPage = require("../../pages/ConnexionPage");






And ("l'utilisateur saisit ses informations de paiement et il clique sur 'Procéder au paiement'", () => {
  connexionPage.verifierPageRecapitulatifCommande();
  connexionPage.goToPasserALaCaisse();
});

Then ("vérifier que l'utilisateur se trouve sur la page du paiement", () => {
  connexionPage.verifierPagePayement();
});

Then ("l'utilisateur choisir le mode de paiement {string}", (typePayement) => {
  if(typePayement == "Chèque / Mandat"){
    connexionPage.choisirChequeMandat();   //#checkmo
  }else{
    connexionPage.choisirCB();
  }
  connexionPage.validerPayement();
});

Then ("verifier la presence Le numéro de commande", () => {
  connexionPage.verifierNumeroCommande();  //.order-number 
});

/*
choisirChequeMandat
choisirCB
validerPayement
verifierNumeroCommande
*/


class homeSaucePage {
  elements = {
    etatBonCommandeSelect: () => cy.get('[name="status"]'),
    nomExpediteurInput: () => cy.get('[name="carrier_title"]').eq(0),
    numeroSuiviInput: () => cy.get('[name="tracking_id"]').eq(0),
  };

  afficheBponCommande(numBonCommande) {
    cy.wait(2000)
    cy.contains(numBonCommande).parent().find(".action").click();
  }


  setEtatBonCommande(etatBonCommande) {
    this.elements.etatBonCommandeSelect().eq(0).select(etatBonCommande);
  }


  setExpediteur(nomExpediteur) {
    this.elements.nomExpediteurInput().type(nomExpediteur);
  }


  setNumeroSuivi(numeroSuivi) {
    this.elements.numeroSuiviInput().type(numeroSuivi);
  }


  clickCreerExpedition() {
    cy.contains("Créer une expédition").eq(0).click({ force: true });
  }


  verifierMessageValidation(message) {
    cy.contains(message).should('be.visible');
  }


  verifierBorderauExpedition() {
    cy.contains("Bordereau d'expédition").should('be.visible');
  }





}

module.exports = new homeSaucePage();

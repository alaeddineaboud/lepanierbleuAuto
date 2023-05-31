class homeSaucePage {
  elements = {
    basketButton: () => cy.get('.minicart-wrapper > .action.showcart'),
    basketCount: () => cy.get('.counter.qty.empty'),
    passerCommandeButton: () => cy.get('.item > .action'),
    qtButton: () => cy.get('.item > .action'),
    estimerFraisLivraisonsTaxesButton: () => cy.get('#block-shipping-heading'),
    typeCodePostalInput: () => cy.get('[name="postcode"]'),
    passerALaCaisseButton: () => cy.get('[data-role="proceed-to-checkout"]').eq(0),
    livraisonStandardButton: () => cy.get('.minicart-wrapper > .action.showcart'),
    qtInput: () => cy.get('[data-role="cart-item-qty"]'),
    majQuantiteButton: () => cy.get('.update-cart-item'),
    livraisonOpt: () => cy.get('[type="radio"]'),

    

    
  };

  enterBasket() {
    //this.elements.basketCount().should('not.exist');
    cy.wait(3000);
    this.elements.basketButton().click({ force: true });
  }

  clickPasserCommande() {
    this.elements.passerCommandeButton().click({ force: true });
  }

  

verifierQuantite() {
  this.elements.qtInput().should('be.visible')
}

typeQuantite(qt) {
  this.elements.qtInput().eq(0).clear().type(qt);
}

majQuantite() {
  this.elements.majQuantiteButton().eq(0).click({ force: true });
}

goToEstimerFraisLivraisonsTaxes() {
  cy.wait(5000);
  this.elements.estimerFraisLivraisonsTaxesButton().should('be.visible').click({ force: true });
}


typeCodePostal(codePostal) {
  cy.wait(5000);
  this.elements.typeCodePostalInput().clear().type(codePostal);
}

enterLivraisonStandard() {
  this.elements.livraisonOpt().eq(1).click({ force: true })
}

enterPasserALaCaisse() {
  this.elements.passerALaCaisseButton().click({ force: true });
}
 

}

module.exports = new homeSaucePage();

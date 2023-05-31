class homeSaucePage {
  elements = {
    pageRecapitulatifCommandeDiv: () => cy.get('#shipping'),
    passerALaCaisseButton: () => cy.get('[data-role="opc-continue"]'),
    pagePayementDiv: () => cy.get('.checkout-payment-method'),

    chequeMandatOpt: () => cy.get('#checkmo'),
    cbOpt: () => cy.get('#rootways_bamboratoken_option_wrapper'),
    placerCommandeBtn: () => cy.get('[title="Placer la commande"]').eq(0),
    numeroCommandeOpt: () => cy.get('.checkout-payment-method'),


  };


  goToPasserALaCaisse() {
    this.elements.passerALaCaisseButton().click({ force: true });
  }

  verifierPageRecapitulatifCommande() {
    this.elements.pageRecapitulatifCommandeDiv().should('be.visible');
  }


  verifierPagePayement() {
    this.elements.pagePayementDiv().should('be.visible');
  }


  choisirChequeMandat() {
    this.elements.chequeMandatOpt().click({ force: true });
  }

  choisirCB() {
    this.elements.cbOpt().click({ force: true });
  }

  validerPayement() {
    this.elements.placerCommandeBtn().click({ force: true });
  }

  verifierNumeroCommande() {
    this.elements.numeroCommandeOpt().should('be.visible');
  }


}

module.exports = new homeSaucePage();

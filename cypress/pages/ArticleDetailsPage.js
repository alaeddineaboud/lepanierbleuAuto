class homeSaucePage {
  elements = {
    addToBasketButton: () => cy.get("#product-addtocart-button"),
    fermerPopupMarchandstButton: () => cy.get("#product-addtocart-button"),
    alertDiv: () => cy.get('[role="alert"]'),
    moreVendorsButton: () => cy.get('[data-action="init-more-vendors"]'),
    optionsProductsAvalaibles: () => cy.get(".super-attribute-select"),
  };

  addToBasket() {
    this.elements.addToBasketButton().should("not.be.disabled");
    this.elements.addToBasketButton().click({ force: true });
  }

  verifierVenduExpedie() {
    cy.get(".label.vendor-default-label")
      .contains("Vendu et expédié par")
      .should("be.visible");
  }

  getDetailleMarchands() {
    this.elements.moreVendorsButton().click({ force: true });
  }

  fermerPopupMarchands() {
    this.elements.fermerPopupMarchandstButton().click({ force: true });
  }

  verifierMessageAjoutArticlePannier(message) {
    this.elements.alertDiv().contains(message).should("be.visible");
  }

  verifyOptionsProductsDisplayed() {
    this.elements.optionsProductsAvalaibles().should("be.visible");
  }
}

module.exports = new homeSaucePage();

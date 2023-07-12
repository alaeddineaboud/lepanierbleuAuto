class homeSaucePage {
  elements = {
    qteLabel: () =>
      cy.get('span[data-bind="text: getCartSummaryItemsCount()"]'),
  };

  verifyQte(qte) {
    this.elements.qteLabel().should("have.text", qte);
  }
}

module.exports = new homeSaucePage();

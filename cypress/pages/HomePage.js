class homeSaucePage {
  elements = {
    findBtn: () => cy.get(".action.search "),
    findInput: () => cy.get("#search"),
  };

 

  typeProduit(produit) {
    this.elements.findInput().type(produit);
  }

  clickLogin() {
    this.elements.findBtn().click({ force: true });
  }


  verifyProduit(produitDetail) {
    cy.get('.item.product.product-item').contains(produitDetail).should('be.visible');
  }


  detailProduit(produitDetail) {
    cy.get('.product.name.product-item-name.product-item-link-over').contains(produitDetail).click({ force: true });
  }


}

module.exports = new homeSaucePage();

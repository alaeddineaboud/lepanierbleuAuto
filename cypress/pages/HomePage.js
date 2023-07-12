class homeSaucePage {
  elements = {
    findBtn: () => cy.get(".action.search "),
    findInput: () => cy.get("#search"),
    findLanguage: (language) =>
      cy.get(
        ".panel > .switcher-locale-menu > .store-code-" +
          language +
          " > .switcher-item-lang"
      ),
    btnMyAccount: () => cy.get(".title > .description"),
    addProductToCart: () => cy.get(".product-items  .product-item-info form"),
  };

  typeProduct(product) {
    this.elements.findInput().type(product);
  }

  clickLogin() {
    this.elements.findBtn().click({ force: true });
  }

  verifyProduit(produitDetail) {
    cy.get(".item.product.product-item")
      .contains(produitDetail)
      .should("be.visible");
  }

  detailProduit(produitDetail) {
    cy.get(".product.name.product-item-name.product-item-link-over")
      .contains(produitDetail)
      .click({ force: true });
  }

  clickLanguage(language) {
    this.elements.findLanguage(language).should(($element) => {
      if ($element.length > 0) {
        $element.click();
      }
    });
  }

  clickSearchBtn() {
    this.elements.findBtn().click();
  }

  clickMyAccount() {
    this.elements.btnMyAccount().click();
  }

  verifySearchIconDisplayed() {
    this.elements.findBtn().should("be.visible");
  }

  addProductsToTheShoppingCart() {
    this.elements.addProductToCart().first().should("be.visible").click();
  }
}

module.exports = new homeSaucePage();

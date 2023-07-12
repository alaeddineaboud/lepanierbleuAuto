class homeSaucePage {
  elements = {
    articleLink: () => cy.get(".product-item-info.product-item-link-over"),
    articleListFromCatalogProduct: () =>
      cy.get(".products.list .product-item-info"),
    numberOptionsAvailable: () => cy.get("span.results-product-count"),
    seeOptionsBtn: () => cy.get(".action.primary.smaller").contains("See options"),
  };

  selectArticle() {
    this.elements.articleLink().first().click({ force: true });
  }

  verifySeeOptionsBtnDisplayed() {
    this.elements
      .articleListFromCatalogProduct()
      .first()
      .should("be.visible")
      .contains("See options");
  }

  verifyNumberOptionsAvailableDisplayed() {
    this.elements.numberOptionsAvailable().then(($element) => {
      const text = $element.text();
      const number = parseInt(text.match(/\d+/)[0]);
      expect(number).to.be.greaterThan(0);
    });
  }

  clickOnAnyProduct() {
    this.elements.seeOptionsBtn().click();
  }
}

module.exports = new homeSaucePage();

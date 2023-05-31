class homeSaucePage {
  elements = {
    articleLink: () => cy.get('.product-item-info.product-item-link-over'),
  };
 

  selectArticle() {
    this.elements.articleLink().first().click({ force: true });
  }
  

}

module.exports = new homeSaucePage();

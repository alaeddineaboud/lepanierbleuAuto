class homeSaucePage {
  elements = {
    menuNav: () => cy.get('.main-navigation-menu'),
  };

 
  clickMenu(menu) {
    this.elements.menuNav().contains(menu).click({ force: true });
  }



}

module.exports = new homeSaucePage();

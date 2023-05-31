class homeSaucePage {
  elements = {
    menuMainButton: () => cy.get('.level0.nav-1.category-item'),
    menuLink: (menu) => cy.get('a[aria-label="'+menu+'"]'),
    subMenuLink: () => cy.get(' .nav-1-1-1-1 > a > span'),
  };

  clickMenuMain() {
    this.elements.menuMainButton().click({ force: true });
  }
  
  clickMenu(menu) {
    this.elements.menuLink(menu).click({ force: true });
  }

  clickSubMenu() {
	//import '@testing-library/cypress/add-commands'
  this.elements.subMenuLink().click({ force: true });
  }
  
  
  
  
  

}

module.exports = new homeSaucePage();

class homeSaucePage {
  elements = {
    menuMainButton: () => cy.get(".level0.nav-1.category-item"),
    menuLink: (menu) => cy.get('a[aria-label="' + menu + '"]'),
    subMenuLink: () => cy.get(" .nav-1-1-1-1 > a > span"),
    menuAllCategoriesBtn: () =>
      cy.get('a.level-top[aria-label="All Categories"]'),
    subMenuCategories: () => cy.get('a[aria-label="Clothing and Accessories"]'),
    articleTshirtMenu: () => cy.get(".nav-1-5-2-1 a"),
    clothingCategoryLink: () =>
      cy
        .get(".level2.main-category-view-all a.parent-category-title")
        .contains("Clothing and Accessories"),
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

  navegateToTshirtProducts() {
    this.elements.menuAllCategoriesBtn().should("be.visible").click();
    this.elements.subMenuCategories().should("be.visible").click();
    this.elements.articleTshirtMenu().should("be.visible").click();
  }

  navegateToClothingCategories() {
    this.elements.menuAllCategoriesBtn().should("be.visible").click();
    this.elements.subMenuCategories().should("be.visible").click();
    this.elements.clothingCategoryLink().should("be.visible").click();
  }
}

module.exports = new homeSaucePage();

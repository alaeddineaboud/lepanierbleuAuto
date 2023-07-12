const assert = require("../support/helpers/Asserts");

class homeSaucePage {
  elements = {
    connexionBtn: () => cy.get(".customer-icon"),
    usernameInput: () => cy.get("#email"),
    usernamePopupInput: () => cy.get("#customer-email"),
    passwordInput: () => cy.get("#pass"),
    loginBtn: () => cy.get("#send2"),
    lblMyAccount: ".base",
    btnCreateMyAccount: () => cy.get("a.action.create.primary"),
  };

  typeUsername(username) {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    this.elements.usernameInput().type(username);
  }

  typeUsernamePopup(username) {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    this.elements.usernamePopupInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().should("not.be.disabled").click();
  }

  clickConnexion() {
    this.elements.connexionBtn().click({ force: true });
  }

  verifierVenduExpedie() {
    cy.get(this.elements.lblMyAccount())
      .contains("My Account")
      .should("be.visible");
  }

  verifyMyAccountTitle(textToCompare) {
    this.verifyMyAccountText(textToCompare);
    this.clickCreateMyAccount();
  }

  verifyMyAccountText(textToCompare) {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.lblMyAccount,
      textToCompare
    );
  }

  clickCreateMyAccount() {
    this.elements.btnCreateMyAccount().click();
  }

  fillLoginData(dataTable) {
    dataTable.hashes().forEach((element) => {
      this.elements.usernameInput().type(element.email);
      this.elements.passwordInput().type(element.password);
    });
  }
}

module.exports = new homeSaucePage();

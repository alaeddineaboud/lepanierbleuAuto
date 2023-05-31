class homeSaucePage {
  elements = {
    connexionBtn: () => cy.get(".customer-icon"),
    usernameInput: () => cy.get("#email"),
    usernamePopupInput: () => cy.get("#customer-email"),
    passwordInput: () => cy.get("#pass"),
    loginBtn: () => cy.get("#send2"),
  };

  typeUsername(username) {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    this.elements.usernameInput().type(username);
  }


  typeUsernamePopup(username) {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    this.elements.usernamePopupInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click({ force: true });
  }

  clickConnexion() {
    this.elements.connexionBtn().click({ force: true });
  }



}

module.exports = new homeSaucePage();

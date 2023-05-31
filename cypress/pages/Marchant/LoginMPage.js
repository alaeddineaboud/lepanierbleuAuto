class homeSaucePage {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#pass"),
    loginBtn: () => cy.get('[name="send"]'),
  };

  typeUsername(username) {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    this.elements.usernameInput().clear().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click({ force: true });
  }

}

module.exports = new homeSaucePage();

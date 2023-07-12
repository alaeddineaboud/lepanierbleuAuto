class homeSaucePage {
  elements = {
    headerMenuBtn: () => cy.get(".title>.name"),
    welcomeUser: () => cy.get(".customer-name"),
    signOutBtn: () => cy.get("#off-canvas-customer .sign-out"),
  };

  verifyMessage(message) {
    cy.contains(message).should("be.visible");
  }

  clickHeaderMenu() {
    this.elements.headerMenuBtn().click();
  }

  clickMesQuestionsAuxMarchands() {
    cy.contains("Mes questions aux marchands").click();
  }

  clickMenuOption(option) {
    cy.contains(option).click();
  }

  verifyLogInUserStatus() {
    this.verifyWelcomeUser();
    this.elements.signOutBtn().then(($element) => {
      if (!$element.is(":visible")) {
        $element[0].scrollIntoView();
      }
      cy.wrap($element).should("be.visible");
    });
  }

  verifyWelcomeUser() {
    this.elements.welcomeUser().should("include.text", "Hello");
  }
}

module.exports = new homeSaucePage();

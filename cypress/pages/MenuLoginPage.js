class homeSaucePage {
  elements = {
    headerMenuBtn: () => cy.get(".title>.name"),
  };


  verifyMessage(message) {
    cy.contains(message).should('be.visible')
  }

  clickHeaderMenu() {
    this.elements.headerMenuBtn().click();
  }

  clickMesQuestionsAuxMarchands() {
    cy.contains('Mes questions aux marchands').click()
  }


}

module.exports = new homeSaucePage();

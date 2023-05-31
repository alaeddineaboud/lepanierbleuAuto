class homeSaucePage {
  elements = {
    poserUneNouvellQuestionBtn: () => cy.get('[title="Poser une nouvelle question"]'),
    question_vendorOpt: () => cy.get('[for="question_vendor"]'),
    marchandcmb: () => cy.get('#select2-vendor-container'),
    questionTxt: () => cy.get('#question_text_vendor'),
    soumettreBtn: () => cy.get('#question-form').find('[title="Soumettre"]').eq(1),
    questionDiv: () => cy.get('.wrapper-question-details'),
    voirDetailsQuestionBtn: () => cy.get('.action.secondary.light.smaller'),
    hederDetailquestionDiv: () => cy.get('[data-ui-id="page-title-wrapper"]'),
    
  };


  clickPoserUneNouvellQuestion() {
    this.elements.poserUneNouvellQuestionBtn().click();
  }

  selectPoserQuestionMarchand() {
    this.elements.question_vendorOpt().click();
  }


  selectMarchand(nameMarchant) {
    this.elements.marchandcmb().click()
    //cy.get('#vendor').select(2)
    cy.get("li").contains(nameMarchant).click()
  }

  setQuestion(question) {
    this.elements.questionTxt().type(question)
  }


  clickSoumettre() {
    this.elements.soumettreBtn().click();
  }


  clickVoirDetailsQuestion() {
    this.elements.voirDetailsQuestionBtn().eq(0).click();
  }

  verifyQuestion() {
    this.elements.questionDiv().should('be.visible')
  }


  verifyDetailQuestion() {
    this.elements.hederDetailquestionDiv().should('be.visible')
  }

  verifyPresenceQuestion(question) {
    cy.contains(question).should('be.visible')
  }






}

module.exports = new homeSaucePage();

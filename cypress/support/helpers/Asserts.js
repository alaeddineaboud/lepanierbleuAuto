class Assert {
  /**
   * Verifies if the obtained text from an element is equal to the provided text.
   *
   * @param element The selector of the element from which the text will be obtained.
   * @param textToCompare The text to compare with the obtained text from the element.
   */
  verifyObtainedTextEqualWithTextFromBdd(element, textToCompare) {
    cy.get(element)
      .invoke("text")
      .then((text) => {
        cy.log(`--- The obtained text from element is: ${text}`);
        cy.get(element).should("have.text", textToCompare);
      });
  }
}

module.exports = new Assert();

const assert = require("../support/helpers/Asserts");

class EditAddress {
  elements = {
    phoneNumber: () => cy.get("#telephone"),
    postalCode: () => cy.get("#zip"),
    btnSaveAddress: () => cy.get("[title='Save Address']"),
    errorMsgPostalCode: "#zip-error",
    errorMsgPhoneNumber: "#telephone-error",
  };

  verifyPhoneNumber() {
    cy.get(this.elements.phoneNumber()).should("not.be.null");
  }

  verifyCorrectPhoneNumberFormat(dataTable) {
    // The expected format is: "###-###-####
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    const element = dataTable.hashes()[0];
    cy.log(`--- The phone number from dataTable is: ${element.example}`);
    try {
      expect(element.example, "phone #").to.match(phoneRegex);
    } catch (error) {
      throw new Error(`--- Invalid phone number format: ${element.example}`);
    }
  }

  verifyPhoneNumberWith10Digits() {
    this.elements.phoneNumber().clear().type("123456789012");
    cy.get("#telephone")
      .invoke("val")
      .then((text) => {
        cy.log(`--- New phone number added: ${text}`);
        const phoneNumberWithoutFormat = this.phoneNumberRegex(text);
        const characterCount = phoneNumberWithoutFormat.length;
        cy.log(`--- The character count is: ${characterCount}`);
        // .to.be.lte(10) is used to specify that the characterCount value is expected to be less than or equal to 10.
        expect(characterCount).to.be.lte(10);
      });
  }

  phoneNumberRegex(phoneNumber) {
    const newPhoneNumber = phoneNumber.replace(/-/g, "");
    console.log(newPhoneNumber);
    return newPhoneNumber;
  }

  fillPostalCodeAndPhoneNumber(dataTable) {
    dataTable.hashes().forEach((element) => {
      this.elements.phoneNumber().clear().type(element.phone_Number);
      this.elements.postalCode().clear().type(element.postal_Code);
    });
  }

  clickSaveAddressButton() {
    this.elements.btnSaveAddress().click();
  }

  verifyPostalCodeErrorDisplayed(message) {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.errorMsgPostalCode,
      message
    );
  }

  verifyPhoneNumberErrorDisplayed(message) {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.errorMsgPhoneNumber,
      message
    );
  }
}

module.exports = new EditAddress();

const assert = require("../support/helpers/Asserts");

class MyAddressBook {
  elements = {
    lblMyAddressBook: ".base",
    youSaveAddressMsg: ".page.messages div:nth-child(2) > div > div > div",
  };

  clickLink(element) {
    cy.contains(element).click();
  }

  successSaveAddressMessage(message) {
    this.verifyMyAddressBookDisplayed();
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.youSaveAddressMsg,
      message
    );
  }

  verifyMyAddressBookDisplayed() {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.lblMyAddressBook,
      "My Address Book"
    );
  }
}

module.exports = new MyAddressBook();

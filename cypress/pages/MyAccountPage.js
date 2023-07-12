const assert = require("../support/helpers/Asserts");

class MyAccount {
  elements = {
    tittleMyAccount: "[data-ui-id='page-title-wrapper']",
    successNewAccountMsg: "[data-ui-id='message-success'] > div",
  };

  verifyMyAccountTittleDisplayed() {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.tittleMyAccount,
      "My Account"
    );
  }

  verifyPopInSuccessAccountCreation() {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.successNewAccountMsg,
      "Thank you for registering with Le Panier Bleu."
    );
  }
}

module.exports = new MyAccount();

const assert = require("../support/helpers/Asserts");

class NewAccount {
  elements = {
    lblRegisterWithEmail: "#form-validate > fieldset.fieldset.create.info > h2",
    iconInformation: () => cy.get(".password-info-container"),
    lblPasswordConditions: "#password-rules",
    ctaCreateMyAccount: () => cy.get("#send2"),
    firstName: () => cy.get("#firstname"),
    lastName: () => cy.get("#lastname"),
    email: () => cy.get("#email_address"),
    password: () => cy.get("#password"),
    confirmPassword: () => cy.get("#password-confirmation"),
    existingEmailMessage: () => cy.get("[data-ui-id='message-error']"),
    existingEmailTextMessage: ".message-error > div",
    firstNameErrorMsg: "#firstname-error",
    lastNameErrorMsg: "#lastname-error",
    emailErrorMsg: "#email_address-error",
    passwordErrorMsg: "#password-error",
    confirmPasswordErrorMsg: "#password-confirmation-error",
    passwordStrengthBar: () => cy.get("#password-strength-meter"),
  };

  clickCreateAccountButton() {
    this.elements.ctaCreateMyAccount().should("not.be.disabled").click();
  }

  verifyRegisterWithEmailTitle(labelText) {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.lblRegisterWithEmail,
      labelText
    );
  }

  verifyFormElements(dataTable) {
    this.dataTableVerification(dataTable);
  }

  verifyPasswordConditions(passwordConditions) {
    this.verifyIconPasswordInformation();
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.lblPasswordConditions,
      passwordConditions
    );
  }

  verifyIconPasswordInformation() {
    this.elements.iconInformation().should("be.visible");
  }

  verifyCreateMyAccountCtaDisplayed(labelText) {
    this.elements.iconInformation().should("be.visible");
    cy.get(this.elements.ctaCreateMyAccount).should("include.text", labelText);
  }

  verifyAccountInformation(dataTable) {
    this.dataTableVerification(dataTable);
  }

  dataTableVerification(dataTable) {
    const rows = dataTable.rawTable.slice(1);

    rows.forEach((row) => {
      const text = row[0];
      cy.log(`--- Obtained text: ${text}`);
      cy.contains(text).should("be.visible");
    });
  }

  fillAccountData(dataTable) {
    dataTable.hashes().forEach((element) => {
      this.elements.firstName().type(element.first_Name);
      this.elements.lastName().type(element.last_Name);
      this.elements.email().type(element.email);
      this.elements.password().type(element.password);
      this.elements.confirmPassword().type(element.confirm_Password);
    });
  }

  fillAccountDataWithRandomEmail(dataTable) {
    dataTable.hashes().forEach((element) => {
      this.elements.firstName().type(element.first_Name);
      this.elements.lastName().type(element.last_Name);
      this.elements.email().type(this.randomEmailCreation(element.email));
      this.elements.password().type(element.password);
      this.elements.confirmPassword().type(element.confirm_Password);
    });
  }

  verifyExistingEmailMessageDisplayed() {
    this.elements.existingEmailMessage().should("be.visible");
  }

  verifyExistingEmailTextErrorMessage(message) {
    assert.verifyObtainedTextEqualWithTextFromBdd(
      this.elements.existingEmailTextMessage,
      ` ${message}`
    );
  }

  verifyRequiredFieldMessageDisplayed(requiredFieldMsg) {
    const elements = [
      this.elements.firstNameErrorMsg,
      this.elements.lastNameErrorMsg,
      this.elements.emailErrorMsg,
      this.elements.passwordErrorMsg,
      this.elements.confirmPasswordErrorMsg,
    ];

    elements.forEach((element) => {
      assert.verifyObtainedTextEqualWithTextFromBdd(element, requiredFieldMsg);
    });
  }

  verifyPasswordStrengthBar(color) {
    this.elements.passwordStrengthBar().should("be.visible");
    cy.log(`--- The expected password strength bar is ${color}`);
    this.getPseudoElementBackgroundColor(color, "background-color");
  }

  getPseudoElementBackgroundColor(color, property) {
    const finalStrengthPasswordColor = this.passwordStrengthColor(color);

    cy.get("#password-strength-meter").then(($element) => {
      const content = window
        .getComputedStyle($element[0], "::before")
        .getPropertyValue(property);
      cy.log(`--- Obtained RBG background color is: ${content}`);

      const hexColor = this.rgbToHex(content);

      cy.log(`--- Obtained hexadecimal background color is: ${hexColor}`);
      expect(hexColor).to.include(finalStrengthPasswordColor);
    });
  }

  passwordStrengthColor(color) {
    switch (color) {
      case "green":
        color = "#30990b";
        break;
      case "red":
        color = "#d40830";
        break;
      default:
        throw new Error("Invalid color entered. Please provide a valid color.");
    }
    return color;
  }

  /**
   * Converts an RGB color value to hexadecimal format.
   *
   * @param rgb The RGB color value to convert (e.g., "rgb(255, 0, 0)").
   * @return The color value in hexadecimal format (e.g., "#FF0000").
   */
  rgbToHex(rgb) {
    // Extract the red, green, and blue values from the RGB string.
    const [r, g, b] = rgb
      .replace(/rgba?|\(|\)/g, "")
      .split(",")
      .map((value) => parseInt(value.trim()));

    // Convert the red, green, and blue values to hexadecimal format.
    const hex = ((r << 16) | (g << 8) | b).toString(16);

    // Pad with leading zeros if necessary.
    const paddedHex = "#" + "0".repeat(6 - hex.length) + hex;

    return paddedHex;
  }

  /**
   * Generates a random email with the specified domain.
   *
   * @param domain The domain of the email.
   * @return The generated random email.
   */
  randomEmailCreation(domain) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months in JavaScript are indexing from 0
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const randomEmail = `automation_${day}${month}${year}_${hour}${minutes}${seconds}${domain}`;
    cy.log(`--- The random email is: ${randomEmail}`);
    return randomEmail;
  }
}

module.exports = new NewAccount();

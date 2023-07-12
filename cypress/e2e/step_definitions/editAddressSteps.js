import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const editAddress = require("../../pages/EditAddressPage");

Then("the user checks the field 'Phone Number'", () => {
  editAddress.verifyPhoneNumber();
});

Then(
  "verify that the phone number is automatically formatted as example below",
  (dataTable) => {
    editAddress.verifyCorrectPhoneNumberFormat(dataTable);
  }
);

Then("verify that the user cannot enter more than 10 digits", () => {
  editAddress.verifyPhoneNumberWith10Digits();
});

When(
  "the user enter 'postal_Code' and 'phone_Number' and validate",
  (dataTable) => {
    editAddress.fillPostalCodeAndPhoneNumber(dataTable);
  }
);

When("the user clicks on 'Save Address'", () => {
  editAddress.clickSaveAddressButton();
});

Then(
  "verify that result on the Edit Address page is displayed {string}",
  (message) => {
    editAddress.verifyPostalCodeErrorDisplayed(message);
  }
);

Then(
  "verify that phone number result on the Edit Address page is displayed {string}",
  (message) => {
    editAddress.verifyPhoneNumberErrorDisplayed(message);
  }
);

import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const accountCreation = require("../../pages/AccountCreationPage");
const loginPage = require("../../pages/LoginPage");

Then(
  "verify that the account creation page contains sentence {string}",
  (labelText) => {
    accountCreation.verifyRegisterWithEmailTitle(labelText);
  }
);

And("verify the page contains field", (dataTable) => {
  accountCreation.verifyFormElements(dataTable);
});

And(
  "verify the page contains icon Information with text {string}",
  (passwordConditions) => {
    accountCreation.verifyPasswordConditions(passwordConditions);
  }
);

And("verify the page contains cta {string}", (createMyAccount) => {
  accountCreation.verifyCreateMyAccountCtaDisplayed(createMyAccount);
});

And("verify the page contains text", (dataTable) => {
  accountCreation.verifyAccountInformation(dataTable);
});

And("the user selects the cta {string}", () => {
  accountCreation.clickCreateAccountButton();
});

And("the user fills in the fields to create a new account", (dataTable) => {
  accountCreation.fillAccountData(dataTable);
});

When(
  "the user fills in the fields to create a new account with random email",
  (dataTable) => {
    accountCreation.fillAccountDataWithRandomEmail(dataTable);
  }
);

And("the user enter in 'Create My Account'", () => {
  loginPage.clickCreateMyAccount();
});

Then(
  "verify that an error message in red appears at the top of the page after the categories",
  () => {
    accountCreation.verifyExistingEmailMessageDisplayed();
  }
);

And("verify that the error message text is {string}", (message) => {
  accountCreation.verifyExistingEmailTextErrorMessage(message);
});

Then(
  "verify that all the fields turn red with the message {string}",
  (requiredFieldMsg) => {
    accountCreation.verifyRequiredFieldMessageDisplayed(requiredFieldMsg);
  }
);

Then("verify that the validation bar is displayed in {string}", (color) => {
  accountCreation.verifyPasswordStrengthBar(color);
});

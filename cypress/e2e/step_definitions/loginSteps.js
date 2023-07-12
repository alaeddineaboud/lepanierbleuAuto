import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const menuLoginPage = require("../../pages/MenuLoginPage");

And(
  "l'utilisateur est connecté avec les identifiants du {string}",
  (userType) => {
    cy.fixture("login" + userType + ".json").then(({ username, password }) => {
      loginPage.clickConnexion();
      loginPage.typeUsername(username);
      loginPage.typePassword(password);
      loginPage.clickLogin();
    });
  }
);

And(
  "l'utilisateur saisit ses identifiants  {string} dans la pop-up de connexion et il valide",
  (userType) => {
    cy.fixture("login" + userType + ".json").then(({ username, password }) => {
      loginPage.typeUsernamePopup(username);
      loginPage.typePassword(password);
      loginPage.clickLogin();
    });
  }
);

Then("verify the title is {string}", (element) => {
  loginPage.verifyMyAccountTitle(element);
});

Then("verify user is redirected to the account creation page", () => {
  cy.url().should("include", "/customer/account/login/");
});

Given("the user is logged in", (dataTable) => {
  menuLoginPage.clickHeaderMenu();
  loginPage.fillLoginData(dataTable);
  loginPage.clickLogin();
});

And("the user selects Create my Account cta", () => {
  loginPage.clickCreateMyAccount();
})

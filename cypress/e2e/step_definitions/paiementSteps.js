import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("A user opens a perxtech website", () => {
  cy.visit("/");
});

When("A user {string} enters the username and pasword", (userType) => {
  cy.fixture("login"+userType+".json").then(({username, password})=>{
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
  })
});

When("A user {string} connet with API", (userType) => {
  cy.fixture("login"+userType+".json").then(({username, password})=>{
    loginPage.getToken(username, password);
  })
});


When("A user provides incorrect credentials", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.typeUsername(row.username);
    loginPage.typePassword(row.password);
  });
});

And("A user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});

And("A user clicks on the login button", () => {
  loginPage.clickLogin();
});

Then("the url will contains the dashboard subdirectory", () => {
  cy.url().should("contains", "/dashboard");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});

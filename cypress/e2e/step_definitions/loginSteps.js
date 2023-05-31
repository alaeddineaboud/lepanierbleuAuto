import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");




And("l'utilisateur est connecté avec les identifiants du {string}", (userType) => {
  cy.fixture("login"+userType+".json").then(({username, password})=>{
    loginPage.clickConnexion();
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
	  loginPage.clickLogin();
  })
});

And("l'utilisateur saisit ses identifiants  {string} dans la pop-up de connexion et il valide", (userType) => {
  cy.fixture("login"+userType+".json").then(({username, password})=>{
    loginPage.typeUsernamePopup(username);
    loginPage.typePassword(password);
	  loginPage.clickLogin();
  })
});





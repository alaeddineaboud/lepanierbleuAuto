import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../../pages/Marchant/LoginMPage");




And("le marchant est connecté avec les identifiants du {string}", (userType) => {
  cy.fixture("loginM"+userType+".json").then(({username, password})=>{
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
	  loginPage.clickLogin();
  })
});






import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const menuLoginPage = require("../../pages/MenuLoginPage");

When("dans le menu, l'utilisateur clique sur {string}", (message) => {
  menuLoginPage.verifyMessage(message);
  menuLoginPage.clickHeaderMenu();
});

And("l'utilisateur clique sur 'Mes questions aux marchands'", () => {
  menuLoginPage.clickMesQuestionsAuxMarchands();
});

When("the user chooses {string}", (option) => {
  menuLoginPage.clickMenuOption(option);
});

Then("verify that user is signed in to his account", () => {
  menuLoginPage.verifyLogInUserStatus();
});

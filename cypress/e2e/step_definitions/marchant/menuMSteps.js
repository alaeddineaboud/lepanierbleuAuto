import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const menuPage = require("../../../pages/Marchant/MenuMPage");




And("l'utilisateur rentre dans le menu {string}", (menu) => {
  menuPage.clickMenu(menu);
});






import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const menuPage = require("../../pages/MenuPage");


When("In the menu, a user go to the {string} and he open sub-menu", (menu, subMenu) => {
  menuPage.clickMenuMain();
  menuPage.clickMenu(menu);
  menuPage.clickSubMenu();
});




import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const articlePage = require("../../pages/ArticlePage");

And("A user selects an article", () => {
  articlePage.selectArticle();
});

Then("verify that the display of button to see the options", () => {
  articlePage.verifySeeOptionsBtnDisplayed();
});

Then(
  "verify that the number of available options is displayed in the product block",
  () => {
    articlePage.verifyNumberOptionsAvailableDisplayed();
  }
);

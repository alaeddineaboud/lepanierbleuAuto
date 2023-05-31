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

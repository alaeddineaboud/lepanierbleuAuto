import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage");
const searchResultPage = require("../../pages/SearchResultPage");


When("the user clicks on the 'Search' icon", () => {
  homePage.clickSearchBtn();
});

Then("verify the display of the 'Search Results' page", (dataTable) => {
  searchResultPage.verifyElementsDisplayFromSearchResultPage(dataTable);
});

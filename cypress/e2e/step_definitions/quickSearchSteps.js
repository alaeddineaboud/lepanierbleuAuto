import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage");
const quickSearchPage = require("../../pages/QuickSearchPage");

When(
  "the user enters a partial label {string} that may correspond to a product or a type of product in the Search field",
  (partialLabel) => {
    homePage.typeProduct(partialLabel);
  }
);

Then(
  "verify that an auto-completion is provided along with a list of suggestions",
  () => {
    quickSearchPage.verifyAutoCompletion();
  }
);

Then(
  "verify that the elements in the suggestion list are sorted by type",
  (dataTable) => {
    quickSearchPage.verifyElementsOnTheSuggestionList(dataTable);
  }
);

Then("the user checks the display of 'Quick search'", () => {
  quickSearchPage.verifyQuickSearch();
});

Then(
  "verify the 'Quick search' is displayed in the following order",
  (dataTable) => {
    quickSearchPage.verifyTheQuickSearchIsDisplayed(dataTable);
  }
);

Then("verify the number of results included in the 'Quick search'", () => {
  quickSearchPage.verifyNumberOfResultFromQuickSearch();
});

Then(
  "verify that a maximum of 5 results are displayed for the category 'Product'",
  () => {
    quickSearchPage.verifySearchProductsListResult();
  }
);

Then(
  "verify that a maximum of 3 results are displayed for other entities",
  () => {
    quickSearchPage.verifyEntitiesDisplayedOnQuickSearch();
  }
);

Then(
  "verify that if no results exist for an entity then the entity is not present",
  () => {
    quickSearchPage.verifyResultsExistForAnEntity();
  }
);

When(
  "the user adds a product that has the tag 'Free in-store pickup' to the cart",
  () => {
    homePage.typeProduct("Ours de peluche Bulles d'air");
  }
);

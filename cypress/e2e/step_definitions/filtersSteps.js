import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const filtersPage = require("../../pages/FiltersPage");

Then(
  "the user checks the functioning of the following sorting option",
  (dataTable) => {
    filtersPage.verifySortingOptions(dataTable);
  }
);

Then(
  "the user checks the buttons 'ascending' and 'descending' are displayed correctly",
  () => {
    filtersPage.verifyAscendingButtonIsDisplayed();
    filtersPage.verifyDescendingButtonIsDisplayed();
  }
);

When("the user sorting the list", (dataTable) => {
  filtersPage.sortingList(dataTable);
});

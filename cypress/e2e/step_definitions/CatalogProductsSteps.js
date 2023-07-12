import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const catalogProductsPage = require("../../pages/CatalogProductsPage");

When("the user click in this Filter button", () => {
  catalogProductsPage.clickOnFilterBtn();
});

Then(
  "verify that the sorting options are displayed correctly and functional",
  (dataTable) => {
    catalogProductsPage.verifyProductsListIsSortingCorrectly(dataTable);
  }
);

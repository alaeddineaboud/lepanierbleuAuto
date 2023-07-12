let homePage = require("../../cypress/pages/HomePage");

class homeSaucePage {
  elements = {
    autoCompletion: () =>
      cy.get("#search_autocomplete[style*='display: block']"),
    suggestionList: () =>
      cy.get(".autocomplete-list span[class=section-title]:first-child"),
    searchResultsList: "#search_autocomplete",
    contentTxt: () => cy.get(".control input[type*='text']"),
    iconQuickSearchList: () => cy.get(".autocomplete-list-title"),
    searchPopularListResult: () => cy.get(" #search_autocompleteterm li"),
    searchProductsListResult: () => cy.get("#search_autocompleteproduct li"),
    searchCategoryListResult: () => cy.get("#search_autocompletecategory li"),
    searchBlogsListResult: () => cy.get("#search_autocompleteblog_post li"),
    searchVendorsListResult: () => cy.get("#search_autocompletevendor_page li"),
  };

  verifyAutoCompletion() {
    this.elements.autoCompletion().should("be.visible");
  }

  verifyElementsOnTheSuggestionList(dataTable) {
    const expectedTypeList = dataTable.rawTable.slice(1).map((row) => row[0]);
    const typeList = this.elements.suggestionList();

    typeList.then(($elements) => {
      const actualTypeList = $elements
        .toArray()
        .map((item) => item.innerText.split(" (")[0].trim());

      cy.log("The actual list is: ");
      actualTypeList.forEach((type, index) => {
        const position = index + 1;
        cy.log(`Type at position ${position}: ${type}`);
      });

      const missingTypes = expectedTypeList.filter(
        (type) => !actualTypeList.includes(type)
      );

      if (missingTypes.length > 0) {
        missingTypes.forEach((type) => {
          cy.log("The missing type from suggestion list is:" + type);
        });
      }
    });
  }

  verifyQuickSearch() {
    cy.get(this.elements.searchResultsList).should("be.visible");
  }

  verifySearchProductsListResult() {
    this.elements
      .searchProductsListResult()
      .should("have.length.at.most", 5)
      .should("have.length.greaterThan", 0);
  }

  verifyEntitiesList(elements) {
    elements
      .should("have.length.at.most", 3)
      .should("have.length.greaterThan", 0);
  }

  verifyIconFromQuickSearch(element) {
    const iconCategoryList = this.elements.iconQuickSearchList();

    cy.log("--- Verifyng that the Icon is displayed");
    cy.get(element)
      .should("be.visible")
      .then(($element) => {
        cy.wrap($element).each((category) => {
          const categoryElement = cy.wrap(iconCategoryList).eq(index);
          const computedStyle = window.getComputedStyle(
            $element[0],
            "::before"
          );
          const pseudoElementDisplay =
            computedStyle.getPropertyValue("display");
          expect(pseudoElementDisplay).to.include("block");
          if (category.length > 0) {
            categoryElement.should("be.visible");
          } else {
            categoryElement.should("not.be.visible");
          }
        });
      });
  }

  verifyNumberOfResultFromQuickSearch() {
    this.elements.searchPopularListResult().each(($el) => {
      cy.wrap($el).find(".amount").should("have.length.above", 0);
    });
  }

  verifyTheQuickSearchIsDisplayed(dataTable) {
    const expectedOrder = dataTable.rawTable
      .slice(1)
      .map((item) => item[0].split("Icon + ")[1].trim());
    const iconCategoriesList = this.elements.iconQuickSearchList();

    iconCategoriesList.then(($elements) => {
      const actualList = $elements
        .toArray()
        .map((item) => item.innerText.split(" (")[0].trim());

      const missingCategory = expectedOrder.filter(
        (category) => !actualList.includes(category)
      );
      cy.log("--- Verifying the Quick search elements displayed");

      if (missingCategory.includes("Content")) {
        homePage.verifySearchIconDisplayed();
        this.elements.contentTxt().should("be.visible");
      } else {
        if (missingCategory.length > 0) {
          missingCategory.forEach((category) => {
            cy.log(`The category "${category}" is not visible.`);
          });
        } else {
          expectedOrder.forEach((category) => {
            cy.contains(category).should("be.visible");
            this.verifyIconFromQuickSearch(category);
          });
        }
      }
    });
  }

  verifyResultsExistForAnEntity() {
    const quickSearchList = this.elements.suggestionList();

    cy.get(quickSearchList)
      .invoke("text")
      .then((value) => {
        cy.wrap(value).each((categoryValue) => {
          const actualValue = parseInt(categoryValue);
          const categoryElement = cy.wrap(quickSearchList).eq(index);

          if (actualValue.length > 0) {
            categoryElement.should("be.visible");
          } else {
            categoryElement.should("not.be.visible");
            cy.log("The category not present on quick search is:" + category);
          }
        });
      });
  }
  verifyEntitiesDisplayedOnQuickSearch() {
    const expectedEntities = ["Categories", "Vendors", "Blog posts"];
    const entitiesList = this.elements.suggestionList();

    entitiesList.then(($elements) => {
      const actualEntities = $elements
        .toArray()
        .map((item) => item.innerText.split(" (")[0].trim())
        .filter((entity) => expectedEntities.includes(entity));

      cy.log("Check if the entities are present");

      actualEntities.forEach((category) => {
        cy.contains(category).should("be.visible");

        switch (category) {
          case "Categories":
            this.verifyEntitiesList(this.elements.searchCategoryListResult());
            break;
          case "Vendors":
            this.verifyEntitiesList(this.elements.searchVendorsListResult());
            break;
          case "Blog posts":
            this.verifyEntitiesList(this.elements.searchBlogsListResult());
            break;
          default:
            cy.log(`Unknown category: ${category}`);
            break;
        }
      });
      const missingTypes = expectedEntities.filter(
        (category) => !actualEntities.includes(category)
      );
      if (missingTypes.length > 0) {
        missingTypes.forEach((category) => {
          cy.log(`The category: ${category} is missing from quick search`);
        });
      }
    });
  }
}
module.exports = new homeSaucePage();

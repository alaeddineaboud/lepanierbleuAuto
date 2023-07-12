class homeSaucePage {
  elements = {
    applyFiltersBtn: () => cy.get(".sticky.block-actions.filter-actions"),
    sortByPriceOption: () => cy.get('#sorter-choice label[data-value="price"]'),
    sortByProductNameOption: () =>
      cy.get('#sorter-choice label[data-value="name"]'),
    ascDescBtns: () =>
      cy.get(".sorter-choice-block.filter-item-wrapper.direction-filter"),
    ascendingBtn: ".sorter-choice.asc.action",
    descendingBtn: ".sorter-choice.desc.action",
    selectSortByOptions: () => cy.get("#filter-sort-by"),
    optionSelector: (option) => `label[data-value="${option}"]`,
    directionBtn: (typeSorting) => `label[data-value="${typeSorting}"]`,
  };

  verifySortingOptions(dataTable) {
    const expectedOptions = dataTable.rawTable.slice(1).map((row) => row[0]);

    cy.wrap(expectedOptions).then((options) => {
      options.forEach((option) => {
        if (option == "Price") {
          this.elements.sortByPriceOption().should("be.visible");
        } else if (option == "Product Name") {
          this.elements.sortByProductNameOption().should("be.visible");
        }
      });
    });
  }

  verifyAscendingButtonIsDisplayed() {
    this.elements
      .ascDescBtns()
      .find(this.elements.ascendingBtn)
      .should("be.visible");
  }

  verifyDescendingButtonIsDisplayed() {
    this.elements
      .ascDescBtns()
      .find(this.elements.descendingBtn)
      .should("be.visible");
  }

  clickOnApplyFiltersButton() {
    //The click on this Apply Filters Button is problematic, We added the cy.wait() in order to solve it.
    cy.wait(6000);
    this.elements.applyFiltersBtn().should("be.visible").click();
  }

  selectingSortOption(option, typeSorting) {
    const sortingOptionMap = {
      Price: "price",
      "Product Name": "name",
    };
    const sortingOrderMap = {
      Ascending: "asc",
      Descending: "desc",
    };
    const sortingOption = sortingOptionMap[option];
    const sortingOrder = sortingOrderMap[typeSorting];

    this.elements
      .selectSortByOptions()
      .find(this.elements.optionSelector(sortingOption))
      .click();

    this.elements
      .ascDescBtns()
      .find(this.elements.directionBtn(sortingOrder))
      .click();
  }

  sortingList(dataTable) {
    dataTable.hashes().forEach((row) => {
      const { option, typeSorting } = row;
      this.selectingSortOption(option, typeSorting);
     
    });
    this.clickOnApplyFiltersButton();
  }
}
module.exports = new homeSaucePage();

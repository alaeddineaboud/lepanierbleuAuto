class homeSaucePage {
  elements = {
    headerContent: () => cy.get("div.header.content"),
    searchResultTxt: () => cy.contains("span", "Search results for"),
    productsTab: () => cy.get("#search-result-button"),
    vendorsTab: () => cy.get("#suggest-vendor-page-button"),
    blogTab: () => cy.get("#suggest-blog-post-button"),
    filterBtn: () => cy.contains("button", "Sort and Filter"),
    itemsListResult: () => cy.get("ol.products.list.items.product-items"),
    vendorsItems: "#suggest-vendor-page-button span.counter",
    blogItems: "#suggest-blog-post-button span.counter",
    productsItems: "#search-result-button span.counter",
  };

  verifyResultsList() {
    this.elements.itemsListResult().should("be.visible");
  }

  verifyFilters() {
    this.elements.filterBtn().should("be.visible");
  }

  verifyHeader() {
    this.elements.headerContent().should("be.visible");
  }

  verifySearchResultText() {
    this.elements.searchResultTxt().should("be.visible");
  }

  verifyTabAndItemsNumberFromProducts() {
    this.elements.productsTab().should("be.visible");
    cy.get(this.elements.productsItems).should("be.visible");
    this.verifyTotalItemsOnTheTab(this.elements.productsItems);
  }

  verifyTabAndItemsNumberFromVendors() {
    this.elements.vendorsTab().should("be.visible");
    cy.get(this.elements.vendorsItems).should("be.visible");
    this.verifyTotalItemsOnTheTab(this.elements.vendorsItems);
  }

  verifyTabAndItemsNumberFromBlog() {
    this.elements.blogTab().should("be.visible");
    cy.get(this.elements.blogItems).should("be.visible");
    this.verifyTotalItemsOnTheTab(this.elements.blogItems);
  }

  verifyTotalItemsOnTheTab(element) {
    cy.log("--- Verify the items value");
    cy.get(element)
      .invoke("text")
      .then((value) => {
        const actualValue = parseInt(value);
        expect(actualValue).to.be.at.least(0);
        if (!isNaN(actualValue)) {
          cy.log(`The items value is: ${actualValue}`);
        } else {
          cy.log(`The items value is not valid number: ${actualValue}`);
        }
      });
  }

  verifyElementsDisplayFromSearchResultPage(dataTable) {
    const expectedTabs = dataTable.rawTable.slice(1).map((row) => row[0]);

    cy.url().should("include", "catalogsearch/result/");

    cy.wrap(expectedTabs).each((elementDisplay) => {
      switch (elementDisplay) {
        case "Header":
          this.verifyHeader();
          break;

        case "Search results":
          this.verifySearchResultText();
          break;

        case "Tab Products + number of items":
          this.verifyTabAndItemsNumberFromProducts();
          break;

        case "Tab Vendors + number of items":
          this.verifyTabAndItemsNumberFromVendors();
          break;

        case "Tab Blog + number of items":
          this.verifyTabAndItemsNumberFromBlog();
          break;

        case "Filters":
          this.verifyFilters();
          break;

        case "List":
          this.verifyResultsList();
          break;

        default:
          cy.log(`---Unexpected Element Display ${elementDisplay}`);
          break;
      }
    });
  }
}
module.exports = new homeSaucePage();

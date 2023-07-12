let searchResultPage = require("../../cypress/pages/SearchResultPage");

class homeSaucePage {
  elements = {
    productsList: () => cy.get(".products.list.items"),
    productsPriceList: () => cy.get(".price-box.price-final_price .price"),
    productsNameList: () => cy.get(".product.name"),
  };

  clickOnFilterBtn() {
    searchResultPage.elements.filterBtn().should("be.visible").click();
  }

  verifyProductsListIsSortingCorrectly(dataTable) {
    const { option, typeSorting } = dataTable.hashes()[0];
    let unsortedPrices = [];
    let unsortedProductsName = [];
    let expectedSortedPrices = [];
    let expectedSortedProductsName = [];

    if (option == "Price") {
      //Collecting the list of prices unsorted

      let unsortedPricesList = this.elements.productsPriceList();
      unsortedPricesList.then(($elements) => {
        $elements.each((index, price) => {
          const priceText = Cypress.$(price).text();
          const priceValue = parseFloat(priceText.replace(/[^0-9.]/g, ""));
          unsortedPrices.push(priceValue);
        });

        if (typeSorting == "Ascending") {
          expectedSortedPrices = unsortedPrices.slice().sort((a, b) => a - b);
        } else if (typeSorting == "Descending") {
          expectedSortedPrices = unsortedPrices.slice().sort((a, b) => b - a);
        }
        for (let i = 0; i < unsortedPrices.length; i++) {
          expect(unsortedPrices[i]).to.deep.equal(
            expectedSortedPrices[i],
            `Position-> ${i}`
          );
        }
      });
    } else if (option == "Product Name") {
      //Collecting the list of product names unsorted

      let unsortedProductsNameList = this.elements.productsNameList();
      unsortedProductsNameList.then(($elements) => {
        $elements.each((index, product) => {
          const productNameValue = Cypress.$(product).text().trim();
          unsortedProductsName.push(productNameValue);
        });

        if (typeSorting == "Ascending") {
          expectedSortedProductsName = unsortedProductsName
            .slice()
            .sort((a, b) => a.localeCompare(b));
        } else if (typeSorting == "Descending") {
          expectedSortedProductsName = unsortedProductsName
            .slice()
            .sort((a, b) => a.localeCompare(b))
            .reverse();
        }
        for (let i = 0; i < unsortedProductsName.length; i++) {
          expect(unsortedProductsName[i]).to.deep.equal(
            expectedSortedProductsName[i],
            `Position-> ${i}`
          );
        }
      });
    }
  }
}

module.exports = new homeSaucePage();

class homeSaucePage {
  elements = {
    shoppingCartBtn: () => cy.get(".minicart-wrapper > .action.showcart"),
    basketCount: () => cy.get(".counter.qty.empty"),
    passerCommandeButton: () => cy.get(".item > .action"),
    qtButton: () => cy.get(".item > .action"),
    estimerFraisLivraisonsTaxesButton: () => cy.get("#block-shipping-heading"),
    typeCodePostalInput: () => cy.get('[name="postcode"]'),
    passerALaCaisseButton: () =>
      cy.get('[data-role="proceed-to-checkout"]').eq(0),
    livraisonStandardButton: () =>
      cy.get(".minicart-wrapper > .action.showcart"),
    qtInput: () => cy.get('[data-role="cart-item-qty"]'),
    majQuantiteButton: () => cy.get(".update-cart-item"),
    livraisonOpt: () => cy.get('[type="radio"]'),
    vendorsInfo: () => cy.get(".action.microsite-link"),
    itemsList: () => cy.get(".cart.items.data.table"),
    productRecommendation: () => cy.get(".vendor-url"),
    estimateShippingTax: () => cy.get("#block-shipping-heading"),
    fullShippingAddress: ".location-address",
    btnProceedToCheckout: () => cy.get(".item > button"),
  };

  goToShoppingCart() {
    this.elements.shoppingCartBtn().click({ force: true });
  }

  clickPasserCommande() {
    this.elements.passerCommandeButton().click({ force: true });
  }

  verifierQuantite() {
    this.elements.qtInput().should("be.visible");
  }

  typeQuantite(qt) {
    this.elements.qtInput().eq(0).clear().type(qt);
  }

  majQuantite() {
    this.elements.majQuantiteButton().eq(0).click({ force: true });
  }

  goToEstimerFraisLivraisonsTaxes() {
    cy.wait(5000);
    this.elements
      .estimerFraisLivraisonsTaxesButton()
      .should("be.visible")
      .click({ force: true });
  }

  typeCodePostal(codePostal) {
    cy.wait(5000);
    this.elements.typeCodePostalInput().clear().type(codePostal);
  }

  enterLivraisonStandard() {
    this.elements.livraisonOpt().eq(1).click({ force: true });
  }

  enterPasserALaCaisse() {
    this.elements.passerALaCaisseButton().click({ force: true });
  }

  verifyVendorsInfo(dataTable) {
    const vendorInfo = dataTable.rawTable.slice(1);
    const element = this.elements.vendorsInfo();

    vendorInfo.forEach(() => {
      element.should("be.visible");
    });
  }

  verifyAddToCartButtonIsNotDisplayed() {
    const cartProductsList = this.elements.itemsList();
    cartProductsList.each((product) => {
      cy.wrap(product).contains("Add to Cart").should("not.exist");
    });
  }

  verifyProductRecommendationIsDisplayed() {
    const cartProductsList = this.elements.itemsList();
    cartProductsList.each(() => {
      this.elements.productRecommendation().should("be.visible");
    });
  }

  clickEstimateShippingTax() {
    this.elements
      .estimateShippingTax()
      .should(($element) => {
        expect($element).to.be.visible;
      })
      .click();
  }

  verifyFullShippingAddressDisplayed() {
    cy.get(this.elements.fullShippingAddress)
      .invoke("text")
      .then((text) => {
        const cleanedText = text.replace(/\n|\s/g, "");
        cy.log(`--- Obtained text: ${cleanedText}`);
        expect(cleanedText).to.include("(");
        expect(cleanedText).to.include(")");

        const characterCount = cleanedText.length;
        cy.log(`--- Character count: ${characterCount}`);

        expect(characterCount).to.be.greaterThan(2);
      });
  }

  verifyProceedCheckoutButtonEnable() {
    this.elements.btnProceedToCheckout().should("be.visible").and("be.enabled");
  }
}

module.exports = new homeSaucePage();

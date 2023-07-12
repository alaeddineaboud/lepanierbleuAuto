// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const homePage = require("../../cypress/pages/HomePage");

/**
 *Custom command to open the consumer portal.
 */
Cypress.Commands.add("openConsumerPortal", () => {
  cy.visit("/");
  cy.log(`--- Opening web Page ${Cypress.config("baseUrl")}`);
  cy.url().should("include", Cypress.config("baseUrl"));
});

/**
 *Custom command to change the language.
 *@param {string} language - The language to change to.
 */
Cypress.Commands.add("changeLanguage", (language) => {
  cy.log(`--- Changing Language to: ${language}`);
  if (language == "English") {
    homePage.clickLanguage("en");
  } else {
    homePage.clickLanguage("fr");
  }
});

/**
 *Custom command to check elements from a datatable.
 *@param {Cypress.CucumberDataTable} dataTable - The datatable containing the field values.
 *@param {Object} fieldMapping - Object mapping field names to element identifiers.
 *@throws {Error} If an unexpected field is encountered.
 */
Cypress.Commands.add(
  "verifyElementFromDataTable",
  (dataTable, fieldMapping) => {
    const rows = dataTable.rawTable.slice(1); // Ignore the first row that contains the headers.

    rows.forEach((row) => {
      const fieldName = row[0]; // Get the name of the field from the first column.
      const elementIdentifier = fieldMapping[fieldName];

      if (elementIdentifier) {
        cy.get(elementIdentifier).should("be.visible");
        cy.get(elementIdentifier).should("contain", fieldName);
        cy.log(`--- Field ${fieldName} is displayed on the page.`);
      } else {
        console.error(`--- ERROR: Unexpected field: ${fieldName}`);
      }
    });
  }
);

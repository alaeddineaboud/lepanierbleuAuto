import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const myAddressBook = require("../../pages/MyAddressBookPage");

When("the user clicks {string}", (element) => {
  myAddressBook.clickLink(element);
});

Then(
  "verify that result on the My Address Book page is displayed {string}",
  (message) => {
    myAddressBook.successSaveAddressMessage(message);
  }
);

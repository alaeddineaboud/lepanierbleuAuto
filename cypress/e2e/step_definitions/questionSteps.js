import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const questionPage = require("../../pages/QuestionPage");




And ("l'utilisateur clique sur 'Poser une nouvelle question'", () => {
  questionPage.clickPoserUneNouvellQuestion();
  questionPage.selectPoserQuestionMarchand();
});


And ("l'utilisateur écri ma question dans {string} pour le marchand {string}", (question, marchand) => {
  Cypress.env('question',question);
  questionPage.selectMarchand(marchand);
  questionPage.setQuestion(question);
});

And ("l'utilisateur clique sur 'Soumettre'", () => {
  questionPage.clickSoumettre();
  
});

Then ("verifier que la nouvelle question est ajoutée dans la liste", () => {
  questionPage.verifyQuestion();
});

 
And  ("l'utilisateur clique sur 'Voir les détails de la question' pour visualiser les détails", () => {
  questionPage.clickVoirDetailsQuestion();
  questionPage.verifyDetailQuestion();
  question = Cypress.env('question');
  questionPage.verifyPresenceQuestion(question);
  
});



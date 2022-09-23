import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('the header displays correctly', () => {
  cy.visit('/') 
  cy.get('body').contains('Marvel Application')
})


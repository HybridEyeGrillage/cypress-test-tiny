/// <reference types="cypress" />

import TestSelectors from '../selectors/test'
const testSelectors = new TestSelectors();

describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.log("Expectation: Assertion checks for the data attribute as given in each case")
    cy.log("Actual: Assertion changes the expected data attribute to a <element.class> but doesn't fail.")
    
    cy.log("Checking that hardcoded data attribute exist")
    cy.get("[data-toggle=collapse]").should("exist")
    
    cy.log("Checking that referenced data attribute exist")
    cy.get(testSelectors.toggle).should("exist")
    
    
    cy.log("Expectation: Assertion checks for the data attribute as given in each case")
    cy.log("Actual: Assertion changes the expected data attribute to a <element.class> and will fail.")
    
    cy.log("Checking that hardcoded data attribute is visible")
    cy.get("[data-toggle=collapse]").should("be.visible")
    
    cy.log("Checking that referenced data attribute is visible")
    cy.get(testSelectors.toggle).should("be.visible")
  })
})

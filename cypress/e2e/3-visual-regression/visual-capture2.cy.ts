/// <reference types="cypress" />

describe.only('Visual Capture Test', () => {
    it('should compare screenshot of the entire page', () => {
      cy.visit('https://github.com/kishors33?tab=repositories');
      cy.compareSnapshot('home-page');
    })
  })
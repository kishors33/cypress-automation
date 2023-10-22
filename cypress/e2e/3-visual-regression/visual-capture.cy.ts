/// <reference types="cypress" />

describe.only('Visual Capture Test', () => {
    it('should compare screenshot of the entire page', () => {
      cy.visit('https://github.com/kishors33');
      // cy.compareSnapshot('home-page');
      cy.compareSnapshot('home-page', 0.4);
    })
  })
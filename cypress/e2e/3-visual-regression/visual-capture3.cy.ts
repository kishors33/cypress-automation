/// <reference types="cypress" />

/* V Imp - If you compare an image having a timestamp then the test fails after the first PASSing of the test due to time change only */
 
/* When comparing images, if there is a timestamp involved anywhere in the image then,
   a) If you dont start te Cypress run again & only click refresh in Cypress Test Runner, then exisitng file in the comparision and diff folders
   will be overwritten but the timestamp of the files will not be changed
   b) If you start the Cypress run again by running npx cypress open again, then the comparison as well as diff folders are emptied first 
   (the baseline folder is not emptied) and then new files are written to both comparision and diff folder when there is a failure */

/* If you compare an image which does not change with time then the test passes each time - refer visual-capture3.cy.ts  */

   describe.only('Visual Capture Test', () => {
    it('should compare screenshot of the entire page', () => {
      cy.visit('https://github.com/kishors33?tab=projects');
      cy.compareSnapshot('home-page');
    })
  })
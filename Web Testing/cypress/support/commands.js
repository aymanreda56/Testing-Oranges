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


cypress.commands.add('Searchfor', { prevSubject: 'optional'}, (keyword)=>{
    cy.get('[aria-label="Search"]').click();
    cy.get('[aria-label="Search"]').type(keyword);
})

cypress.commands.add('login', { prevSubject: 'optional'}, (user)=>{
    cy
    .get('[aria-label="email"]')

    cy
    .get('[aria-label="password"]')
    .type(user.password);
    cy.wait(2000);
    cy.get('[aria-label="Log in"]').click();
})

cypress.commands.add('logout', { prevSubject: 'optional'}, ()=>{
    cy.get('[aria-label="Account"]').click();
    cy.get('[aria-label="Log out"]').click();
    cy.get('[aria-label="OK"]').click();
    cy.url().should('be.equal', 'https://www.tumblr.com/');
})

export class HomePage{
    navigate(){
        cy
          .visit('https://www.tumblr.com/login');
        cy
          .get('[aria-label="email"]')
          .type('ahmedspiderman7@gmail.com');
        /*cy
          .intercept({
            method:'GET',
            url:'/dashboard'
          }).as('logIn');*/
        cy
          .get('[aria-label="password"]')
          .type('Tumblr4me_12');
        cy.wait(2000);
        cy.get('[aria-label="Log in"]').click();
       /* cy
          .visit('https://www.tumblr.com/dashboard');*/
    }

    tumblriconValidation(){
      /*cy
        .wait('@logIn')
        .its('response.statusCode')
        .should('eq',200);*/
      
      cy
        .get('a[aria-label="home"]')
        .click();
      cy
        .url()
        .should('include','/dashboard');
    }
}
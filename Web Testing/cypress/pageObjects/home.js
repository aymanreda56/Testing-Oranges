export class HomePage{
    navigate(){
      cy
        .visit('https://www.tumblr.com/dashboard');
      
      cy.fixture('PersonalData').then((user)=>{
        let token = user.token;
        cy.setCookie('sid',`${token}`);
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
        cy.wait(2000);
       /* cy
          .visit('https://www.tumblr.com/dashboard');*/
          
      })  
    }

    tumblriconValidation(){
      cy
        .get('.QOMh2 > a > div > svg')
        .click();
      cy
        .url()
        .should('include','/dashboard');
    }
}
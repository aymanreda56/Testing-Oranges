export class HomePage{
    navigate(){
      cy
        .visit('http://tumblr4u.eastus.cloudapp.azure.com/');
      
        cy.contains('Log in').click();
      
        cy.fixture('user').then((user)=>{
        cy
          .get('#exampleInputEmail1')
          .type(user.users[3].email);
        /*cy
          .intercept({
            method:'GET',
            url:'/dashboard'
          }).as('logIn');*/
          
        cy
          .get('#exampleInputPassword1')
          .type(user.users[3].password);
        cy.wait(2000);
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        
          let token = user.users[3].token;
          window.localStorage.setItem('token',`${token}`);
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
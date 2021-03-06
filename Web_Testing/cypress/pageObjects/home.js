export class HomePage{
    navigate(){
      cy
        .visit('http://tumblr4u.eastus.cloudapp.azure.com/');
      
        cy.contains('Log in').click();
      
        cy.fixture('user').then((user)=>{
        cy
          .get('[placeholder="Email"]')
          .type(user.users[4].email);
          
        cy
          .get('[placeholder="Password"]')
          .type(user.users[4].password);
        cy.wait(2000);
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        
          let token = user.users[4].token;
          window.localStorage.setItem('token',`${token}`);

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
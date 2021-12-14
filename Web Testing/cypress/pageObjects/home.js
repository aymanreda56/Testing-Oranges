export class HomePage{
    navigate(){
      cy
        .visit('https://www.tumblr.com/dashboard');
      
      cy.fixture('PersonalData').then((user)=>{
        let token = user.token;
        cy
          .setCookie('sid',`${token}`);
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
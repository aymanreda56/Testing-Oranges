import { HomePage } from "../pageObjects/home"

describe('Home page tests',()=>{
    const homeOBJ = new HomePage();

    beforeEach(()=>{

       homeOBJ.navigate();
    })

    it('TEST', () => {


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
        cy
        .get('a[aria-label="home"]')
        .click();
      cy
        .url()
        .should('include','/dashboard');
    })
})
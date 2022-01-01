
import { HomePage } from "../pageObjects/home.js"
describe('block a user', ()=>{
    const homeOBJ = new HomePage();
    
    beforeEach('logout', ()=>{
        homeOBJ.navigate();
    });


    it('logout', ()=>{
        cy.get(':nth-child(6) > #dropDown > #icon').click();
        cy.get('#content > :nth-child(1) > :nth-child(2)').contains('Logout').click();
        cy.get('.popup-inner').contains("Ok").click();
        cy.get('.popup-inner').contains("Ok").click();
        cy.wait(2000);
        cy.url().should('equal','http://tumblr4u.eastus.cloudapp.azure.com/');        
        
    });
    it('cancel logout', ()=>{
        cy.get(':nth-child(6) > #dropDown > #icon').click();
        cy.get('#content > :nth-child(1) > :nth-child(2)').contains('Logout').click();
        cy.get('#buttons > :nth-child(1)').contains('Cancel').click();
        cy.url().should('equal','http://tumblr4u.eastus.cloudapp.azure.com/home');        
        
    });

})


//fsfhfsmxwqhxhqlowo@nthrw.com
//Tumblr4me


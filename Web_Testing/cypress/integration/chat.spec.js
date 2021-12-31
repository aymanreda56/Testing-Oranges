


import { HomePage } from "../pageObjects/home.js"



describe('chating from one account', ()=>{
    const homeOBJ = new HomePage();
    
    beforeEach('login first', ()=>{
        homeOBJ.navigate();
    });


    it('click on the chat tab', ()=>{

        cy.get('[aria-label="emoji laughing"]').click();
        cy.contains('New Message').click();
        cy.get('#divider').get('#chatItem').click();
        cy.get('[aria-label="Send"]').click();









        cy.get('[aria-label="emoji laughing"] #icon').click();
        cy.get('#chatItem').click();                                              //first chat account to appear
        cy.get



    })
})
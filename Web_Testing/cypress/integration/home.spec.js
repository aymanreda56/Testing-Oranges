/*import { HomePage } from "../pageObjects/home"

describe('Home page tests',()=>{
    const homeOBJ = new HomePage();

    beforeEach(()=>{

       homeOBJ.navigate();
    })

    it('post text', () => {
        cy.get('.createPost > ul > :nth-child(1)').click();
        cy.get('.ProseMirror > .placeholderTitleClass').click(); //title
        cy.get('.ProseMirror > .placeholderTitleClass').type('hello');
        cy.get('.ProseMirror > .textClass').click();   //text
        cy.get('.ProseMirror > .textClass').type('how are you?');
        cy.get('#theTags').click();  //tags
        cy.get('#theTags').type('greetings');
        cy.get('.nonDisabledBtn').click();  //post button
        cy.get('.nonDisabledBtn').type('greetings');
        cy.reload();

    })
})*/
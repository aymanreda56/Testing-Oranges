/// <reference types ="cypress" />

//const { contains } = require("cypress/types/jquery");

describe('Welcome Page text assertions', () =>{

    beforeEach('visit tumblr', () => {

        cy.visit('http://tumblr4u.eastus.cloudapp.azure.com/');

    })


    
    it('1st panel texts test', () => {




        cy.get('.hello .Heading .bv-example-row.container .row')
        .contains('Make stuff, look at stuff,')
        .should('exist');

        cy.get('.Heading .bv-example-row.container .row')
        .contains('talk about stuff, find your people.')
        .should('exist');

        cy.get('.Heading .bv-example-row.container .row .privacy')
        .contains('By continuing with the options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy')
        .should('exist');

        
        
        cy.get('.Heading .bv-example-row.container .row')
        .contains('Continue with Google')
        .should('exist');

        
        
        cy.get('.Heading .bv-example-row.container .row')
        .contains('Log in')
        .should('exist');

        cy.get('.Heading .bv-example-row.container .row')
        .contains('Sign up')
        .should('exist');
        
        

        cy
            .get('.Heading .bv-example-row.container .row .privacy')
            .contains('Terms')
            .click();

        cy.visit('http://tumblr4u.eastus.cloudapp.azure.com/');

        cy
            .get('.Heading .bv-example-row.container .row .privacy')
            .contains('Privacy')
            .click();

        
        cy.visit('http://tumblr4u.eastus.cloudapp.azure.com/');


       

            //TODO  buttons should be tested by click()

    })

    it('1st panel texts test (still not finished)', () => {

        cy.get('.Heading .bv-example-row.container .row')
        .contains("Here's what's trending")
        .should('exist');


        cy.get('.Heading .bv-example-row.container .row')
        .contains('Continue with Apple')
        .should('exist');

        cy
        .get('.bv-example-row.container')
        .contains('Jobs')
        .should('exist');
        cy
        .get('.bv-example-row.container')
        .contains('Support')
        .should('exist');

    })
    

    it('2nd panel text test', () => {
        cy

            .get('.hello .hello .container-fluid')
            .contains('What is Tumblr?')
            .should('exist');


            cy
            .get('.hello .hello .container-fluid')
            .contains('What is Tumblr?')
            .click();



        cy
            .get('.hello .hello .container-fluid')
            .contains('Tumblr is so easy to use that it’s hard to explain.')
            .should('exist');

        /*cy
            .get('section[id="Easy to use"]')
            .contains("We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Tumblr is 536 million different blogs, filled with literally whatever.")
            .should('exist');
*/
           //NOTE: not so important
        
        
    })
    
    it('3rd panel text tests', () => {

        cy.get('.third .container-fluid')
        .contains('Tumblr is blogs')
        .should('exist');



    })


    it('4th panel text tests', ()=>{
        cy.get('.fourth .container-fluid')
        .contains('You already know how this works.')
        .should('exist');


    })

    it('5th panel text tests', ()=>{
        cy.get('.fifth .container-fluid')
        .contains('Seriously, put anything you want here.')
        .should('exist');

        
    })

    it('last panel text tests', ()=>{
        cy.get('.last .bv-example-row.container')
        .contains('Okay, it’s not actually hard to explain.')
        .should('exist');

        cy.get('.last .bv-example-row.container .row')
        .contains('Sign up')
        .should('exist');

        cy.get('.last .bv-example-row.container .row')
        .contains('Log in')
        .should('exist');

        cy.get('.last .bv-example-row.container .row')
        .contains('Log in')
        .should('exist');

        cy.get('.last .bv-example-row.container .row')
        .contains('By continuing with the options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy')
        .should('exist');

        cy.get('.last .bv-example-row.container .row')
        .contains('Continue with Google')
        .should('exist');
    })




    it.only('1st panel links tests', () => {

        cy.get('.hello .Heading')
        .contains('Tumblr4U')
        .click();

        cy.url().should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/');

        

        


        //cy.get('section[id ="Get started"]').contains('Sign up').click();
        //cy.url().should('include', '/register');
        //cy.go('back');




       



        cy.get('.Heading .bv-example-row.container .row')
        .contains('Continue with Google')
        .click();

        cy.go('back');

        

      

        cy.get('.hello #TheHeader')
        .contains('Log in')
        .click();

        cy.url().should('include', '/signIn');
        cy.go('back');

        cy.get('.hello').get('#TheHeader')
        .contains('Sign up')
        .click();

        cy.url().should('include', '/signUp');
        cy.go('back');

        

    })

    it('1st panel links tests (not finished)', () => {

        cy.get('.hello #TheHeader')
        .contains('T4U')
        .click();

        cy.url().should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/');


        cy.get('.Heading .bv-example-row container .row .privacy')
        .contains('Terms of Service')
        .click();

        cy.url().should('include', '/policy');
        cy.go('back');

        cy.get('.Heading .bv-example-row container .row .privacy')
        .contains('Privacy Policy')
        .click();

        cy.url().should('include', '/privacy');
        cy.go('back');

        //privacy
        //policy


        cy.get('.Heading .bv-example-row container .row')
        .contains("Here's what's trending")
        .click();

        cy.go('back');



        cy
        .get('.bv-example-row container')
        .contains('Jobs')
        .click();
    cy.url().should('include','/policy/en/terms-of-service');
    cy.visit('http://tumblr4u.eastus.cloudapp.azure.com');

    cy
    .get('.bv-example-row container')
    .contains('Support')
    .click();

    cy.url().should('include', '/support');
    cy.visit('http://tumblr4u.eastus.cloudapp.azure.com');


    cy.get('.hello .bv-example-row container')
        .contains('Posted by')
        .click();

        cy.visit('http://tumblr4u.eastus.cloudapp.azure.com');


    })

    


})
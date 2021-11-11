/// <reference types ="cypress" />

const { contains } = require("cypress/types/jquery");

describe('Welcome Page text assertions', () =>{

    beforeEach('visit tumblr', () => {
        cy.visit('https://www.tumblr.com/');
    })


    it.only('1st panel texts test', () => {

        cy.get('a[aria-label="Tumblr"]').contains('Tumblr').should('exist');

        cy.get('section[id="Get started"]').contains('Make stuff, look at stuff, talk about stuff, find your people.').should('exist');
        cy.get('section[id="Get started"]').contains('By continuing with the options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy').should('exist');
        cy.get('section[id="Get started"]').contains("Here's what's trending").should('exist');
        
        cy.get('section[id="Get started"]').contains('Continue with Google').should('exist');
        cy.get('section[id="Get started"]').contains('Continue with Apple').should('exist');
        
        cy.get('section[id="Get started"]').contains('Log in').should('exist');
        cy.get('section[id="Get started"]').contains('Sign up').should('exist');
        
        cy.get('[class="Z8Ux2 qjTo7 IMvK3"]').contains('Log in').should('exist');    // garbage class
        cy.get('[class="Z8Ux2 qjTo7 IMvK3"]').contains('Sign up').should('exist');   // garbage class
        

        cy.get('footer[role="contentinfo"]').contains('Terms').should('exist');
        cy.get('footer[role="contentinfo"]').contains('Privacy').should('exist');
        cy.get('footer[role="contentinfo"]').contains('Jobs').should('exist');
        cy.get('footer[role="contentinfo"]').contains('Support').should('exist');
    })

    it('2nd panel text test', () => {
        cy.get('section[id="Get started"]').contains('What is Tumblr?').should('exist');
        cy.get('section[id="Easy to use"]').contains('Tumblr is so easy to use that it’s hard to explain.').should('exist');

        cy.get('section[id="Easy to use"]').contains("We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Tumblr is 536 million different blogs, filled with literally whatever.").should('exist');

        cy.get('section[id="Easy to use"]').contains('Tumblr is so easy to use that it’s hard to explain.').should('exist');

        
    })
    
    it('3rd panel text tests', () => {



    })


    it('1st panel links tests', () => {
        cy.get('svg[viewBox="0 0 21 36.8"]').click();
        cy.url().should('include', '/');

        cy.get('a[aria-label="Tumblr"]').click();
        cy.url().should('include', '/');

        //cy.get('section[id ="Get started"]').contains('Sign up').click();
        //cy.url().should('include', '/register');
        //cy.go('back');



        cy.get('section[id ="Get started"]').contains('Terms of Service').click();
        cy.url().should('include', '/policy');
        cy.go('back');

        cy.get('section[id ="Get started"]').contains('Privacy Policy').click();
        cy.url().should('include', '/privacy');
        cy.go('back');
        //privacy
        //policy

    })

    


})
/// <reference types ="cypress" />

import { HomePage } from "../pageObjects/home.js"
//const { contains } = require("cypress/types/jquery");

describe('search tests before login', () =>{

    beforeEach('visit tumblr', () => {

        cy.visit('https://www.tumblr.com/');

    })

    it('drop down menu interactions', ()=>{

        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('[aria-label = "Search"]')
        .type('lol');
        
        cy.get('.h1rLz').click();

        cy.get('.jV8QC').should('not.be.visible');



    })

    it('selecting a search element', ()=>{

        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('[aria-label = "Search"]')
        .type('lol');

        cy.get('.Mw2UR').get('[href="/tagged/lol"]').click();

        cy.url().should('include', '/tagged/lol');

        cy.go('back');

        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('[aria-label = "Search"]')
        .type('lol');

        cy.get('.Mw2UR').get('[href="/search/lol"]').click();

        cy.url().should('include', '/search/lol');

        cy.go('back');
    })

    it('pressing enter without entering search keyword', ()=>{

        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('input[name="q"]')
        .type('{enter}');

        cy.url().should('include', '/explore/trending');

    })

})

describe('search after logging in', ()=>{
    const homeOBJ = new HomePage();

    beforeEach('login first', ()=>{

        homeOBJ.navigate();

    })

    it('search bar interactions', ()=>{
        cy.get('[aria-label="Search"]').click();
        cy.contains('.AzqQv').should('be.visible');

        cy.get('a[aria-label="Home"]').click();
        cy.contains('.AzqQv').should('not.be.visible');
    })

    it('searching for a sample post', ()=>{
        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('[aria-label = "Search"]')
        .type('lol');

        cy.get('.AzqQv').get('[href="/tagged/lol"]').click();

        cy.url().should('include', '/tagged/lol');

        cy.go('back');

        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('[aria-label = "Search"]')
        .type('lol');

        cy.get('.AzqQv').get('[href="/search/lol"]').click();

        cy.url().should('include', '/search/lol');

        cy.go('back');

        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('[aria-label = "Search"]')
        .type('lol');

        cy
        .get('[aria-label = "Search"]')
        .type('{enter}');

        cy.url().should('include', '/search/lol');
        cy.go('back');

    })

    it('pressing enter without typing a search keyword', ()=>{
        cy
        .get('input[name="q"]')
        .click();

        cy
        .get('input[name="q"]')
        .type('{enter}');
        
        cy.url()
        .should('include', '/explore/recommended-for-you');
    })

    it('tags you follow dropping from search bar', ()=>{

        cy.get('[aria-label = "Search"]')
        .click();

        cy.get('.jV8QC')
        .contains('/tagged/football');

        cy.fixture('user').then()
    })




})
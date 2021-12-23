/// <reference types ="cypress" />

import { HomePage } from "../pageObjects/home.js"
//const { contains } = require("cypress/types/jquery");

describe('search tests before login', () =>{

    beforeEach('visit tumblr', () => {

        cy.visit('http://tumblr4u.eastus.cloudapp.azure.com/');

    })

    it('drop down menu interactions', ()=>{

        // cy
        // .get('input[name="q"]')
        // .click();

        // cy
        // .get('[aria-label = "Search"]')
        // .type('lol');
        
        // cy.get('.h1rLz').click();

        // cy.not.contains('lol');

        cy
        .get('[placeholder="Search"]')
        .click();

        cy
        .get('[placeholder="Search"]')
        .type('lol');
        
        cy.get('.Main').contains('Tumblr4U').click();

        cy.not.contains('lol');
    })

    it('selecting a search element', ()=>{

        // cy
        // .get('input[name="q"]')
        // .click();

        // cy
        // .get('[aria-label = "Search"]')
        // .type('lol');

        // cy.get('.Mw2UR').get('[href="/tagged/lol"]').click();

        // cy.url().should('include', '/tagged/lol');

        // cy.go('back');

        // cy
        // .get('input[name="q"]')
        // .click();

        // cy
        // .get('[aria-label = "Search"]')
        // .type('lol');

        // cy.get('.Mw2UR').get('[href="/search/lol"]').click();

        // cy.url().should('include', '/search/lol');

        // cy.go('back');


        cy
        .get('[placeholder="Search"]')
        .click();

        cy
        .get('[placeholder="Search"]')
        .type('lol');

        cy.get('[href="/tagged/lol"]').click();

        cy.url().should('include', '/tagged/lol');

        cy.go('back');

        cy
        .get('[placeholder="Search"]')
        .click();

        cy
        .get('[placeholder="Search"]')
        .type('lol');

        cy.get('[href="/search/lol"]').click();

        cy.url().should('include', '/search/lol');

        cy.go('back');
    })

    it('pressing enter without entering search keyword', ()=>{

        // cy         
        // .get('input[name="q"]')
        // .click();

        // cy
        // .get('input[name="q"]')
        // .type('{enter}');

        // cy.url().should('include', '/explore/trending');

        cy
        .get('[placeholder="Search"]')
        .click();

        cy
        .get('[placeholder="Search"]')
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
        //cy.get('[aria-label="Search"]').click();
        //cy.contains('.AzqQv').should('be.visible');
        //cy.get('a[aria-label="Home"]').click();
        //cy.not.contains('.AzqQv');

        cy.get('#search').click();
        cy.get('.dropdown-list').should('be.visible');
        cy.get('a[href="/home"][aria-current="page"]').click({ multiple: true });
        cy.get('.dropdown-list').should('not.be.visible');
        
    })

    it('searching for a sample post', ()=>{
    //     cy
    //     .get('input[name="q"]')
    //     .click();

    //     cy
    //     .get('[aria-label = "Search"]')
    //     .type('lol');

    //     cy.get('.AzqQv').get('[href="/tagged/lol"]').click();

    //     cy.url().should('include', '/tagged/lol');

    //     cy.go('back');

    //     cy
    //     .get('input[name="q"]')
    //     .click();

    //     cy
    //     .get('[aria-label = "Search"]')
    //     .type('lol');

    //     cy.get('.AzqQv').get('[href="/search/lol"]').click();

    //     cy.url().should('include', '/search/lol');

    //     cy.go('back');

    //     cy
    //     .get('input[name="q"]')
    //     .click();

    //     cy
    //     .get('[aria-label = "Search"]')
    //     .type('lol');

    // cy
    //    .get('[aria-label = "Search"]')
    //      .type('{enter}');
  
    //       cy.url().should('include', '/search/lol');
    //     cy.go('back');

        cy
        .get('#search')
        .click();

        cy
        .get('#search')
        .type('lol');
        cy.get('.dropdown-list').contains('Go to #lol').click();
        cy.url().should('include', '/tagged/lol');
        cy.go('back');

        cy
        .get('#search')
        .click();
        cy
        .get('#search')
        .type('lol');

        cy.get('.dropdown-list').contains('Go to #lol').click();

        cy.url().should('include', '/search/lol');

        cy.go('back');
        cy
        .get('#search')
        .click();

        cy
        .get('#search')
        .type('lol');

        cy
        .get('#search')
        .type('{enter}');

        cy.url().should('include', '/search/lol');
        cy.go('back');
    })

    it('pressing enter without typing a search keyword', ()=>{
        // cy
        // .get('input[name="q"]')
        // .click();

        // cy
        // .get('input[name="q"]')
        // .type('{enter}');
        
        // cy.url()
        // .should('include', '/explore/recommended-for-you');
        cy
        .get('#search')
        .click();

        cy
        .get('#search')
        .type('{enter}');
        
        cy.url()
        .should('include', '/explore/recommended-for-you');
    })

    it('tags you follow dropping from search bar', ()=>{

       

        // cy.fixture('user').then((user)=>{

        //     if(user.users[1].followedTags != [])
        //     {
        //         cy.log('lol');
        //         cy.get('[aria-label = "Search"]')
        //         .click();
           
        
        //         cy.get('.jV8QC').should('contain', user.users[1].followedTags[0]);
        //         var i;
        //         var len = user.users[1].followedTags.length;
        //         for (i = 0 ; i < len ; i++ )
        //         {
        //             cy.get('.jV8QC').should('contain', user.users[1].followedTags[i]);
        //         }
        //     }
        // });

        cy.fixture('user').then((user)=>{

            if(user.users[2].followedTags != [])
            {
                cy.log('lol');
                cy.get('#search')
                .click();
                cy.get('.dropdown-list').should('contain', user.users[2].followedTags[0]);
                var i;
                var len = user.users[1].followedTags.length;
                for (i = 0 ; i < len ; i++ )
                {
                    cy.get('.dropdown-list').should('contain', user.users[2].followedTags[i]);
                }
            }
        });
    });

        it('asserting that posts under searched tag contains the tag', ()=>{
            // cy.get('[aria-label = "Search"]')
            // .click();

            // cy.fixture('user').then((user)=>{

            // if(user.users[1].keyword != [])
            // {
            //     cy.get('[aria-label = "Search"]')
            //     .type(user.users[1].keyword[0]);

            //     cy.get('[aria-label = "Search"]')
            //     .type('{enter}');

            //     var tag = "#"
            //     var word =  user.users[1].keyword[0]

            //     var tag = tag.concat(word);
            //     cy.scrollTo('center', {ensureScrollable : false});
            //     cy.contains('tag').should('be.visible');

            // }
            // else
            // {
            //     cy.log (" NO SEARCH KEYWORDS FOR THIS USER ");
            // }
            // });

            cy.get('#search')
            .click();

            cy.fixture('user').then((user)=>{

            if(user.users[2].keyword != [])
            {
                cy.get('#search')
                .type(user.users[2].keyword[0]);

                cy.get('#search')
                .type('{enter}');

                var tag = "#"
                var word =  user.users[2].keyword[0]

                var tag = tag.concat(word);
                cy.scrollTo('center', {ensureScrollable : false});
                cy.contains(tag).should('be.visible');

            }
            else
            {
                cy.log (" NO SEARCH KEYWORDS FOR THIS USER ");
            }
            });
        });




})
/// <reference types ="cypress" />


import { HomePage } from "../pageObjects/home.js"
//const { contains } = require("cypress/types/jquery");

/*

describe('block a user', ()=>{
    const homeOBJ = new HomePage();
    
    beforeEach('login first', ()=>{
        homeOBJ.navigate();
    });


    it('opening the profile panel and blocking a user', ()=>{

        cy.fixture('user').then((user)=>{
        cy.get('#search').click();
        cy.get('#search').type(user.users[4].keyword[0]);
        cy.get('.dropdown-list .dropdown-item:eq(3)').click();
        cy.get('[aria-label="three dots"][id="icon"][aria-hidden="true"]:first').click();
        cy.get('#dottedList .menu-item:eq(2)').click();
        cy.get('#buttons').contains('Never mind').click();

        cy.get('#dottedList .menu-item:eq(2)').click();
        cy.get('#buttons').contains('Block').click();
        });
        
    });

    it('posts of a blocked account shouldnt appear', ()=>{

    });

    it('send a message to a blocked user', ()=>{
        cy.fixture('user').then((user)=>{
            
            cy.get('#search').click();
            cy.get('#search').type(user.users[4].keyword[0]);
            cy.get('.dropdown-list .dropdown-item:eq(3)').click();
            cy.get('aria-label="patch plus fill"').click();
            /////////////////////////////////////////////////////////////////////// MUST BE FINISHED///////////////////////////////////
            cy.get('CHAT BOX').type('sample message');
            cy.get('CHAT BOX').should('contain', "couldn't send");
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        });
    })

    it('unblocking a user', ()=>{
        cy.fixture('user').then((user)=>{
                cy.get('#search').click();
                cy.get('#search').type(user.users[4].keyword[0]);
                cy.get('.dropdown-list .dropdown-item:eq(3)').click();
                cy.get('[aria-label="three dots"][id="icon"][aria-hidden="true"]:first').click();
                cy.get('#dottedList .menu-item:eq(2)').click();
        });

    });







});


describe('blocking a user then trying to reach him', ()=>{
    const homeOBJ = new HomePage();
    it('blocking a user again', ()=>{
        homeOBJ.navigate();
        cy.fixture('user').then((user)=>{
            cy.get('#search').click();
            cy.get('#search').type(user.users[4].keyword[0]);
            cy.get('.dropdown-list .dropdown-item:eq(3)').click();
            cy.get('[aria-label="three dots"][id="icon"][aria-hidden="true"]:first').click();
            cy.get('#dottedList .menu-item:eq(2)').click();
            cy.get('#buttons').contains('Never mind').click();
    
            cy.get('#dottedList .menu-item:eq(2)').click();
            cy.get('#buttons').contains('Block').click();
            });
    });

    it('the other user trying to send a message', ()=>{

    });

    it('the other user cant see posts', ()=>{
        
    })


})




*/
/// <reference types ="cypress" />

import { times } from "cypress/types/lodash";
import { HomePage } from "../pageObjects/home.js"


describe('log out button', ()=>{
    beforeEach('log in', ()=>{
        homeOBJ.navigate();
    });


    it('log out', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('[aria-label="Log out"]').click();
        cy.get('[aria-label="OK"]').click();
        cy.url().should('equal', 'https://www.tumblr.com/');
    });

    it('cancelling log out then logging out', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('[aria-label="Log out"]').click();
        cy.get('[aria-label="Cancel"]').click();
        
        cy.get('[aria-label="Account"]').click();
        cy.get('[aria-label="Log out"]').click();
        cy.url().should('equal', 'https://www.tumblr.com/');
    });
});

describe('palette colours', ()=>{
    const homeOBJ = new HomePage();

    beforeEach('log in', ()=>{
        homeOBJ.navigate();
    });

    it('changing palette one time', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('[aria-label="Change Palette"]').click();
    });

    it.only('changing palette mutiple times', ()=>{
        cy.get('[aria-label="Account"]').click();
        for(var i = 0 ; i < 12 ; i++)
        {
            cy.get('[aria-label="Change Palette"]').click();
        }
    });

});

describe('keyboard shortcuts', ()=>{
    beforeEach('log in', ()=>{
        homeOBJ.navigate();
    });

    it('open the shortcuts tab and close it', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.contains('Keyboard shortcuts').click();
        cy.contains('Scroll down').should('be.visible');
        cy.click('left');
        cy.should('not.contain', 'Scroll down');
    });

    it('try the scroll down shortcut', ()=>{
        for(var i = 0 ; i< 10 ; i++)
        {
            cy.type('j');
        }

        cy.scrollTo('top');

    });

    it('try the scroll up shortcut', ()=>{
        for(var i = 0 ; i< 20 ; i++)
        {
            cy.type('j');
        }
        for(var i = 0 ; i< 5 ; i++)
        {
            cy.type('k');
        }

        cy.get('[aria-label="avatar"]').should('not.be.visible');
    });

    it('try the back to top button', ()=>{
        for(var i = 0 ; i< 20 ; i++)
        {
            cy.type('j');
        }
        cy.type('.');
        cy.get('[aria-label="avatar"]').should('be.visible');
    });

    it('help', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('a[href="/help"]').click();
        cy.url().should('include', '/hc');
        cy.go('back');
    });

    it('account settings', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('a[href="/settings/account"]').click();
        cy.url().should('include', "/settings/account");
        cy.go('back');
    });

    it('following', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('a[href="/following"]').click();
        cy.url().should('include', '/following');
    });

    it('accounts you follow', ()=>{
        
        cy.get('[aria-label="Account"]').click();
        cy.get('a[href="/following"]').click();
        cy.fixture(user).then((user)=>{

            var len = user.users[2].followedBlogs.length;
            var i;
            for( i = 0 ; i < len ; i++)
            {
                cy.get('.NedHV').should('contain', user.users[2].followedBlogs[i]);
            }
        });
        cy.go('back');
    });

    it('profile likes', ()=>{
        cy.get('[aria-label="Account"]').click();
        cy.get('a[href="/likes"]').click();
        cy.url().should('include', '/likes');
    });
    it('create new blog', ()=>{
        cy.readFile('cypress/fixtures/user.json').then((data) => {
            data.otherBlogs = 'testBlog';
            cy.writeFile('cypress/fixtures/user.json', JSON.stringify(data))
          });
        cy.fixture(user).then((user)=>{

            cy.get('[aria-label="Account"]').click();
            cy.get('a[href="/new/blog"]').click();
            cy.get('#new_group_title').type(user.users[2].otherBlogs);
            cy.get('#validate_tumblelog_loader').type(user.users[2].otherBlogs);
            cy.get('.recaptcha-checkbox-border').click();
            cy.get('.submit_button_text').click();
        })
        
    });
    //NOTE : SHOULD LIKE A POST, THEN CHECK FOR IT IN THE LIKES PAGE
});


describe('multiple blogs', ()=>{
    beforeEach('log in', ()=>{
        homeOBJ.navigate();
    });

    it('first blog', ()=>{
        cy.get('[aria-label="Account"]').click();
    //    cy.
    });
   // noQqZ
});


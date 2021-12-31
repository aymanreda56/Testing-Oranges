describe('block a user', ()=>{
    const homeOBJ = new HomePage();
    
    beforeEach('logout', ()=>{
        cy.visit('http://tumblr4u.eastus.cloudapp.azure.com/home');
        cy.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZzZmhmc214d3FoeGhxbG93b0BudGhydy5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0MDk1ODI3NH0.gdIle6Pb-hwRSBIa4-sfQuqZ4Oo8wYQOLPlVWd8Tmgg');
    });


    it('logout', ()=>{

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

})


//fsfhfsmxwqhxhqlowo@nthrw.com
//Tumblr4me


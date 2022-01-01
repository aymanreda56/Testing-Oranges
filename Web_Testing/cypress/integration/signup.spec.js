describe('signup',function (){

    let prevBackground;
    let currBackground;
    let postedbyName;
    beforeEach(function (){
        cy
          .visit('http://tumblr4u.eastus.cloudapp.azure.com/');
        cy
          .get('.Heading > .bv-example-row > .row > .col-lg-3 > :nth-child(3) > a > .btn')
          .contains('Sign up')
          .click();
    })

    /*it('testing search bar in login page with enter button',()=>{

      cy
        .get('input[aria-label="Search"]')
        .type('google{enter}');
      cy
        .get('input[aria-label="Search"]')
        .should('have.value','google');
      cy
        .contains('google')
        .should('exist');
    })*/

    /*it('posted by link',()=>{
      
      cy
        .get('.AohpR > :nth-child(1) > a > strong')
        .invoke('text')
        .then((postedbyName)=>{
          
          cy
            .get('.AohpR > :nth-child(1) > a')
            .click();

          cy
            .url()
            .should('include',`/${postedbyName}.tumblr.com`);
      });
    })*/

    it('login button',()=>{
      cy
        .get('[href="/signIn"] > .btn')
        .click();
      cy
        .url()
        .should('include','/signIn');
    })


    it('when click on tumblr icon',()=>{
      
      cy
        .get('#TheHeader .navbar-brand')
        .contains('T4U')
        .click();
      cy
        .url()
        .should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/trending');
    })
    

    it('empty email and empty password and empty blog name',()=>{
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text',' You do have to fill this stuff out, you know. ');
    })

    it('empty email and correct password and empty blog name',()=>{
        cy
          .get('#pass')
          .type('y35SYi:7@+dK7J');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text',' You forgot to enter your email! ');
    })

    it('empty email and empty password and existing blog name',()=>{
        cy
          .get('#blog')
          .type('new12');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text',' You forgot to enter your email! ');
    })

    it('empty email and empty password and non existing blog name',()=>{
        cy
          .get('#blog')
          .type('qseeda1112');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text',' You forgot to enter your email! ');
    })

    it('non existing email and empty password and existing blog name',function (){
        
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
          .get('#email')
          .type(inbox.emailAddress);
        
          cy
            .get('#blog')
            .type('qseeda');

          cy
            .get('form > .btn')
            .click();
        
          cy
            .get('.error')
            .should('have.text',' You forgot to enter your password! ');
        })
        
    })

    it('existing email and empty password and blog name',()=>{
        cy
          .get('#email')
          .type('ahmedspiderman7@gmail.com');

        cy
          .get('#blog')
          .type('qseeda');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text',' You forgot to enter your password! ');
    })

    it('non existing email and incorrect(short password less than 8) password and existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
          .get('#email')
          .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('asdfg');

          cy
            .get('#blog')
            .type('new12');
          
          cy
            .get('form > .btn')
            .click();
        
          cy
            .get('.error')
            .should('have.text',' The password should be minimum 8 characters length ');
            
        })  
    })

    /*it('non existing email and correct password and existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')
        cy
          .get('#email')
          .type(inbox.emailAddress);

        cy
          .get('#pass')
          .type('y35SYi:7@+dK7J');

        cy
          .get('#blog')
          .type('emademad');
        
        
        cy
          .get('form > .btn')
          .click();
        
        cy
          .get('.error')
          .should('have.text',"That's a good blog name, but it's taken.");
      })        
    })*/

    /*it('existing email and password and blog name',()=>{
        cy
          .get('#email')
          .type('nour.2020@gmail.com');

        cy
          .get('#pass')
          .type('assdfghjkltr');

        cy
          .get('#blog')
          .type('qseeda');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','This email address is already in use.');
    })*/
    
    /*it('non existing email and correct password and existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
            .get('#email')
            .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('y35SYi:7@+dK7J');

          cy
            .get('#blog')
            .type('emademad');
          
          cy
            .get('form > .btn')
            .click();
        
          cy
            .get('.error')
            .should('have.text', "That's a good blog name, but it's taken.");
            
        })
    })*/

    it('non existing email and correct password and non existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

               
        cy
          .get('#email')
          .type(inbox.emailAddress);

        cy
          .get('#pass')
          .type('y35SYi:7@+dK7J');

        cy
          .get('#blog')
          .type('w'+inbox.id.slice(0,27));
        
        cy
          .get('form > .btn')
          .click();
      
        cy
          .url()
          .should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/age');
            
        }) 
 
    })

   it('non existing email and correct password and non existing blog name but negative age',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')
          cy
            .get('#email')
            .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('y35SYi:7@+dK7J');

          cy
            .get('#blog')
            .type('q'+inbox.id.slice(0,27));
          
          cy
            .get('form > .btn')
            .click();
        
          cy
            .get('.row .form-control')
            .type('-1');
            
          cy
            .get('.btn')
            .contains('Next')
            .click();
          
          cy
            .get('.error')
            .should('have.text',"That is not a valid age");
        })    
    })

    it('non existing email and correct password and non existing blog name but zero age',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
            .get('#email')
            .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('y35SYi:7@+dK7J');

          cy
            .get('#blog')
            .type('t'+inbox.id.slice(0,27));
          
          cy
            .get('form > .btn')
            .click();
            
          cy
            .get('.btn')
            .contains('Next')
            .click();
          
          cy
            .get('.error')
            .should('have.text',"That is not a valid age");
            
        })
    })

    it('non existing email and correct password and non existing blog name and valid age',function (){
       cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          //
          cy
            .get('#email')
            .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('y35SYi:7@+dK7J');

          cy
            .get('#blog')
            .type('a'+inbox.id.slice(0,27));
          
          cy
            .get('form > .btn')
            .click();

          cy
            .get('.row .form-control')
            .type('21');
            
            cy
            .get('.btn')
            .contains('Next')
            .click();

          cy.url().should('include','/getting_to_know_tumblr');
            
        })
    })


    it('non existing email and correct password and non existing blog name and valid age then skip button', function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          //
          cy
            .get('#email')
            .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('y35SYi:7@+dK7J');

          cy
            .get('#blog')
            .type('y'+inbox.id.slice(0,27));
          
          cy
            .get('form > .btn')
            .click();

          cy
          .get('.row .form-control')
          .type('21');
          
          cy
          .get('.btn')
          .contains('Next')
          .click();

          cy
            .get('.skipButton')
            .click();

          cy.url().should('include','http://tumblr4u.eastus.cloudapp.azure.com/home');
            
        })
    })
 
})
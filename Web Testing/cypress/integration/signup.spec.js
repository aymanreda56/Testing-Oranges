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

    /*it('when reload the page the background changes',()=>{
      cy
        .wait(4000);
      cy
        .get('[loading="lazy"]')
        .invoke('attr', 'srcset')
        .then((prevBackground)=>{
          cy
            .reload();
          cy
            .wait(4000);
          cy
            .get('[loading="lazy"]')
            .invoke('attr', 'srcset')
            .then(currBackground=>{
              cy
                .expect(currBackground).to.not.equal(prevBackground);
            });

        });
    })*/

    

    it('when click on tumblr it goes to tumblr welcome page',()=>{
      
      cy
        .get('#app .root .Main')
        .contains('Tumblr4U')
        .click();
      cy
        .url()
        .should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/');
    })

    it('when click on tumblr icon it goes to tumblr welcome page',()=>{
      
      cy
        .get('#TheHeader .navbar-brand')
        .contains('T4U')
        .click();
      cy
        .url()
        .should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/');
    })
    

    it('empty email and empty password and empty blog name',()=>{
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','please Fill all inputs.');
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
          .should('have.text','please Fill all inputs.');
    })

    it('empty email and empty password and existing blog name',()=>{
        cy
          .get('#blog')
          .type('emademad');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','please Fill all inputs.');
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
          .should('have.text','please Fill all inputs.');
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
          .get('#inputemail')
          .type(inbox.emailAddress);
        
          cy
            .get('#blog')
            .type('qseeda');

          cy
            .get('form > .btn')
            .click();
        
          cy
            .get('.error')
            .should('have.text','please Fill all inputs.');
        })
        
    })

    it('existing email and empty password and blog name',()=>{
        cy
          .get('#inputemail')
          .type('ahmedspiderman7@gmail.com');

        cy
          .get('#blog')
          .type('qseeda');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','please Fill all inputs.');
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
          .get('#inputemail')
          .type(inbox.emailAddress);

          cy
            .get('#pass')
            .type('asdfg');

          cy
            .get('#blog')
            .type('qseeda');
          
          cy
            .get('form > .btn')
            .click();
        
          cy
            .get('.error')
            .should('have.text','The password should be between 8 : 15 charachters.');
            
        })  
    })

    it.only('non existing email and correct password and existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')
        cy
          .get('#inputemail')
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
    })

    it('existing email and password and blog name',()=>{
        cy
          .get('#inputemail')
          .type('ahmedspiderman7@gmail.com');

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
    })
    
    it('non existing email and correct password and existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
            .get('#inputemail')
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
    })

    it('non existing email and correct password and non existing blog name',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

               
        cy
          .get('#inputemail')
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
          .should('equal', 'http://tumblr4u.eastus.cloudapp.azure.com/home');
            
        }) 
 
    })

   /*it('non existing email and correct password and non existing blog name but negative age',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')
          cy
            .get('[name=email]')
            .type(inbox.emailAddress);

          cy
            .get('[name=password]')
            .type('y35SYi:7@+dK7J');

          cy
            .get('[name=blogName]')
            .type('q'+inbox.id.slice(0,27));
          
          cy
            .get('[aria-label="Sign up"]')
            .click();
        
          cy
            .get('[name="age"]')
            .type('-1');
            
          cy
            .get('[aria-label="Next"]')
            .click();
          
          cy
            .get('[data-has-error="true"]')
            .should('have.text',"That's not a valid age. Please try again.");
        })    
    })*/

    /*it('non existing email and correct password and non existing blog name but zero age',function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
            .get('[name=email]')
            .type(inbox.emailAddress);

          cy
            .get('[name=password]')
            .type('y35SYi:7@+dK7J');

          cy
            .get('[name=blogName]')
            .type('t'+inbox.id.slice(0,27));
          
          cy
            .get('[aria-label="Sign up"]')
            .click();
        
          cy
            .get('[name="age"]')
            .type('0');
            
          cy
            .get('[aria-label="Next"]')
            .click();
          
          cy
            .get('[data-has-error="true"]')
            .should('have.text',"Oops. There was an error. Please try again.");
            
        })
    })*/

    /*it('non existing email and correct password and non existing blog name but no age',function (){
       cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          //
          cy
            .get('[name=email]')
            .type(inbox.emailAddress);

          cy
            .get('[name=password]')
            .type('y35SYi:7@+dK7J');

          cy
            .get('[name=blogName]')
            .type('a'+inbox.id.slice(0,27));
          
          cy
            .get('[aria-label="Sign up"]')
            .click();

          cy
            .get('[name="age"]')
            .type('21');
            
          cy
            .get('[aria-label="Next"]')
            .click();

          cy.url().should('include','/getting_to_know_tumblr');
            
        })
    })*/

    /*it('non existing email and correct password and non existing blog name and valid age', function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy
            .get('[name=email]')
            .type(inbox.emailAddress);

          cy
            .get('[name=password]')
            .type('y35SYi:7@+dK7J');

          cy
            .get('[name=blogName]')
            .type('a'+inbox.id.slice(0,27));
          
          cy
            .get('[aria-label="Sign up"]')
            .click();

          cy
            .get('[name="age"]')
            .type('21');
            
          cy
            .get('[aria-label="Next"]')
            .click();

          cy.url().should('include','/getting_to_know_tumblr');
            
        })
    })*/

   /* it('non existing email and correct password and non existing blog name and valid age then skip button', function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          //
          cy
            .get('[name=email]')
            .type(inbox.emailAddress);

          cy
            .get('[name=password]')
            .type('y35SYi:7@+dK7J');

          cy
            .get('[name=blogName]')
            .type('y'+inbox.id.slice(0,27));
          
          cy
            .get('[aria-label="Sign up"]')
            .click();

          cy
            .get('[name="age"]')
            .type('21');
            
          cy
            .get('[aria-label="Next"]')
            .click();
          cy
            .get('.onboarding-skip-button')
            .click();

          cy.url().should('include','https://www.tumblr.com/dashboard');
            
        })
    })*/
 
})
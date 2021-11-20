describe('signup',function (){

    let prevBackground;
    let currBackground;
    let postedbyName;
    beforeEach(function (){
        cy
          .visit('https://www.tumblr.com/register?source=login_register_center');
    })
    it('testing search bar in login page with enter button',()=>{

      cy
        .get('input[aria-label="Search"]')
        .type('google{enter}');
      cy
        .get('input[aria-label="Search"]')
        .should('have.value','google');
      cy
        .contains('google')
        .should('exist');
    })

    it('posted by link',()=>{
      
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
      

    })

    it('login button',()=>{
      cy
        .get('a[href="/login"]')
        .click();
      cy
        .url()
        .should('include','/login');

    })

    it('when reload the page the background changes',()=>{

      cy
        .get('[loading="lazy"]')
        .invoke('attr', 'srcset')
        .then((prevBackground)=>{
          cy
            .reload();
          cy
            .wait(2000);
          cy
            .get('[loading="lazy"]')
            .invoke('attr', 'srcset')
            .then(currBackground=>{
              cy
                .expect(currBackground).to.not.equal(prevBackground);
            });

        });
 
    })

    

    it('when click on tumblr it goes to tumblr welcome page',()=>{
      
      cy
        .get('[aria-label="Tumblr"]')
        .click();
      cy
        .url()
        .should('include', '/');
    })

    it('when click on tumblr icon it goes to tumblr welcome page',()=>{
      
      cy
        .get('svg[viewBox="0 0 21 36.8"]')
        .click();
      cy
        .url()
        .should('include', '/');
    })
    

    it('empty email and empty password and empty blog name',()=>{
        
        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You do have to fill this stuff out, you know.');
    })

    it('empty email and correct password and empty blog name',()=>{
        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');

        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your email!');
    })

    it('empty email and empty password and existing blog name',()=>{
        cy
          .get('[name=blogName]')
          .type('qseeda');

        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your email!');
    })

    it('empty email and empty password and non existing blog name',()=>{
        cy
          .get('[name=blogName]')
          .type('qseeda1112');

        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your email!');
    })

    it('non existing email and empty password and existing blog name',()=>{
        cy
          .get('[name=email]')
          .type('ahmedmad@gmail.com');
        
        cy
          .get('[name=blogName]')
          .type('qseeda');

        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your password!');
    })

    it('existing email and empty password and blog name',()=>{
        cy
          .get('[name=email]')
          .type('itztysocfkegfkgoij@adfskj.com');

        cy
          .get('[name=blogName]')
          .type('qseeda');
        
        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your password!');
    })

    it('non existing email and incorrect(short password less than 8) password and existing blog name',()=>{
        cy
          .get('[name=email]')
          .type('zmmgsatyquecmmrbll@pptrvv.com');

        cy
          .get('[name=password]')
          .type('asdfg');

        cy
          .get('[name=blogName]')
          .type('qseeda');
        
        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','The password must be at least 8 characters.');
    })

    it('non existing email and correct password and existing blog name',()=>{
        cy
          .get('[name=email]')
          .type('zmmgsatyquecmmrbll@pptrvv.com');

        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');

        cy
          .get('[name=blogName]')
          .type('qseeda');
        
        
        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text',"That's a good blog name, but it's taken.");
    })

    it('existing email and password and blog name',()=>{
        cy
          .get('[name=email]')
          .type('itztysocfkegfkgoij@adfskj.com');

        cy
          .get('[name=password]')
          .type('assdfghjkltr');

        cy
          .get('[name=blogName]')
          .type('qseeda');
        
        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','This email address is already in use.');
    })
    
    it('non existing email and correct password and non existing blog name',()=>{
        cy
          .get('[name=email]')
          .type('hpu85558@cuoly.com');

        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');

        cy
          .get('[name=blogName]')
          .type('qseeda1006');
        
        cy
          .get('[aria-label="Sign up"]')
          .click();
       
        cy
          .get('[name="age"]')
          .invoke('attr','placeholder')
          .should('eq', 'How old are you?');
    })

   it('non existing email and correct password and non existing blog name but negative age',()=>{
        cy
          .get('[name=email]')
          .type('hpu85558@cuoly.com');

        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');

        cy
          .get('[name=blogName]')
          .type('qseeda1006');
        
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

    it('non existing email and correct password and non existing blog name but zero age',()=>{
      cy
        .get('[name=email]')
        .type('hpu85558@cuoly.com');

      cy
        .get('[name=password]')
        .type('y35SYi:7@+dK7J');

      cy
        .get('[name=blogName]')
        .type('qseeda1006');
      
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
    it('non existing email and correct password and non existing blog name but no age',()=>{
      cy
        .get('[name=email]')
        .type('hpu85558@cuoly.com');

      cy
        .get('[name=password]')
        .type('y35SYi:7@+dK7J');

      cy
        .get('[name=blogName]')
        .type('qseeda1006');
      
      cy
        .get('[aria-label="Sign up"]')
        .click();
        
      cy
        .get('[aria-label="Next"]')
        .click();
      
      cy
        .get('[data-has-error="true"]')
        .should('have.text',"You forgot to enter your age!");
    })

    it('non existing email and correct password and non existing blog name and valid age', function (){
      cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // save inbox id and email address to this (make sure you use function and not arrow syntax)
          cy.wrap(inbox.id).as('inboxId')
          cy.wrap(inbox.emailAddress).as('emailAddress')

          cy.log('id',inbox.id);
          cy.log('email',inbox.emailAddress);
          cy
            .get('[name=email]')
            .type(inbox.emailAddress);

          cy
            .get('[name=password]')
            .type('y35SYi:7@+dK7J');

          cy
            .get('[name=blogName]')
            .type('fsjsafhhf');
          
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

      
      

    })
 
})
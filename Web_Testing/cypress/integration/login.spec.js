describe('login',()=>{

    let prevBackground;
    let currBackground;
    let postedbyName;
    beforeEach(()=>{
        cy
          .visit('http://tumblr4u.eastus.cloudapp.azure.com/');
        cy
          .get(':nth-child(4) > a > .btn')
          .click();
    })

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

    it('signup button',()=>{
      cy
        .get('[href="/signUp"] > .btn')
        .click();
      cy
        .url()
        .should('include','/signUp');

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
    

    it('empty email and empty password',()=>{
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','You do have to fill this stuff out, you know.');
    })

    it('empty email and incorrect password',()=>{
        cy
          .get('#exampleInputPassword1')
          .type('asdfghj');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','You forgot to enter your email!');
    })

    it('email and short password',()=>{
      cy
          .get('#exampleInputEmail1')
          .type('ahmedmad@gmail.com');
      cy
        .get('#exampleInputPassword1')
        .type('asdrf');

      cy
        .get('form > .btn')
        .click();
     
      cy
        .get('.error')
        .should('have.text','You forgot to enter your email!');
  })

    it('empty email and correct password',()=>{
        cy
          .get('#exampleInputPassword1')
          .type('emademad');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','You forgot to enter your email!');
    })

    it('non existing email and empty password',()=>{
        cy
          .get('#exampleInputEmail1')
          .type('ahmedmad@gmail.com');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','You forgot to enter your password!');
    })

    it('existing email and empty password',()=>{
        cy
          .get('#exampleInputEmail1')
          .type('ahmedspiderman7@gmail.com');

        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','You forgot to enter your password!');
    })

    it('non existing email and incorrect password',()=>{
        cy
          .get('#exampleInputEmail1')
          .type('ahmedemad@gmail.com');

        cy
          .get('#exampleInputPassword1')
          .type('asdfghj');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','Your email or password were incorrect.');
    })

    it('non existing email and correct password',()=>{
        cy
          .get('#exampleInputEmail1')
          .type('ahmedmad@gmail.com');

        cy
          .get('#exampleInputPassword1')
          .type('emademad');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','Your email or password were incorrect.');
    })

    it('existing email and incorrect password',()=>{
        cy
          .get('#exampleInputEmail1')
          .type('ahmedspiderman7@gmail.com');

        cy
          .get('#exampleInputPassword1')
          .type('assdfghjkltr');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .get('.error')
          .should('have.text','Your email or password were incorrect.');
    })
    
    it('existing email and correct password',()=>{
        cy
          .get('#exampleInputEmail1')
          .type('ahmedspiderman7@gmail.com');

        cy
          .get('#exampleInputPassword1')
          .type('emademad');
        
        cy
          .get('form > .btn')
          .click();
       
        cy
          .url()
          .should('include', 'home');
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

    
})
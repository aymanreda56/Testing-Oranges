describe('login',()=>{

    let prevBackground;
    let currBackground;
    let postedbyName;
    beforeEach(()=>{
        cy
          .visit('https://www.tumblr.com/login');
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
    it('signup button',()=>{
      cy
        .get('a[href="/register?source=login_register_header_landing"]')
        .click();
      cy
        .url()
        .should('include','/register');

    })

    it('when reload the page the background changes',()=>{

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
    

    it('empty email and empty password',()=>{
        
        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You do have to fill this stuff out, you know.');
    })

    it('empty email and incorrect password',()=>{
        cy
          .get('[name="password"]')
          .type('asdfghj');

        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your email!');
    })

    it('empty email and correct password',()=>{
        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');

        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your email!');
    })

    it('non existing email and empty password',()=>{
        cy
          .get('[name=email]')
          .type('ahmedmad@gmail.com');

        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your password!');
    })

    it('existing email and empty password',()=>{
        cy
          .get('[name=email]')
          .type('itztysocfkegfkgoij@adfskj.com');

        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','You forgot to enter your password!');
    })

    it('non existing email and incorrect password',()=>{
        cy
          .get('[name=email]')
          .type('ahmedemad@gmail.com');

        cy
          .get('[name=password]')
          .type('asdfghj');
        
        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','Your email or password were incorrect.');
    })

    it('non existing email and correct password',()=>{
        cy
          .get('[name=email]')
          .type('ahmedmad@gmail.com');

        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');
        
        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','Your email or password were incorrect.');
    })

    it('existing email and incorrect password',()=>{
        cy
          .get('[name=email]')
          .type('itztysocfkegfkgoij@adfskj.com');

        cy
          .get('[name=password]')
          .type('assdfghjkltr');
        
        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .get('[data-has-error="true"]')
          .should('have.text','Your email or password were incorrect.');
    })
    
    it('existing email and correct password',()=>{
        cy
          .get('[name=email]')
          .type('itztysocfkegfkgoij@adfskj.com');

        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');
        
        cy
          .get('[aria-label="Log in"]')
          .click();
       
        cy
          .url()
          .should('include', 'dashboard');
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

    
})
describe('login',()=>{
    beforeEach(()=>{
        cy
          .visit('https://www.tumblr.com/login');
    })

    it('empty email and empty password',()=>{
        
        cy
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
          .should('have.text','You do have to fill this stuff out, you know.');
    })

    it('empty email and incorrect password',()=>{
        cy
          .get('[name=password]')
          .type('asdfghj');

        cy
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
          .should('have.text','You forgot to enter your email!');
    })

    it('empty email and correct password',()=>{
        cy
          .get('[name=password]')
          .type('y35SYi:7@+dK7J');

        cy
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
          .should('have.text','You forgot to enter your email!');
    })

    it('non existing email and empty password',()=>{
        cy
          .get('[name=email]')
          .type('ahmedmad@gmail.com');

        cy
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
          .should('have.text','You forgot to enter your password!');
    })

    it('existing email and empty password',()=>{
        cy
          .get('[name=email]')
          .type('itztysocfkegfkgoij@adfskj.com');

        cy
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
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
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
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
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
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
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .get('.oFCPF')
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
          .get('form > .TRX6J > .EvhBA')
          .click();
       
        cy
          .url()
          .should('include', 'dashboard');
    })
})
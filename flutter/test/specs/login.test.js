const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/Login.page.js");



describe('ًlogin tests', ()=>{

    it('no email no password', async()=>{
        
        await (await LoginPOM.LoginBtn).click();
        await driver.pause(2000)
        await (await LoginPOM.LoginEmail).click();
        driver.pause(2000)
        await (await LoginPOM.emailLoginField()).addValue("");
        driver.pause(2000);
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(2000);
        await expect(await LoginPOM.emailAssertText.getAttribute('content-desc')).equal("Email required");

        await (await LoginPOM.emailLoginField()).clearValue();
        driver.pause(2000);

        await (await LoginPOM.emailLoginField()).click();
        driver.pause(2000);

        await (await LoginPOM.emailLoginField()).addValue("naynoona111@yahoo.com");
        driver.pause(2000);
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.enterPasswordBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.PasswordField).addValue(""); 
        driver.pause(2000);

        await (await LoginPOM.LogInFinalBtn).click(); 
        driver.pause(2000);
        let asserter = $('~Required Password');
        await expect(await asserter.getAttribute('displayed')).equal('true');
    })

    it('non existing email wrong password', async()=>{
        await (await LoginPOM.backBtn).click();
        let field = $('//android.widget.EditText');
        await driver.back();
        await (await LoginPOM.emailLoginField()).click();
        await driver.pause(2000);
        await (await LoginPOM.emailLoginField()).clearValue();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).click();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).addValue("naynoo@yahoo.com");
        driver.pause(2000);
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.enterPasswordBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.PasswordField).click(); 
        await (await LoginPOM.PasswordField).addValue("123456789mM"); 
        driver.pause(2000);
        await (await LoginPOM.LogInFinalBtn).click(); 
        driver.pause(2000);
        let asserter = $('~Email not found');
        await expect(await asserter.getAttribute('displayed')).equal('true');


      //  await (await LoginPOM.continueButton()).getAttribute("enabled").then((result)=>{
      //      expect(result).equal("false"); 
      //  })
        
    })

    /*
    it('not an email no password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("ahmeddd");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue(""); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })
    

    it('no email incorrect password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue("ahmeddd"); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })
    */

    it('no email short password', async()=>{
        
        await (await LoginPOM.backBtn).click();
        let field = $('//android.widget.EditText');
        await driver.back();
        await (await LoginPOM.emailLoginField()).click();
        await driver.pause(2000);
        await (await LoginPOM.emailLoginField()).clearValue();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).click();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).addValue("naynoona111@yahoo.com");
        driver.pause(2000);
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.enterPasswordBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.PasswordField).click(); 
        await (await LoginPOM.PasswordField).addValue("123"); 
        driver.pause(2000);
        await (await LoginPOM.LogInFinalBtn).click(); 
        driver.pause(2000);
        let asserter = $('//android.view.View[@index=1]');
        await expect(await asserter.getAttribute('content-desc')).equal("Password is at least 8 characters");
        
    });

    it('email not in format and password', async()=>{
        
        await (await LoginPOM.backBtn).click();
        await driver.back();
        await (await LoginPOM.emailLoginField()).click();
        await driver.pause(2000);
        await (await LoginPOM.emailLoginField()).clearValue();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).click();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).addValue("naynoona111@yahoo");
        driver.pause(2000);
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(2000);
        let asserter = $('//android.view.View[@index=0]');
        await expect(await asserter.getAttribute('content-desc')).equal("Enter a Valid email");
       // await (await LoginPOM.errorInEmail()).getText().then((result)=>{
       //     expect(result).equal("This email address isn't correct. Please try again."); 
       // })
        
    });

    it('non existing email and incorrect password', async()=>{
        await (await LoginPOM.emailLoginField()).click();
        await driver.pause(2000);
        await (await LoginPOM.emailLoginField()).clearValue();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).click();
        driver.pause(2000);
        await (await LoginPOM.emailLoginField()).addValue("naynoona111@yahoo.com");
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.enterPasswordBtn()).click();
        driver.pause(2000);
        await (await LoginPOM.PasswordField).click(); 
        await (await LoginPOM.PasswordField).addValue("123456789mM"); 
        driver.pause(2000);
        await (await LoginPOM.LogInFinalBtn).click(); 
        driver.pause(2000);
        let asserter = $('//android.view.View[@index=4]');
        await (await asserter.getAttribute('content-desc').then((res)=>{
            expect(res).equal("incorrect password");
        }));
        
    })

    it('existing email and correct password', async()=>{
        await (await LoginPOM.PasswordField).click();
        await (await LoginPOM.PasswordField).clearValue(); 
        await (await LoginPOM.PasswordField).addValue("Naynoona56"); 
        driver.pause(2000);
        await (await LoginPOM.LogInFinalBtn).click(); 
        driver.pause(2000);
        let asserter = $('~home Tab 1 of 4');
        await expect(await asserter.getAttribute('displayed')).equal('true');
    })
})

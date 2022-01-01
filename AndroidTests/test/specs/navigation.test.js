const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/login.page.js");



describe('ًlogin tests', ()=>{
    beforeEach('login', async()=>{
        await driver.reset();
    });

    it.only('add comment', async()=>{
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("ahmemad10@gmail.com");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue("ahmede4u"); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).click();
        driver.pause(2000)
        driver.getPageSource();
        
        await (await SearchPage.commentText()).getText().then((result)=>{
            expect(result).equal("anwar"); 
        });
    })

    it('back from search page to home with back button', async()=>{
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("ahmemad10@gmail.com");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue("ahmede4u"); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).click();
        driver.pause(2000)
        await (await Dashboard.searchButton()).click();
        driver.pause(2000);
        await (await SearchPage.backButton()).click();
        driver.pause(2000)
        await (await SearchPage.backButton()).click();
        driver.pause(2000)
        await (await Dashboard.writePost()).getAttribute('displayed').then((result)=>{
            expect(result).equal("true"); 
        });
    })
})

const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/login.page.js");



describe('ًlogin tests', ()=>{
   /* const logInBtn = await LoginPOM.loginButton();
    const logInEmail = await LoginPOM.loginWithEmailButton();
    const emailField = await LoginPOM.emailTextBox();
    const passwordField = await LoginPOM.passwordTextBox();
    const loginbtn = await LoginPOM.continueButton().getAttribute("enabled");*/
    it.only('no email no password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue(""); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

})

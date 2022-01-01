const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/login.page.js");



describe('ًlogin tests', ()=>{
    beforeEach('login', async()=>{
        await driver.reset();
    });

    it('no email no password', async()=>{
        
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

    it('non existing email no password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("ahm@gmail.com");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue(""); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

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

    it('no email short password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue("ahmed"); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

    it('email not in format and password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("ahm");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue("ahmed"); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).click();
        driver.pause(2000)
        await (await LoginPOM.errorInEmail()).getText().then((result)=>{
            expect(result).equal("This email address isn't correct. Please try again."); 
        })
        
    })

    it('non existing email and incorrect password', async()=>{
        
        await (await LoginPOM.loginButton()).click();
        await driver.pause(2000)
        await (await LoginPOM.loginWithEmailButton()).click();
        driver.pause(2000)
        await (await LoginPOM.emailTextBox()).addValue("ahmed@gmail.com");
        driver.pause(2000)
        await (await LoginPOM.passwordTextBox()).addValue("ahmed"); 
        driver.pause(2000)
        await (await LoginPOM.continueButton()).click();
        driver.pause(2000)
        await (await LoginPOM.errorField()).getText().then((result)=>{
            expect(result).equal("Incorrect email address or password. Please try again"); 
        });
    })

    it('existing email and correct password', async()=>{
        
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
        await (await Dashboard.homeButton()).getAttribute("content-desc").then((result)=>{
            expect(result).equal("home"); 
        });
    })
})

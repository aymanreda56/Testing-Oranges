const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const SignupPOM = require ("../pageobjects/signup.page.js");



describe('ًsignup tests', ()=>{
    beforeEach('login', async()=>{
        await driver.reset();
    });

    it('no email no password no age no name', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.doneButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

    it('email only', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.emailTextBox()).addValue("ahm@gmail.com");
        driver.pause(2000)
        await (await SignupPOM.doneButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

    it('age only', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.ageTextBox()).addValue("21");
        driver.pause(2000)
        await (await SignupPOM.doneButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

    it('password only', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.passwordTextBox()).addValue("adfdsfsdf");
        driver.pause(2000)
        await (await SignupPOM.doneButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

    it('name only', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.nameTextBox()).addValue("adfdsfsdf");
        driver.pause(2000)
        await (await SignupPOM.doneButton()).getAttribute("enabled").then((result)=>{
            expect(result).equal("false"); 
        })
        
    })

    it('new email name age password', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.emailTextBox()).addValue("ahmemad10@gmail.com");
        driver.pause(2000)
        await (await SignupPOM.passwordTextBox()).addValue("ahmede4u");
        driver.pause(2000)
        await (await SignupPOM.ageTextBox()).addValue("21");
        driver.pause(2000)
        await (await SignupPOM.nameTextBox()).addValue("ahmede");
        driver.pause(2000)
        
    })

    it('taken email and new name ', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.emailTextBox()).addValue("ahmemad10@gmail.com");
        driver.pause(2000)
        await (await SignupPOM.passwordTextBox()).addValue("ahmede4u");
        driver.pause(2000)
        await (await SignupPOM.ageTextBox()).addValue("21");
        driver.pause(2000)
        await (await SignupPOM.nameTextBox()).addValue("ahmede12");
        driver.pause(2000)
        await (await SignupPOM.signPage()).getText().then((result)=>{
            expect(result).equal("You'll need a name to make\nyour own posts, Customize\nyour blog, and message\npeople."); 
        })
    })

    it('untaken email and taken name ', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.emailTextBox()).addValue("ahmemad@gmail.com");
        driver.pause(2000)
        await (await SignupPOM.passwordTextBox()).addValue("ahmede4u");
        driver.pause(2000)
        await (await SignupPOM.ageTextBox()).addValue("21");
        driver.pause(2000)
        await (await SignupPOM.nameTextBox()).addValue("ahmede");
        driver.pause(2000)
        await (await SignupPOM.signPage()).getText().then((result)=>{
            expect(result).equal("You'll need a name to make\nyour own posts, Customize\nyour blog, and message\npeople."); 
        })
    })

    it('untaken email and untaken name ', async()=>{
        
        await (await SignupPOM.signupButton()).click();
        await driver.pause(2000)
        await (await SignupPOM.signupWithEmailButton()).click();
        driver.pause(2000)
        await (await SignupPOM.emailTextBox()).addValue("uqc31422@boofx.com");
        driver.pause(2000)
        await (await SignupPOM.passwordTextBox()).addValue("ahmede4u");
        driver.pause(2000)
        await (await SignupPOM.ageTextBox()).addValue("21");
        driver.pause(2000)
        await (await SignupPOM.nameTextBox()).addValue("new12");
        driver.pause(2000)
        await (await SignupPOM.doneButton()).click();
        await (await Dashboard.homeButton()).getAttribute("content-desc").then((result)=>{
            expect(result).equal("home"); 
        })
    })
   
})

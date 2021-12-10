const { assert, expect } = require("chai")
const { listDialogBtn } = require("../pageobjects/dialog.page")
const dialog = require("../pageobjects/dialog.page.js")
const welcome = require("../pageobjects/welcome.page.js")

const Dashboard = require("../pageobjects/Dashboard.page.js")


const LoginPOM = require ("../pageobjects/login.page.js");
const welcomePage = require("../pageobjects/welcome.page.js")


describe('ًWelcome Page', ()=>{
    it('app loads correctly', ()=>{

    })



    it('Welcome Page autoscroll', ()=>{
        driver.setTimeouts(5000)
        let firstI = welcome.backgroundImage.getAttribute('elementId');
        driver.touchAction([
            {action: 'press', x:900, y: 750},
            {action: 'moveTo', x:150, y: 750},
            'release'
        ]);
        console.log(firstI);
        
        let secondId = welcome.backgroundImage.getAttribute('elementId');
        expect(firstI).not.equal(secondId);
        driver.touchAction([
            {action: 'press', x:900, y: 750},
            {action: 'moveTo', x:150, y: 750},
            'release'
        ]);
        let thirdId = welcome.backgroundImage.getAttribute('elementId');
        expect(thirdId).not.equal(secondId);
        
    })

    it('text and logo assertions', ()=>{
        driver.setTimeouts(5000)
        let text1 = welcome.paragraph.getAttribute('text');
        console.log(text1);
        expect(text1).to.equal('Explore mind-blowing stuff.');
        driver.action([
            {"type": 'pause', "duration": 3500}
        ])
        let text2 = welcome.paragraph.getAttribute('text');
        expect(text2).equal('Follow Tumblrs that spark your interests.');
    })



    
    
        it.only('loginButton',()=>{
            driver.setTimeout(5000);
    
            LoginPOM.loginButton.click();
            driver.setTimeout(5000);
           // LoginPOM.loginWithEmailButton.click();
           // LoginPOM.emailTextBox.addValue('ahm@gamil.com');
            let isDisplay = LoginPOM.loginWithEmailButton.getAttribute('text');
            console.log("AYMAN",isDisplay);
            expect(isDisplay).equal("Log in with Email");
    
        })


})


describe.only('Dashboard tests', ()=>{


    it.only('small tab buttons on the bottom works', ()=>{

        ///////////////// MUST LOG IN FIRST /////////
        welcomePage.logInBtn.click();
        welcomePage.logInWithEmailBtn.click();
        welcomePage.logInEmailField.addvalue('naynoona111@yahoo.com');
        welcomePage.logInContinueBtn.click();
        welcomePage.continueWithPasswordBtn.click();
        welcomePage.logInPasswordField.addvalue('Ayman_mohamed56');
        welcomePage.finalLogInBtn.click();
        /////////////////////////////////////////////
        driver.touchAction([
            {action: 'press', x:900, y: 1200},
            {action: 'moveTo', x:900, y: 500},
            'release'
        ]);
        
        Dashboard.exploreTabBtn.click();

        driver.touchAction([
            {action: 'press', x:900, y: 1200},
            {action: 'moveTo', x:900, y: 500},
            'release'
        ]);

        Dashboard.notificationsTabBtn.click();

        driver.touchAction([
            {action: 'press', x:900, y: 500},
            {action: 'moveTo', x:900, y: 1200},
            'release'
        ]);
        /// expect must be after touchAction

        Dashboard.accountTabBtn.click();

        driver.touchAction([
            {action: 'press', x:900, y: 500},
            {action: 'moveTo', x:900, y: 1200},
            'release'
        ]);

        driver.touchAction([
            {action: 'press', x:900, y: 1200},
            {action: 'moveTo', x:900, y: 500},
            'release'
        ]);

        Dashboard.dashboardTabBtn.click();
        Dashboard.dashboardTabBtn.click();

    })



})
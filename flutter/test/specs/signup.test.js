const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/Login.page.js");


/*




describe('sign up', ()=>{
    beforeEach('reset everything',async()=>{
        await driver.reset();
    });
    
    it('age smaller than 18',async()=>{
        await (await LoginPOM.SignupBtn).click();
        driver.pause(2000);
        await (await LoginPOM.SignupEmailBtn).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).addValue("4");
        driver.pause(2000);
        await (await LoginPOM.nextBtn).click();
        driver.pause(2000);
        let asserter = $('//android.view.View[@content-desc="You\'re too young for this"]');
        await expect(await asserter.getAttribute('displayed')).equal('true');
    });

    it('bigger than 150', async()=>{
        await (await LoginPOM.SignupBtn).click();
        driver.pause(2000);
        await (await LoginPOM.SignupEmailBtn).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).addValue("180");
        driver.pause(2000);
        await (await LoginPOM.nextBtn).click();
        driver.pause(2000);
        let asserter = $('//android.view.View[@index=0]');
        await expect(await asserter.getAttribute('content-desc')).not.equal("invalid Age");
    });

    it('correct age', async()=>{
        await (await LoginPOM.SignupBtn).click();
        driver.pause(2000);
        await (await LoginPOM.SignupEmailBtn).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).addValue("20");
        driver.pause(2000);
        await (await LoginPOM.nextBtn).click();
        driver.pause(2000);
        let asserter = $('//android.view.View[@content-desc="What do you like? Whatever you\'re into, you\'ll find here."]');
        await expect (await asserter.getAttribute('displayed')).equal('true');

    });

    it('choosing some tags', async()=>{
        await (await LoginPOM.SignupBtn).click();
        driver.pause(2000);
        await (await LoginPOM.SignupEmailBtn).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).click();
        driver.pause(2000);
        await (await LoginPOM.AgeField).addValue("20");
        driver.pause(2000);
        await (await LoginPOM.nextBtn).click();
        driver.pause(2000);

        await (await LoginPOM.interestsCards_1).click();
        await (await LoginPOM.interestsCards_2).click();
        await (await LoginPOM.interestsCards_3).click();
        driver.pause(2000);
        await (await LoginPOM.interestsCards_4).click();
        await (await LoginPOM.interestsCards_5).click();
        driver.pause(2000);
        await (await LoginPOM.pickBtn).click();
        driver.pause(2000);
        let asserter = $('~home Tab 1 of 4');
        await expect(await asserter.getAttribute('displayed')).equal('true');
    });





});


*/
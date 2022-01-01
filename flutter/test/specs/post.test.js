const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/Login.page.js");

describe('post buttons and assertions', ()=>{
    beforeEach('reset and log in', async()=>{
        driver.reset();
        await (await LoginPOM.LoginBtn).click();
        await driver.pause(1000);
        await (await LoginPOM.LoginEmail).click();
        driver.pause(1000);
        await (await LoginPOM.emailLoginField()).click();
        await driver.pause(1000);
        await (await LoginPOM.emailLoginField()).clearValue();
        driver.pause(1000);
        await (await LoginPOM.emailLoginField()).click();
        driver.pause(1000);
        await (await LoginPOM.emailLoginField()).addValue("naynoona111@yahoo.com");
        driver.pause(1000);
        await (await LoginPOM.LoginContinueBtn()).click();
        driver.pause(1000);
        await (await LoginPOM.enterPasswordBtn()).click();
        driver.pause(1000);
        await (await LoginPOM.PasswordField).click();
        await (await LoginPOM.PasswordField).clearValue(); 
        await (await LoginPOM.PasswordField).addValue("Naynoona56"); 
        driver.pause(2000);
        await (await LoginPOM.LogInFinalBtn).click(); 
        driver.pause(8000);
    });

    it('like button and assert the number of notes', async()=>{
        driver.pause(9000);
        await (await Dashboard.likeBtn).click();
        driver.pause(2000);
        await expect(await Dashboard.notesBtn.getAttribute('contend-desc')).equal("1 notes");
    });

    it('trash button', async()=>{
        await (await Dashboard.trashBtn).click();
        driver.pause(2000);
    });
    it('report button', async()=>{
        await (await Dashboard.threeBtn).click();
        driver.pause(2000);
        await (await Dashboard.reportBtn).click();
        driver.pause(2000);
    });
    it('commenting', async()=>{
        await (await Dashboard.commentBtn).click();
        driver.pause(2000);
        await (await Dashboard.commentField).click();
        driver.pause(2000);
        await (await Dashboard.commentField).addValue("hello");
        driver.pause(2000);
        await (await Dashboard.replyBtn).click();
        driver.pause(2000);
        await (await Dashboard.backBtn).click();
        driver.pause(2000);
    });

    it('edit post', async()=>{
        await (await Dashboard.editBtn).click();
        driver.pause(2000);
        let field = $('//android.view.View[@index=1]');
        await field.click();
        driver.pause(2000);
        await field.addValue("lmao");
        driver.pause(2000);
        let showPostbtn = $('~show your post');
        await showPostbtn.click();
        driver.pause(2000);
        let exitbtn = $('//android.widget.Button[@index=0]');
        await exitbtn.click();
    });
})
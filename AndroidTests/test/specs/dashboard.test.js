const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/login.page.js");


describe('clicking on bottom tab buttons', ()=>{

    it.only('buttons', ()=>{
        await (await Dashboard.homeBtn()).click();
        await driver.pause(10000);
        await (await Dashboard.exploreBtn()).click();
        await driver.pause(10000);
        await (await Dashboard.goBackFromSearchBtn()).click();
        await driver.pause(10000);
        await (await Dashboard.activityBtn()).click();
        await driver.pause(10000);
        await (await Dashboard.profileBtn()).click();
        await driver.pause(10000);
    });


})
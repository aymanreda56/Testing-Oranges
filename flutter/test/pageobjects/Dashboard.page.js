class Dashboard{

    async dashboardTabBtn() {
        const selector = await 'new UiSelector().description("home Tab 1 of 4")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async exploreTabBtn() {
        const selector = await 'new UiSelector().description("search Tab 2 of 4")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async notificationsTabBtn() {
        const selector = await 'new UiSelector().description("chat Tab 3 of 4")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async profileButton() {
        const selector = await 'new UiSelector().description("person Tab 4 of 4")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }



    get shareBtn() {return $('//android.widget.Button[@index=2]')};
    get commentBtn() {return $('//android.widget.Button[@index=3]')};
    get likeBtn() {return $('//android.widget.Button[@index=5]')};
    get trashBtn() {return $('//android.widget.Button[@index=6]')};
    get editBtn() {return $('//android.widget.Button[@index=7]')};
    get threeBtn() {return $('//android.widget.Button[@index=0]')};
    get notesBtn() {return $('//android.widget.Button[@index=1]')};
    get reportBtn() {return $('~Report')};
    get commentField() {return $('//android.widget.EditText[@text="Say something nice"]')};
    get replyBtn() {return $('~Reply')};
    get backBtn() {return $('~Back')};

    async profileButton() {
        const selector = await 'new UiSelector().description("person Tab 4 of 4")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }




}





module.exports = new Dashboard ();
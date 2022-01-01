class Dashboard{

    get dashboardTabBtn () {return $('~DASHBOARD')}; //click and test refresh
    get exploreTabBtn () {return $('~EXPLORE')}; //click
    get notificationsTabBtn () {return $('//android.view.ViewGroup[@resource-id="com.tumblr:id/notification_button_wrapper"]')}; //click
    get accountTabBtn () {return $('~ACCOUNT')}; //click

    async homeButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_home")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async searchButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_search")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async activityButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_activity")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async profileButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_profile")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }




}





module.exports = new Dashboard ();
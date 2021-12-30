class Dashboard{

    get dashboardTabBtn () {return $('~DASHBOARD')}; //click and test refresh
    get exploreTabBtn () {return $('~EXPLORE')}; //click
    get notificationsTabBtn () {return $('//android.view.ViewGroup[@resource-id="com.tumblr:id/notification_button_wrapper"]')}; //click
    get accountTabBtn () {return $('~ACCOUNT')}; //click
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    async homeBtn (){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_home")';
        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async exploreBtn (){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_search")';
        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async goBackFromSearchBtn (){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/search_page_back_button")';
        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }


    async activityBtn (){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_activity")';
        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async profileBtn (){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/navigation_profile")';
        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    
    async writePostBtn (){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/write_post_button_home_fragment")';
        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }



    

}





module.exports = new Dashboard ();
class SearchPage  {
    
    async backButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/search_page_back_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async searchBox() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/search_page_search_field")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async searchResult(){
        /*const selector = await 'new UiSelector().resourceId("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });*/
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[5]')
    }
    
    async commentButton(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/comment_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async addComment(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/notes_add_comment")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async replyButton(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/reply_button")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    
    async commentText(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/comment_text")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

}

module.exports = new SearchPage();
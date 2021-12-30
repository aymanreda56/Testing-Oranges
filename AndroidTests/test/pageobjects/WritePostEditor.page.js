class WritePostEditor{


    async titleBtn(){
        const selector = await 'new UiSelector().resourceId("editor")';
        const POM = (await $(`android=${selector}`));
        await POM.waitForDisplayed({
            timeout: 30000
        });
        return POM;
    }
    async postList(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/list")';
        const POM = (await $(`android=${selector}`));
        await POM.waitForDisplayed({
            timeout: 30000
        });
        return POM;
    }
    async postList(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/text_size_font")';
        const POM = (await $(`android=${selector}`));
        await POM.waitForDisplayed({
            timeout: 30000
        });
        return POM;
    }





    async postBtn(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/publish_post")';
        const POM = (await $(`android=${selector}`));
        await POM.waitForDisplayed({
            timeout: 30000
        });
        return POM;
    }


}






module.exports = new WritePostEditor();
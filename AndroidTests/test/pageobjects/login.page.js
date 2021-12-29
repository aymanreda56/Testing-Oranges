class LoginPage  {
    
    async loginButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async loginWithEmailButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_with_email_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async emailTextBox() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_with_email_email_field")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    
    async continueButton(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_with_email_login_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async passwordTextBox(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_with_email_password_field")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    /*async login (username, password) {
        await this.emailTextBox.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    
}

module.exports = new LoginPage();
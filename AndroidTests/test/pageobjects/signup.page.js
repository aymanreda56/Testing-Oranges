class SignupPage  {
    
    async signupButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/signup_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async signupWithEmailButton() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/signup_with_email_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async ageTextBox() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/full_signup_with_email_age_field")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async emailTextBox() {
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/full_signup_with_email_email_field")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    
    async doneButton(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/full_signup_with_email_done_button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async passwordTextBox(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/full_signup_with_email_password_field")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async nameTextBox(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/full_signup_with_email_name_field")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }

    async errorInEmail(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_with_email_invalid_email_message")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async errorField(){
        const selector = await 'new UiSelector().resourceId("com.example.tumblr4u:id/login_with_email_wrong_message")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    }
    async signPage(){
        /*const selector = await 'new UiSelector().resourceId("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]")';

        const POM = (await $(`android=${selector}`)); 

        await POM.waitForDisplayed({
            timeout: 300000
        });*/
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]')
    }

    /*async login (username, password) {
        await this.emailTextBox.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    
}

module.exports = new SignupPage();
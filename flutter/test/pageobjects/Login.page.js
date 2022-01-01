class Login {
    


    get LoginBtn() {return $('~Log in')};
    get SignupBtn() {return $('~Sign up')};
    get LoginEmail() {return $('~Login with Email')};
    get LoginGoogle() {return $('~Login with Google')};


    async emailLoginField() {
        const selector = await 'new UiSelector().className("android.widget.EditText")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    };
    

    //get emailLoginField() {return $('//android.widget.EditText[@text="Email"]')};

    get emailAssertText() {return $('~Email required')};

    async LoginContinueBtn() {
        const selector = await 'new UiSelector().className("android.widget.Button")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    };

    async enterPasswordBtn() {
        const selector = await 'new UiSelector().description("Enter password")';

        const POM = (await $(`android=${selector}`));

        await POM.waitForDisplayed({
            timeout: 300000
        });
        return POM
    };

  //  get enterPasswordBtn() {return $('~Enter password')};
    get PasswordField() {return $('//android.widget.EditText[@index=3]')};
    get LogInFinalBtn() {return $('~Log in')};


    get SignupEmail() {return $('~Sign up with Email')};
    get SignupGoogle() {return $('~Sign up with Google')};
    get backBtn() {return $('~Back')};
    get AgeField() {return $('//android.widget.EditText[@text="How old are you?"]')};
    get nextBtn() {return $('~Next')};




}



module.exports = new Login();
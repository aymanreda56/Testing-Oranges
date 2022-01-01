class Login {
    


    get LoginBtn() {return $('~Log in')};
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


    get backBtn() {return $('~Back')};
    get nextBtn() {return $('~Next')};


    //////////////////////////////////////////////////////////// SIGN UP //////////////////////////////////////////////////////////////////////

    get SignupBtn() {return $('~Sign up')};
    get SignupEmailBtn() {return $('~Sign up with Email')};
    get SignupGoogleBtn() {return $('~Sign up with Google')};
    get AgeField() {return $('//android.widget.EditText[@index=2]')};
    get ageasserter() {return $('//android.view.View[@index=0]')};
    get interestsCards_1() {return $('//android.view.View[@index=1]]')};
    get interestsCards_2() {return $('//android.view.View[@index=2]]')};
    get interestsCards_3() {return $('//android.view.View[@index=3]]')};
    get interestsCards_4() {return $('//android.view.View[@index=4]]')};
    get interestsCards_5() {return $('//android.view.View[@index=5]]')};
    get pickBtn() {return $('//android.widget.Button[@index=0]')};



}



module.exports = new Login();
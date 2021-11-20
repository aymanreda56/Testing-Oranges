class welcome{

    get backgroundImage () {return $('com.tumblr:id/post_image')}; //compare element id after waiting and scrolling
    get paragraph () {return $('//android.widget.TextView[@index="2"]')}; //loads with correct text
    get tumblrLogo () {return $('~Tumblr-logo')}; //loads with correct text
    get scrollIndicator () {return $('com.tumblr:id/indicator')}; //compare element id after waiting and scrolling

    get logInBtn() {return $('//android.widget.Button[@resource-id="com.tumblr:id/login_button"')};
    get signUpBtn () {return $('//android.widget.Button[@resource-id="com.tumblr:id/sign_up_button"')};

    get logInWithEmailBtn() {return $('//android.widget.Button[@resource-id="com.tumblr:id/email_auth_button"')};
    get logInWithGoogle() {return $('//android.widget.Button[@resource-id="com.tumblr:id/google_auth_button"')};
    
    get logInEmailField() {return $('//android.widget.EditText[@resource-id="com.tumblr:id/email"]')};
    get logInContinueBtn() {return $('//android.widget.Button[@resource-id="com.tumblr:id/primary_button"')};
    get continueWithPasswordBtn() {return $('//android.widget.TextView[@resource-id="com.tumblr:id/use_password_button"]')};
    get logInPasswordField() {return $('//android.widget.TextView[@resource-id="com.tumblr:id/textinput_placeholder"]')};
    get finalLogInBtn() {return $('//android.widget.Button[@resource-id="com.tumblr:id/action_button"')};
}




module.exports = new welcome();
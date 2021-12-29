class LoginPage  {
    
    get loginButton() {
        return $('com.tumblr:id/login_button');
    }

    get loginWithEmailButton() {
        return $('com.tumblr:id/email_auth_button');
    }

    get emailTextBox() {
        return $('com.tumblr:id/email');
    }
    
    get continueButton(){
        return $('~primary_button'); 
    }

    get clearButton(){
        return $('~clear_button');
    }

    get enterPassword(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.TextView');
    }

    get passwordTextBox(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[2]');
    }

    get loginLastStep(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button');
    }

    
    /*async login (username, password) {
        await this.emailTextBox.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    
}

module.exports = new LoginPage();
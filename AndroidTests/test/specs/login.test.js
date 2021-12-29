const { assert, expect } = require("chai")

const Dashboard = require("../pageobjects/Dashboard.page.js")

const LoginPOM = require ("../pageobjects/login.page.js");



describe('ًlogin tests', ()=>{
    const logInBtn = await LoginPOM.loginButton();
    const logInEmail = await LoginPOM.loginWithEmailButton();
    const emailField = await LoginPOM.emailTextBox();
    const passwordField = await LoginPOM.passwordTextBox();
    const loginbtn = await LoginPOM.continueButton().getAttribute("enabled");
    it.only('no email no password', ()=>{
        driver.setTimeouts(5000)
        logInBtn.click();
        logInEmail.click();
        await emailField.addValue("");
        await passwordField.addValue(""); 
        expect(loginbtn).toBe("false"); 
    })

})


/*module.exports.EnterEmailAndPassword = async (inputEmail = '', inputPassword = '') => {
    // inputEmail = inputEmail === ''? 'email':inputEmail;
    // inputPassword = inputPassword === ''? 'password':inputPassword;
    const EmailField = await LoginPOM.emailFieldPOM();
    await stateAssertion(EmailField);
    await EmailField.addValue(inputEmail);
    const email = await EmailField.getText();
    expect(email).toBe(inputEmail === '' ? 'email' : inputEmail);

    const PasswordField = await LoginPOM.passwordFieldPOM();
    await stateAssertion(PasswordField);
    await PasswordField.addValue(inputPassword);
    const password = await PasswordField.getText();
    expect(password).toBe(inputPassword === '' ? 'password' : CreatePasswordDots(password));
    expect(password).not.toBe(inputPassword);
}*/
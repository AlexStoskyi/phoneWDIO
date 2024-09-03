class LoginPage {

    public get loginButton() {
        return $('//android.widget.TextView[@text="󰍂"]');
    }

    public get singUpButton() {
        return $('//android.widget.TextView[@text="Sign up"]');
    }

    public get emailInput() {
        return $('//android.widget.EditText[@content-desc="input-email"]')
    }
    public get passwordInput() {
        return $('//android.widget.EditText[@content-desc="input-password"]')
    }
    public get confirmPasswordInput() {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]')
    }
    public get confirmSingUpButton() {
        return $('//android.widget.TextView[@text="SIGN UP"]')
    }
    public get emailErrorMessage() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]')
    }
    public get loginEmailInput() {
        return $('//android.widget.EditText[@content-desc="input-email"]')
    }
    public get loginPasswordInput() {
        return $('//android.widget.EditText[@content-desc="input-password"]')
    }
    public get confirmLoginButton() {
        return $('//android.widget.TextView[@text="LOGIN"]')
    }
    public get singedUpMess() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }
    public get loginMess() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }

    public async logIn(email: string, password: string) {
        await this.loginEmailInput.setValue(email);
        await this.loginPasswordInput.setValue(password);
        await this.confirmLoginButton.click();
    }

    public async singUp(email: string, password: string, confirm: string) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(confirm);
        await this.confirmSingUpButton.click();
    }

};

export default new LoginPage();
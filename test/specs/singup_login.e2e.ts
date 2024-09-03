import Navbar from '../pages/nav_bar.page';
import LoginPage from '../pages/login.page';
import Fake from '../Faker/fake_data';
import invalidData = require('../fixtures/invalid_data.json');
import validData = require('../fixtures/valid_data.json');
import errorMessage = require('../fixtures/error_mess.json');

describe("SingUp and Login", () => {

  beforeEach(() => {
    Navbar.homeButton.click();
    browser.pause(3000);
  });

  it("TC_1 Sing up with valid data", async () => {
    await Navbar.loginButton.click();
    await LoginPage.singUpButton.click();
    const fakePassword = Fake.password
    await LoginPage.singUp(Fake.userEmail, fakePassword, fakePassword);
    const singedUpMessage = await LoginPage.singedUpMess.getText();
    await browser.pause(1000);
    await expect(singedUpMessage.trim()).toEqual(validData.singedUpMessage);

  });

  it("TC_2 Sing up with empty email input", async () => {
    await Navbar.loginButton.click();
    await LoginPage.singUpButton.click();
    const fakePassword = Fake.password
    await LoginPage.singUp(invalidData.empty, fakePassword, fakePassword)
    const emailErrorMessageText = await LoginPage.emailErrorMessage.getText();
    await browser.pause(1000);
    await expect(emailErrorMessageText.trim()).toEqual(errorMessage.errorEmail)
  });

  it("TC_3 Login with valid data", async () => {
    await Navbar.loginButton.click();
    await browser.pause(2000);
    await LoginPage.logIn(validData.user_email, validData.user_password);
    const loggedInMessage = await LoginPage.loginMess.getText();
    await browser.pause(1000);
    await expect(loggedInMessage.trim()).toEqual(validData.loginMessage)
  });

});
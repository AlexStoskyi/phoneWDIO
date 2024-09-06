import navbar from '../pages/nav_bar.page';
import loginPage from '../pages/login.page';
import fake from '../helper/fake_data';
import invalidData from '../fixtures/invalid_data.json';
import errorMessage from '../fixtures/error_mess.json';

describe("SingUp and Login", () => {

  beforeEach(() => {
    navbar.homeButton.click();
    browser.pause(3000);
  });


  it("TC_2 Sing up with empty email input", async () => {
    await navbar.loginButton.click();
    await loginPage.singUpButton.click();
    const fakePassword = fake.password
    await loginPage.singUp(invalidData.empty, fakePassword, fakePassword)
    const emailErrorMessageText = await loginPage.emailErrorMessage.getText();
    await browser.pause(1000);
    await expect(emailErrorMessageText.trim()).toEqual(errorMessage.errorEmail)
  });

});
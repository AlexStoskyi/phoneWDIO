import navbar from '../pages/nav_bar.page';
import loginPage from '../pages/login.page';
import validData from '../fixtures/valid_data.json';


describe("SingUp and Login", () => {

  beforeEach(() => {
    navbar.homeButton.click();
    browser.pause(3000);
  });


  it("TC_3 Login with valid data", async () => {
    await navbar.loginButton.click();
    await browser.pause(2000);
    await loginPage.logIn(validData.user_email, validData.user_password);
    const loggedInMessage = await loginPage.loginMess.getText();
    await browser.pause(1000);
    await expect(loggedInMessage.trim()).toEqual(validData.loginMessage)
  });

});
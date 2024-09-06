import navbar from '../pages/nav_bar.page';
import loginPage from '../pages/login.page';
import fake from '../helper/fake_data';
import validData from '../fixtures/valid_data.json';


describe("SingUp and Login", () => {

  beforeEach(() => {
    navbar.homeButton.click();
    browser.pause(3000);
  });

  it("TC_1 Sing up with valid data", async () => {
    await navbar.loginButton.click();
    await loginPage.singUpButton.click();
    const fakePassword = fake.password
    await loginPage.singUp(fake.userEmail, fakePassword, fakePassword);
    const singedUpMessage = await loginPage.singedUpMess.getText();
    await browser.pause(1000);
    await expect(singedUpMessage.trim()).toEqual(validData.singedUpMessage);

  });

});
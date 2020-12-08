const { By } = require("selenium-webdriver");

class LoginPage {
  get emailAddressInput() {
    return By.id("email_create");
  }
  get createButton() {
    return By.id("SubmitCreate");
  }

  /**
   * create account
   * @param {*} driver
   * @param {*} email
   */
  async enterEmailAndClickCreate(driver, email) {
    await driver.findElement(this.emailAddressInput).sendKeys(email);
    await driver.findElement(this.createButton).click();
  }
}
export default new LoginPage();

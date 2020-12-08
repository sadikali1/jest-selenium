const { By } = require("selenium-webdriver");

class DashboardPage {
  get userProfileIcon() {
    return By.css('[class="account"] span');
  }

  /**
   * Get User name from profile icon
   * @param {*} driver
   * @param {*} email
   */
  async getUserName(driver) {
    return await driver.findElement(this.userProfileIcon).getText();
  }
}
export default new DashboardPage();

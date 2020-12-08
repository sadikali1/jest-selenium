const { By } = require("selenium-webdriver");
const { until } = require("selenium-webdriver");

class RegistrationPage  {

  get mrRadioButton() {  return By.id("id_gender1");  }
  get firstNameInput() { return By.id("customer_firstname"); }
  get lastNameInput() { return By.id("customer_lastname"); }
  get passwordInput() { return By.id("passwd"); }
  get address1Input() { return By.id("address1"); }
  get cityInput() { return By.id("city"); }
  get postcodeInput() { return By.id("postcode"); }
  get stateDropDown() { return By.id("id_state"); }
  get countryDropDown() { return By.id("id_country"); }
  get mobileInput() { return By.id("phone_mobile"); }
  get phoneInput() { return By.id("phone"); }
  get submitAccountButton() { return By.id("submitAccount"); }

  async enterUserInfo(driver, firstName, lastName, password) {
    await driver.wait(until.elementLocated(this.mrRadioButton), 20000);
    await driver.findElement(this.mrRadioButton).click();
    await driver.findElement(this.firstNameInput).sendKeys(firstName);
    await driver.findElement(this.lastNameInput).sendKeys(lastName);
    await driver.findElement(this.passwordInput).sendKeys(password);
  }

  async enterAddress(driver, address, city, postcode, country, state, phoneNumber){
    
    await driver.findElement(this.address1Input).sendKeys(address);
    await driver.findElement(this.cityInput).sendKeys(city);
    await driver.findElement(this.postcodeInput).sendKeys(postcode);
    await driver.findElement(this.stateDropDown).click();
    await driver.findElement(By.xpath('//*[@id="id_state"]/option[text()="'+state+'"]')).click();
    await driver.findElement(this.countryDropDown).click();
    await driver.findElement(By.xpath('//*[@name="id_country"]/option[text()="'+country+'"]')).click();
    await driver.findElement(this.mobileInput).sendKeys(phoneNumber);
    await driver.findElement(this.phoneInput).sendKeys(phoneNumber);
  }

  async clickOnSubmitAccount(driver){
    await driver.findElement(this.submitAccountButton).click();
  }

}
export default new RegistrationPage();

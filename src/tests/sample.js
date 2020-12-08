const chromeDriver = require("../drivers/chrome");
import LoginPage from "../pages/login-page";
import registrationPage from "../pages/registration-page";
import DashboardPage from "../pages/dashboard-page";

describe("Aura Code Challenge - Create User Account Tests", () => {
  let driver;

  beforeAll(async () => {
    driver = chromeDriver();
    await driver.get(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("it loads authentication page", async () => {
    const title = await driver.getTitle();
    expect(title).toBe("Login - My Store");
    const email = "test" + Date.now() + "@gmail.com";
    const fName = "Fname";
    const lname = "Lname";

    await LoginPage.enterEmailAndClickCreate(driver, email);

    await registrationPage.enterUserInfo(driver, fName, lname, "1234567");
    await registrationPage.enterAddress(
      driver,
      "795 E DRAGRAM TUCSON AZ",
      "Cal",
      "90010",
      "United States",
      "Alabama",
      "9000011123"
    );
    await registrationPage.clickOnSubmitAccount(driver);

    const name = await DashboardPage.getUserName(driver);
    console.log(name);
    expect(name).toBe(fName + " " + lname);
  });
});

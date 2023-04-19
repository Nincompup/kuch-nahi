const { Builder, By,Keys, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");
require("dotenv").config();

async function sleep(timeInS) {
	await new Promise((resolve) => setTimeout(resolve, timeInS * 1000))
}
let driver = new Builder().forBrowser("chrome").build();

async function signIn(site){
    await driver.get(site);
    await driver.findElement(By.id('nav-link-accountList')).click();
    // await button.click();
    await sleep(2);

    await driver.findElement(By.xpath("//input[@name = 'email']")).sendKeys('919598409260');
    await driver.findElement(By.id('continue')).click();
    await sleep(2);
    await driver.findElement(By.xpath("//input[@name = 'password']")).sendKeys(process.env.Pass);
    await driver.findElement(By.id('signInSubmit')).click();

}

async function placeOrder() {
    element = await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('iphone 12');
    await driver.findElement(By.id('nav-search-submit-button')).click();
    // element.sendKeys()

}


const WebPage = async (site) => {
    await signIn(site);
    await sleep(3);
    await placeOrder();
    await driver.close();
    await driver.quit();
    
}

// WebPage();

module.exports = WebPage;
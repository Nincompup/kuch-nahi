// const {By,Key,Builder} = require("selenium-webdriver");
const { Builder, By, Key,Keys,until } = require('selenium-webdriver');
const BasePage = require("./WebPage")
require("chromedriver");

async function sleep(timeInS) {
	await new Promise((resolve) => setTimeout(resolve, timeInS * 1000))
}

// site = "http://localhost:3000";
let driver = new Builder().forBrowser("chrome").build();

scrollToBottom = async function () {
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
  };

async function follow(){
    button = await driver.findElement(By.name("followbutton"))
    // button = await driver.findElements(By.name("likebutton"))
    // console.log(elements);
    await button.click();
    // await sleep(2)
}

async function runfun() {
  //   for (let i = 3; i<10; i++) {
	// 	if (i % 10 === 9) {
	// 		await driver.get(site)
	// 		await sleep(8)
	// 		scrollToBottom();
	// 		await sleep(2)
	// 	}
	// 	try {
  //           		await follow();
  //           		await new Promise((resolve) => setTimeout(resolve, 1000))
	//     		scrollToBottom();	
	//        		await sleep(3)
	// 	} catch(e) {
	// 	 	console.error(e)
	// 	}
	// }
  //       await new Promise((resolve) => setTimeout(resolve, 5000))

}


async function example() {

    await driver.get("https://facebook.com");
    await driver.findElement(By.id("email")).sendKeys("fsdfsdf");
    await driver.findElement(By.id("pass")).sendKeys("sdfsf");
    button = await driver.findElement(By.xpath("//button[text()='Log in']"))
    await button.click();
    await sleep(2)
    await driver.get("https://www.facebook.com/friends");
    await sleep(2)

    elements = await driver.findElements(By.xpath("//span[text()='Confirm']"));
    i=0;
    for (const e of elements) {
      i++;
      e.click();
      await sleep(2);
      if(i==2 ) break;
    //   // button = await post.findElement(By.className('container')).findElement(By.className('info')).findElement(By.className('item')).findElement(By.name('likebutton'))
      // await button.click();
    //   // await driver.executeScript("window.scrollTo(0, document.getElementByClassName('container').style.scrollHeight)");
      // await sleep(2)
    }
    driver.close();
    await driver.quit();
}


example();
// site = 'https://www.amazon.in';
// BasePage(site);
// driver.close();
// driver.quit();


const {Builder, By, Key, util, Browser} = require('selenium-webdriver');
const player = require('sound-play');
require('chromedriver');



let chrome = require("selenium-webdriver/chrome");

//Set proxy to another IP Location;
let ipAddress = '';
// let chromeHeadless = new chrome.Options().headless().windowSize();



async function example () {
    // let audio = new Audio('/utils/audio/ps5-startup.mp3');
    let driver = await new Builder()
    .setChromeOptions()
    .forBrowser(Browser.CHROME)
    .build();
    await driver.get("https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149");

    //await driver.findElement(By.name("q")).sendKeys("Selenium Test", Key.RETURN);
    // audio.play();
    driver.switchTo().alert().then(() => {
        console.log("alert detected");
      },
      () => {
        player.play("./utils/audio/ps5-startup.mp3")
        console.log("Sound played!");

      })
    // if the title of the sold button != sold out. Pop up a window and play a sound file
};

example();

// Testing this out
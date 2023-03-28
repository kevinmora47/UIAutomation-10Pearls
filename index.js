// app.js
import { Builder, By } from 'selenium-webdriver';
import 'chromedriver';

// Create driver instance
let driver = await new Builder().forBrowser('chrome').build();

// Navigate to website
await driver.get('https://www.tutorialspoint.com/html/html_iframes.htm#');

// Iframe element
const iframeElement = await driver.findElement(
  By.xpath('//*[@id="mainContent"]/iframe')
);

// Scroll to the element
await driver.executeScript('arguments[0].scrollIntoView();', iframeElement);

//Check if cookies policy is showing
const cookiesPolicyBanner = await driver.findElement(By.id('privacy-banner'));

if (cookiesPolicyBanner.isDisplayed()) {
  const cookiesPolicyBannerAgreeButton = await driver.findElement(
    By.id('//*[@id="privacy-banner"]')
  );
  await cookiesPolicyBannerAgreeButton.click();
} else {
  console.log('Cookies banner is not showing');
}
driver.sleep(1000);
// driver.quit();

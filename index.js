import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';

(async () => {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    // Navigate to the initial URL
    await driver.get('https://www.tutorialspoint.com/html/html_iframes.htm');

    // Locate the iframe element
    const iframeElement = await driver.findElement(
      By.xpath('//*[@id="mainContent"]/iframe')
    );

    // Scroll to the iframe element
    await driver.executeScript('arguments[0].scrollIntoView();', iframeElement);

    await driver.sleep(3000);

    const aboutUsLink = await driver.findElement(By.linkText('About us'));

    // Scroll the "About us" link into view
    await driver.executeScript('arguments[0].scrollIntoView();', aboutUsLink);

    // Interact with the link and show it.
    const aboutUsLinkURL = aboutUsLink.getAttribute('href');
    console.log(`About us URL, new page link returned:
${await aboutUsLinkURL}`);
    await driver.sleep(3000);

    // Get all the URLS from site.
    const anchorElements = await driver.findElements(By.tagName('a'));

    // Retrieve the href attribute of each anchor element and filter out empty or undefined values
    const urls = await Promise.all(
      anchorElements.map(async (element) => {
        const href = await element.getAttribute('href');
        return href ? href : null;
      })
    ).then((hrefs) => hrefs.filter((href) => href !== null));

    // Log the list of URLs
    console.log('All URLs on the page:');
    console.log(urls);

    // Locate all anchor elements with the "btn" class on the page
    const buttonLikeElements = await driver.findElements(By.css('.btn'));

    // Retrieve the text content of each button-like element and filter out empty or undefined values
    const buttonTexts = await Promise.all(
      buttonLikeElements.map(async (element) => {
        const text = await element.getText();
        return text ? text : null;
      })
    ).then((texts) => texts.filter((text) => text !== null));

    // Log the list of button-like elements' texts
    console.log('All Buttons-like elements on the page:');
    console.log(buttonTexts);

    const inputElements = await driver.findElements(By.tagName('input'));

    // Retrieve the name attribute of each input element and filter out empty or undefined values
    const inputNames = await Promise.all(
      inputElements.map(async (element) => {
        const name = await element.getAttribute('placeholder');
        return name ? name : null;
      })
    ).then((names) => names.filter((name) => name !== null));

    // Log the list of input names
    console.log('All Text inputs fields on the page:');
    console.log(inputNames);

    // Navigate to the login page
    await driver.get('https://www.tutorialspoint.com/market/login.asp');

    //Creates an account and logs into the site
    const usernameInput = await driver.findElement(By.id('user_email'));
    await usernameInput.sendKeys('kevinmora47@gmail.com');

    // Locate the password input field and enter your password
    const passwordInput = await driver.findElement(By.id('user_password'));
    await passwordInput.sendKeys('10pearls.com');

    // Store username and password
    const username = await usernameInput.getAttribute('value');
    const password = await passwordInput.getAttribute('value');

    // Locate the login button and click it
    const loginButton = await driver.findElement(By.id('user_login'));
    await loginButton.click();

    //Write all the variables into a external file.
    fs.writeFile(
      'output.txt',
      `About us link URL: ${await aboutUsLinkURL}\n\n` +
        `URLs on the page: ${JSON.stringify(urls)}\n\n` +
        `Button-like elements on the page: ${JSON.stringify(buttonTexts)}\n\n` +
        `Text input fields on the page: ${JSON.stringify(inputNames)}\n\n` +
        `Username input field: ${JSON.stringify(username)}\n\n` +
        `Password input field: ${JSON.stringify(password)}\n\n`,
      (err) => {
        if (err) throw err;
        console.log('Data written to file');
      }
    );
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setTimeout(() => driver.quit(), 5000);
  }
})();

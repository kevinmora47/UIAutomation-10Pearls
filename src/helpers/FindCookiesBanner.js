export class FindCookiesBanner {
  async acceptCookieBannersById(id) {
    try {
      const cookieBanners = await driver.wait(
        until.elementsLocated(By.id(id)),
        10000
      );
      console.log(cookieBanners.get);

      for (const cookieBanner of cookieBanners) {
        const acceptButton = await cookieBanner.findElement(
          By.id('banner-accept')
        );
        await acceptButton.click();
        // Optionally, add a delay between clicks if needed
        await driver.sleep(500);
      }
    } catch (error) {
      console.warn(
        `Warning: Could not find or accept cookie banners with ID "${id}"`
      );
    }
  }
}

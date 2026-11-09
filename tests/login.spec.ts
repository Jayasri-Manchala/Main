import{test, expect}from"@playwright/test";
test("Click on Login to Demo Web Shop",async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page).toHaveTitle("Demo Web Shop");
  await page.locator('.ico-login').click();
});
    //await page.locator('//*[@class="ico-login"]').click();
    //await page.locator('[class="ico-login"]').click();
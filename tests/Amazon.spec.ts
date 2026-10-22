import { test, expect } from '@playwright/test';

test('valid login in amazon', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
   // await page.locator("(//div[@class='nav-div'])[4]/following::div[@class='nav-div'][1]").click();
  // await page.locator("//a[text()='Amazon Pay']/following::a[1]").click();
 //  await page.locator("///a[text()='Mobiles']/preceding::a[1]").click();
  // await page.locator("(//span[text()='OnePlus'])[2]/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::input[@name='submit.addToCart']").click();
   //  await page.locator("//span[text()='256 GB']/preceding::input[1][@type='checkbox']").click();


});

test('valid login  google', async ({ page }) => {

    await page.goto('https://www.google.com/');
   // await page.locator("(//div[@class='nav-div'])[4]/following::div[@class='nav-div'][1]").click();
  // await page.locator("//a[text()='Amazon Pay']/following::a[1]").click();
 //  await page.locator("///a[text()='Mobiles']/preceding::a[1]").click();
  // await page.locator("(//span[text()='OnePlus'])[2]/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::input[@name='submit.addToCart']").click();
   //  await page.locator("//span[text()='256 GB']/preceding::input[1][@type='checkbox']").click();


});

test('valid login  facebook', async ({ page }) => {

    await page.goto('https://www.facebook.com/');
   // await page.locator("(//div[@class='nav-div'])[4]/following::div[@class='nav-div'][1]").click();
  // await page.locator("//a[text()='Amazon Pay']/following::a[1]").click();
 //  await page.locator("///a[text()='Mobiles']/preceding::a[1]").click();
  // await page.locator("(//span[text()='OnePlus'])[2]/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::input[@name='submit.addToCart']").click();
   //  await page.locator("//span[text()='256 GB']/preceding::input[1][@type='checkbox']").click();


});

test('valid login  flipkart', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
   // await page.locator("(//div[@class='nav-div'])[4]/following::div[@class='nav-div'][1]").click();
  // await page.locator("//a[text()='Amazon Pay']/following::a[1]").click();
 //  await page.locator("///a[text()='Mobiles']/preceding::a[1]").click();
  // await page.locator("(//span[text()='OnePlus'])[2]/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::input[@name='submit.addToCart']").click();
   //  await page.locator("//span[text()='256 GB']/preceding::input[1][@type='checkbox']").click();


});


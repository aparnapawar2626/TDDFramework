import { test, expect } from '@playwright/test';

test('visual_user', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.locator("//input[@placeholder='Username']").fill("visual_user");
await page.waitForTimeout(2000);
await page.locator("//input[@placeholder='Password' and @id='password']").fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator("//input[contains(@id,'login-button') and (@type='submit')]").click();
await page.waitForTimeout(2000);
await page.locator("//a[@id='item_5_title_link']").click()
await page.waitForTimeout(2000);
await page.locator("//button[starts-with(@id,'add-to-cart')]").click();
await page.waitForTimeout(2000);
await page.locator("//span[contains(@class,'shopping_cart_badge')]").click();
await page.waitForTimeout(2000);
await page.locator("//button[starts-with(@name,'checkout')]").click();
await page.waitForTimeout(2000);
await page.locator("//input[starts-with(@placeholder,'First Name')]").fill("krishiv");
await page.waitForTimeout(2000);
await page.locator("//input[starts-with(@placeholder,'Last Name')]").fill("kanase");
await page.waitForTimeout(2000);
await page.locator("//input[@placeholder='Zip/Postal Code']").fill("176559");
await page.waitForTimeout(2000);
await page.locator("//input[@type='submit']").click();
await page.waitForTimeout(2000);
await page.locator("#finish").click();
await page.waitForTimeout(2000);

});
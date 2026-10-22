import { test, expect } from '@playwright/test';

test('valid login in saucelabs', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.waitForTimeout(2000);
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");

    await page.waitForTimeout(2000);
    await page.locator("#login-button").click();

    await page.waitForTimeout(2000);
    await page.locator("//div[contains(text(),'Sauce Labs Backpack')]").click();

    await page.waitForTimeout(2000);
    await page.locator("#add-to-cart").click();

    await page.waitForTimeout(2000);
    await page.locator("//div[@class='shopping_cart_container']").click();
    await page.waitForTimeout(2000);
     
    await page.locator("//button[@name='checkout']").click();
    await page.waitForTimeout(2000);
    
    await page.locator("//input[@id='first-name']").fill("John");
    await page.waitForTimeout(2000);

    await page.locator("//input[@name='lastName']").fill("Sinha");
    await page.waitForTimeout(2000);

    await page.locator("//input[contains(@id,'postal-code')]").fill("123456");
    await page.waitForTimeout(2000);

    await page.locator("//input[contains(@id,'continue')]").click();
    await page.waitForTimeout(2000);

    await page.locator("#finish").click();
    await page.waitForTimeout(2000);

    await page.locator("#generate-pdf-order").click();
    await page.waitForTimeout("2000");
  
});


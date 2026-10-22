import { test, expect } from '@playwright/test';

test('problem_user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);

    await page.locator("//input[@type='text']").fill("problem_user");
    await page.locator("//input[contains(@id,'password')]").fill("secret_sauce");
    await page.waitForTimeout(2000);
    await page.locator("//input[substring(@name,3)='gin-button']").click();
    await page.waitForTimeout(2000);

    await page.locator("//button[contains(@id,'add-to-cart-sauce-labs-backpack')]").click();
    await page.locator("//button[contains(@name,'add-to-cart-sauce-labs-bike-light')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//div[contains(@class,'shopping_cart_container')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[@id='remove-sauce-labs-bike-light']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[@name='continue-shopping']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']").click();
    await page.waitForTimeout(2000);
    await page.locator("//div[contains(@class,'shopping_cart_container')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[@id='checkout']").click();
    await page.waitForTimeout(2000);



  
});

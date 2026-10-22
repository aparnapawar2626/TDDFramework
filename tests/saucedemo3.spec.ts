import { test, expect } from '@playwright/test';

test('performance_glitch_user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);

    await page.locator("//input[@type='text']").fill("performance_glitch_user");
    await page.locator("//input[contains(@id,'password')]").fill("secret_sauce");
    await page.waitForTimeout(2000);
    await page.locator("//input[substring(@name,3)='gin-button']").click();
    await page.waitForTimeout(2000);
    await page.locator("//a[substring(@id,5)='_1_title_link']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[starts-with(@id,'add-to-cart')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[starts-with(@id,'back-to-products')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(@name,'add-to-cart-sauce-labs-fleece-jacket')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//div[@id='shopping_cart_container'and@class='shopping_cart_container']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(@id,'checkout')and(@name='checkout')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//input[contains(@class,'input_error form_input')and(@id='first-name')]").fill("shweta");
    await page.waitForTimeout(2000);
    await page.locator("//input[@class='input_error form_input'and@id='last-name']").fill("Kanase");
    await page.waitForTimeout(2000);
    await page.locator("#postal-code").fill("789101");
    await page.waitForTimeout(2000);
    await page.locator("//input[contains(@type,'submit')and(@id='continue')]").click();
    await page.waitForTimeout(2000);
    await page.locator("#finish").click();
    await page.waitForTimeout(2000);
    


  
});

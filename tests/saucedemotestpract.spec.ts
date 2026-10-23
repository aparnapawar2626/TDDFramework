import { test, expect } from '@playwright/test';

test('valid login in saucelabs_test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page.locator("#root")).toBeVisible();
    await expect(page.getByText('Swag Labs')).toContainText('Swag Labs');

//    await page.waitForTimeout(2000);
    await page.locator("#user-name").click();
    await page.locator("#user-name").fill("standard_user");
    await expect(page.locator("#user-name")).toHaveValue('standard_user');

    await page.locator("#password").click();
    await page.locator("#password").fill("secret_sauce");
    

//    await page.waitForTimeout(2000);
    await expect(page.locator("#login-button")).toBeVisible();
    await page.locator("#login-button").click();
    

//    await page.waitForTimeout(2000);
    await page.locator("//div[contains(text(),'Sauce Labs Backpack')]").click();
    await expect(page.locator("#add-to-cart")).toBeVisible();
    await page.locator("#add-to-cart").click();
  // await page.locator("#add-to-cart").click();
    await expect(page.locator("//div[@class='shopping_cart_container']")).toBeVisible();
    await page.locator("//div[@class='shopping_cart_container']").click();
    
   await page.waitForTimeout(2000);
   await expect(page.locator("#inventory_item_name")).toBeVisible();
   await expect(page.locator("#inventory_item_name")).toContainText('Sauce Labs Backpack');
    await expect(page.locator("#inventory_item_price")).toContainText('$29.99');    
    await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible();
    await expect(page.locator("#checkout")).toBeVisible();    
    await page.locator("//button[@name='checkout']").click();
//    await expect(page.locator("#checkout")).toContainText('Checkout');
   //  await page.waitForTimeout(2000);
    
    await expect(page.locator("#title")).toContainText('Checkout: Your Information');
    await page.locator("//input[@id='first-name']").click();
    await page.locator("//input[@id='first-name']").fill("John");
  //  await page.waitForTimeout(2000);
    await page.locator("//input[@name='lastName']").click();
    await page.locator("//input[@name='lastName']").fill("Sinha");
 //   await page.waitForTimeout(2000);
    await page.locator("//input[contains(@id,'postal-code')]").click();
    await page.locator("//input[contains(@id,'postal-code')]").fill("123456");
 //   await page.waitForTimeout(2000);
    await expect(page.locator("#cancel")).toBeVisible();
    await expect(page.locator("#continue")).toBeVisible();
    await page.locator("//input[contains(@id,'continue')]").click();
//    await page.waitForTimeout(2000);
    await expect(page.locator("#title")).toContainText('Checkout: Overview');
    await expect(page.locator("#inventory_item_name")).toContainText('Sauce Labs Backpack');
    await expect(page.locator("#inventory_item_price")).toContainText('$29.99');    
    await expect(page.locator("//div[text()='Payment Information:']")).toContainText('Payment Information:');
    await expect(page.locator("//div[text()='Shipping Information:']")).toContainText('Shipping Information:');
    await expect(page.locator("//div[text()='Price Total']")).toContainText('Price Total');
    await expect(page.locator("#cancel")).toBeVisible();
    await expect(page.locator("#finish")).toBeVisible();
    await page.locator("#finish").click();
//    await page.waitForTimeout(2000);
    await expect(page.locator("#title")).toContainText('Checkout: Complete!');
    await expect(page.locator("#complete-header")).toContainText('Thank you for your order!');
    await expect(page.locator("#back-to-products")).toBeVisible();
    await expect(page.locator("#generate-pdf-order")).toBeVisible();
 //   await page.locator("#generate-pdf-order").click();
//    await page.waitForTimeout("2000");
  
});


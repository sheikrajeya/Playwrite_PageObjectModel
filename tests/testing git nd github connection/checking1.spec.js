import { test, expect } from '@playwright/test'

test('git github connection checking', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log('Hi')

})
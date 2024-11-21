const {expect} = require ('@playwright/test');

async function testLogin(page) {
    await page.goto('https://www.google.com/search?q=commitquality&oq=commitquality&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU0MTBqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'CommitQuality - Test' }).click();
  await page.getByTestId('navbar-login').click();
  await page.getByTestId('username-textbox').click();
  await page.getByTestId('username-textbox').fill('test');
  await page.getByTestId('username-textbox').press('Tab');
  await page.getByTestId('password-textbox').fill('test');
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('navbar-logout')).toBeVisible();
  await page.getByTestId('navbar-logout').click();
}

module.exports = {
    testLogin,
};

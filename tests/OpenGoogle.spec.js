const { test, expect } = require('@playwright/test');

test('open google page', async ({ page }) => {
  // Navigate to Google (explicit English locale to reduce geo cookie popups)
  await page.goto('https://www.google.com/');

  // Wait for the search input to be visible as a readiness check
  await page.waitForSelector('input[name="q"]', { state: 'visible', timeout: 10000 });

  // Basic assertion: title contains 'Google'
  await expect(page).toHaveTitle(/Google/);
});

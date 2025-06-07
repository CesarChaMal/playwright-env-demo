import { test, expect } from '@playwright/test';
import ENV from '../app-commons/environments/env';

test('Navigate to BASE_URL using proxy and verify title', async ({ page }) => {
  // Log the proxy server being used
  console.log(`Using proxy: ${ENV.PROXY_HOST}`);

  // Navigate to the BASE_URL
  await page.goto(ENV.BASE_URL);

  // Verify the page title
  const title = await page.title();
  console.log(`Page title: ${title}`);
  expect(title).toContain('Google'); // Adjust based on the expected title of the page
});
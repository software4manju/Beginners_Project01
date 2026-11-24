import { test, expect } from '../../fixtures/testFixtures';
import { InventoryPage } from '../../pages/InventoryPage';

test('verify products', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory.html');

  await expect(inventoryPage.title).toBeVisible();
});

test('verify products2', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory.html');

  await expect(inventoryPage.title).toBeVisible();
});

test('verify products3', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory.html');

  await expect(inventoryPage.title).toBeVisible();
});

test('verify products4', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory.html');

  await expect(inventoryPage.title).toBeVisible();
});

test('verify products5', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory.html');

  await expect(inventoryPage.title).toBeVisible();
});

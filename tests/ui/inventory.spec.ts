import { test, expect } from '../../fixtures/testFixtures';

test('authenticated user can see inventory', async ({ page, inventoryPageFixture }) => {
  await page.goto('/inventory.html');

  await expect(inventoryPageFixture.title).toBeVisible();
});

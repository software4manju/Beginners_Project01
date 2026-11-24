
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

type MyFixtures = {
  loginPageFixture: LoginPage;
  inventoryPageFixture: InventoryPage;
};

type workerFixture = {
  workerLabelFixture: string;
};

export const test = base.extend<MyFixtures,workerFixture>({
  inventoryPageFixture: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await page.goto('/inventory.html');
    await use(inventoryPage);
  },

  loginPageFixture: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  workerLabelFixture: [
    async ({}, use, workerInfo) => {

      const label = `worker-${workerInfo.workerIndex}`;

      console.log(`Starting ${label}`);

      await use(label);

      console.log(`Stopping ${label}`);


    },
    { scope: 'worker' }
  ]
});

export { expect };



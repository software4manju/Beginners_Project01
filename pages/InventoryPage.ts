import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Products', { exact: true });
  }
  //  async addProductToCart() { ... }
  //async openCart() { ... }
  //async sortProducts() { ... }
}

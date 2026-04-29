import { BasePage } from './base.page.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('.inventory_list');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  productCardByName(productName) {
    return this.page
      .locator('.inventory_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) })
      .first();
  }

  productNameLink(productName) {
    return this.productCardByName(productName).locator('.inventory_item_name');
  }

  productDescription(productName) {
    return this.productCardByName(productName).locator('.inventory_item_desc');
  }

  productPrice(productName) {
    return this.productCardByName(productName).locator('.inventory_item_price');
  }

  productActionButton(productName) {
    return this.productCardByName(productName).locator('button');
  }

  async openProductDetails(productName) {
    await this.productNameLink(productName).click();
  }

  async getProductSnapshot(productName) {
    return {
      name: (await this.productNameLink(productName).innerText()).trim(),
      description: (await this.productDescription(productName).innerText()).trim(),
      price: (await this.productPrice(productName).innerText()).trim(),
    };
  }
}

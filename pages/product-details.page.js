import { BasePage } from './base.page.js';

export class ProductDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productName = page.locator('.inventory_details_name');
    this.productDescription = page.locator('.inventory_details_desc');
    this.productPrice = page.locator('.inventory_details_price');
    this.actionButton = page.locator('.inventory_details_desc_container button');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addToCart() {
    await this.actionButton.click();
  }

  async removeFromCart() {
    await this.actionButton.click();
  }

  async goBackToProducts() {
    await this.backToProductsButton.click();
  }

  async getProductSnapshot() {
    return {
      name: (await this.productName.innerText()).trim(),
      description: (await this.productDescription.innerText()).trim(),
      price: (await this.productPrice.innerText()).trim(),
    };
  }
}

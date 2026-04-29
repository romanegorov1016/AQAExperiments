import { expect } from '@playwright/test';
import { LoginSteps } from './login.steps.js';
import { InventoryPage } from '../pages/inventory.page.js';
import { ProductDetailsPage } from '../pages/product-details.page.js';

export class ProductDetailsSteps {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').TestInfo} testInfo
   */
  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.loginSteps = new LoginSteps(page, testInfo);
    this.inventoryPage = new InventoryPage(page);
    this.productDetailsPage = new ProductDetailsPage(page);
    this.stepCounter = 0;
  }

  async openInventoryAs(credentials, expectedInventoryPath, expectedInventoryTitle) {
    await this.runStep('open-inventory-as-user', async () => {
      await this.loginSteps.openLoginPage();
      await this.loginSteps.loginAs(credentials);
      await this.loginSteps.verifySuccessfulLogin(expectedInventoryPath);
      await this.loginSteps.verifySuccessfulLoginUi(expectedInventoryTitle);
    });
  }

  async rememberInventoryProductData(productName) {
    return this.runStep('remember-inventory-product-data', async () => {
      await expect(this.inventoryPage.productCardByName(productName)).toBeVisible();
      return this.inventoryPage.getProductSnapshot(productName);
    });
  }

  async openProductDetailsByName(productName) {
    await this.runStep('open-product-details-by-name', async () => {
      await this.inventoryPage.openProductDetails(productName);
    });
  }

  async verifyDetailsPageUrl() {
    await this.runStep('verify-details-page-url', async () => {
      await expect(this.page).toHaveURL((url) => url.pathname === '/inventory-item.html');
    });
  }

  async verifyDetailsDataMatches(expectedProductData) {
    await this.runStep('verify-details-data-matches-inventory', async () => {
      const detailsProductData = await this.productDetailsPage.getProductSnapshot();
      expect(detailsProductData).toEqual(expectedProductData);
    });
  }

  async addProductToCartFromDetails() {
    await this.runStep('add-product-to-cart-from-details', async () => {
      await this.productDetailsPage.addToCart();
    });
  }

  async removeProductFromCartFromDetails() {
    await this.runStep('remove-product-from-cart-from-details', async () => {
      await this.productDetailsPage.removeFromCart();
    });
  }

  async verifyDetailsActionButtonText(expectedText) {
    await this.runStep('verify-details-action-button-text', async () => {
      await expect(this.productDetailsPage.actionButton).toHaveText(expectedText);
    });
  }

  async verifyCartBadgeCount(expectedCount) {
    await this.runStep('verify-cart-badge-count', async () => {
      if (expectedCount === 0) {
        await expect(this.productDetailsPage.cartBadge).toHaveCount(0);
        return;
      }

      await expect(this.productDetailsPage.cartBadge).toHaveText(String(expectedCount));
    });
  }

  async goBackToProducts() {
    await this.runStep('go-back-to-products', async () => {
      await this.productDetailsPage.goBackToProducts();
      await expect(this.inventoryPage.inventoryList).toBeVisible();
    });
  }

  async verifyInventoryActionButtonText(productName, expectedText) {
    await this.runStep('verify-inventory-action-button-text', async () => {
      await expect(this.inventoryPage.productActionButton(productName)).toHaveText(expectedText);
    });
  }

  async runStep(stepName, action) {
    try {
      return await action();
    } finally {
      await this.attachStepScreenshot(stepName);
    }
  }

  async attachStepScreenshot(stepName) {
    this.stepCounter += 1;
    const screenshot = await this.page.screenshot({ fullPage: true });
    const attachmentName = `${String(this.stepCounter).padStart(2, '0')}-${stepName}`;
    await this.testInfo.attach(attachmentName, {
      body: screenshot,
      contentType: 'image/png',
    });
  }
}

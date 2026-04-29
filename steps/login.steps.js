import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { InventoryPage } from '../pages/inventory.page.js';

export class LoginSteps {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').TestInfo} testInfo
   */
  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.stepCounter = 0;
  }

  async openLoginPage() {
    await this.runStep('open-login-page', async () => {
      await this.loginPage.open('/');
    });
  }

  async verifyLoginPageIsLoaded(appData) {
    await this.runStep('verify-login-page-is-loaded', async () => {
      await expect(this.page).toHaveTitle(appData.titleRegex);
      await expect(this.loginPage.usernameInput).toBeVisible();
      await expect(this.loginPage.passwordInput).toBeVisible();
      await expect(this.loginPage.loginButton).toBeVisible();
    });
  }

  async verifyUserHints(usersData) {
    await this.runStep('verify-user-hints', async () => {
      const actualUsernames = await this.loginPage.getAcceptedUsernamesFromHint();
      const expectedUsernames = Object.values(usersData.acceptedUsernames);
      expect(actualUsernames).toEqual(expectedUsernames);

      const actualPassword = await this.loginPage.getSharedPasswordFromHint();
      expect(actualPassword).toBe(usersData.sharedPassword);
    });
  }

  async loginAs(credentials) {
    await this.runStep('submit-login-form', async () => {
      await this.loginPage.login(credentials);
    });
  }

  async verifySuccessfulLogin(expectedInventoryPath) {
    await this.runStep('verify-successful-login-url', async () => {
      await expect(this.page).toHaveURL((url) => url.pathname === expectedInventoryPath);
    });
  }

  async verifySuccessfulLoginUi(expectedTitleText) {
    await this.runStep('verify-successful-login-ui', async () => {
      await expect(this.inventoryPage.pageTitle).toHaveText(expectedTitleText);
      await expect(this.inventoryPage.inventoryList).toBeVisible();
    });
  }

  async verifyFailedLogin(errorTextPart) {
    await this.runStep('verify-failed-login-state', async () => {
      await expect(this.page).toHaveURL((url) => url.pathname === '/');
      await expect(this.loginPage.errorMessage).toBeVisible();
      await expect(this.loginPage.errorMessage).toContainText(errorTextPart);
    });
  }

  async verifyNoSuccessUi(expectedTitleText, expectedInventoryPath) {
    await this.runStep('verify-no-success-ui-after-failed-login', async () => {
      await expect(this.page).not.toHaveURL((url) => url.pathname === expectedInventoryPath);
      await expect(this.inventoryPage.pageTitle.filter({ hasText: expectedTitleText })).toHaveCount(0);
      await expect(this.inventoryPage.inventoryList).toHaveCount(0);
    });
  }

  async reloadPage() {
    await this.runStep('reload-page', async () => {
      await this.page.reload();
    });
  }

  async verifyErrorIsNotVisible() {
    await this.runStep('verify-error-is-not-visible', async () => {
      await expect(this.loginPage.errorMessage).toHaveCount(0);
    });
  }

  async runStep(stepName, action) {
    try {
      await action();
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

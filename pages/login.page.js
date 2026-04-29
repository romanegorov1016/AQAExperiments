import { BasePage } from './base.page.js';
import { uiData } from '../data/ui.data.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.acceptedUsersBlock = page.locator('.login_credentials_wrap-inner');
    this.passwordBlock = page.locator('.login_password');
  }

  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  async login(credentials) {
    await this.fillUsername(credentials.username);
    await this.fillPassword(credentials.password);
    await this.submitLogin();
  }

  async getAcceptedUsernamesFromHint() {
    const rawText = await this.acceptedUsersBlock.innerText();
    const cleanedText = rawText.split('Password for all users:')[0];

    return cleanedText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.toLowerCase().includes('accepted usernames are'));
  }

  async getSharedPasswordFromHint() {
    const rawText = await this.passwordBlock.innerText();
    const lines = rawText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    return lines[lines.length - 1];
  }

  async getErrorMessageText() {
    return (await this.errorMessage.innerText()).trim();
  }
}

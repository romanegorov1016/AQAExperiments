export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async open(path = '/') {
    await this.page.goto(path);
  }
}

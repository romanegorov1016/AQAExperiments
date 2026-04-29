// @ts-check
import { test } from '@playwright/test';
import { testData } from '../data/index.js';
import { ProductDetailsSteps } from '../steps/product-details.steps.js';

const scenariosById = new Map(
  testData.scenarios.productDetails.testScenarios.map((scenario) => [scenario.id, scenario]),
);

function scenario(id) {
  const entry = scenariosById.get(id);
  if (!entry) {
    throw new Error(`Scenario "${id}" is not defined in productDetailsScenariosData`);
  }
  return entry;
}

const productName = 'Sauce Labs Backpack';

test.describe('Product details scenarios', () => {
  test(`${scenario('TS-PD-001').id}: ${scenario('TS-PD-001').title}`, async ({ page }, testInfo) => {
    const productDetailsSteps = new ProductDetailsSteps(page, testInfo);
    await productDetailsSteps.openInventoryAs(
      testData.users.validUser,
      testData.ui.loginPage.inventoryUrlPart,
      testData.ui.loginPage.expectedInventoryTitle,
    );
    await productDetailsSteps.openProductDetailsByName(productName);
    await productDetailsSteps.verifyDetailsPageUrl();
  });

  test(`${scenario('TS-PD-002').id}: ${scenario('TS-PD-002').title}`, async ({ page }, testInfo) => {
    const productDetailsSteps = new ProductDetailsSteps(page, testInfo);
    await productDetailsSteps.openInventoryAs(
      testData.users.validUser,
      testData.ui.loginPage.inventoryUrlPart,
      testData.ui.loginPage.expectedInventoryTitle,
    );
    const inventoryProductData = await productDetailsSteps.rememberInventoryProductData(productName);
    await productDetailsSteps.openProductDetailsByName(productName);
    await productDetailsSteps.verifyDetailsDataMatches(inventoryProductData);
  });

  test(`${scenario('TS-PD-003').id}: ${scenario('TS-PD-003').title}`, async ({ page }, testInfo) => {
    const productDetailsSteps = new ProductDetailsSteps(page, testInfo);
    await productDetailsSteps.openInventoryAs(
      testData.users.validUser,
      testData.ui.loginPage.inventoryUrlPart,
      testData.ui.loginPage.expectedInventoryTitle,
    );
    await productDetailsSteps.openProductDetailsByName(productName);
    await productDetailsSteps.addProductToCartFromDetails();
    await productDetailsSteps.verifyDetailsActionButtonText('Remove');
    await productDetailsSteps.verifyCartBadgeCount(1);
  });

  test(`${scenario('TS-PD-004').id}: ${scenario('TS-PD-004').title}`, async ({ page }, testInfo) => {
    const productDetailsSteps = new ProductDetailsSteps(page, testInfo);
    await productDetailsSteps.openInventoryAs(
      testData.users.validUser,
      testData.ui.loginPage.inventoryUrlPart,
      testData.ui.loginPage.expectedInventoryTitle,
    );
    await productDetailsSteps.openProductDetailsByName(productName);
    await productDetailsSteps.addProductToCartFromDetails();
    await productDetailsSteps.verifyCartBadgeCount(1);
    await productDetailsSteps.removeProductFromCartFromDetails();
    await productDetailsSteps.verifyDetailsActionButtonText('Add to cart');
    await productDetailsSteps.verifyCartBadgeCount(0);
  });

  test(`${scenario('TS-PD-005').id}: ${scenario('TS-PD-005').title}`, async ({ page }, testInfo) => {
    const productDetailsSteps = new ProductDetailsSteps(page, testInfo);
    await productDetailsSteps.openInventoryAs(
      testData.users.validUser,
      testData.ui.loginPage.inventoryUrlPart,
      testData.ui.loginPage.expectedInventoryTitle,
    );
    await productDetailsSteps.openProductDetailsByName(productName);
    await productDetailsSteps.addProductToCartFromDetails();
    await productDetailsSteps.verifyDetailsActionButtonText('Remove');
    await productDetailsSteps.goBackToProducts();
    await productDetailsSteps.verifyInventoryActionButtonText(productName, 'Remove');
  });
});

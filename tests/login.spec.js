// @ts-check
import { test } from '@playwright/test';
import { testData } from '../data/index.js';
import { LoginSteps } from '../steps/login.steps.js';

const scenariosById = new Map(
  testData.loginScenarios.testScenarios.map((scenario) => [scenario.id, scenario]),
);

function scenario(id) {
  const entry = scenariosById.get(id);
  if (!entry) {
    throw new Error(`Scenario "${id}" is not defined in loginScenariosData`);
  }
  return entry;
}

test.describe('Login scenarios', () => {
  test(`${scenario('TS-LOGIN-007').id}: ${scenario('TS-LOGIN-007').title}`, async ({ page }, testInfo) => {
    const loginSteps = new LoginSteps(page, testInfo);
    await loginSteps.openLoginPage();
    await loginSteps.verifyLoginPageIsLoaded(testData.app);
    await loginSteps.verifyUserHints(testData.users);
  });

  test(`${scenario('TS-LOGIN-001').id}: ${scenario('TS-LOGIN-001').title}`, async ({ page }, testInfo) => {
    const loginSteps = new LoginSteps(page, testInfo);
    await loginSteps.openLoginPage();
    await loginSteps.loginAs(testData.users.validUser);
    await loginSteps.verifySuccessfulLogin(testData.ui.loginPage.inventoryUrlPart);
    await loginSteps.verifySuccessfulLoginUi(testData.ui.loginPage.expectedInventoryTitle);
  });

  const genericNegativeCases = [
    {
      scenarioId: 'TS-LOGIN-002',
      credentials: testData.users.invalidCredentials.invalidUsernameValidPassword,
    },
    {
      scenarioId: 'TS-LOGIN-003',
      credentials: testData.users.invalidCredentials.validUsernameInvalidPassword,
    },
    {
      scenarioId: 'TS-LOGIN-004',
      credentials: testData.users.invalidCredentials.invalidUsernameInvalidPassword,
    },
  ];

  for (const { scenarioId, credentials } of genericNegativeCases) {
    test(`${scenario(scenarioId).id}: ${scenario(scenarioId).title}`, async ({ page }, testInfo) => {
      const loginSteps = new LoginSteps(page, testInfo);
      await loginSteps.openLoginPage();
      await loginSteps.loginAs(credentials);
      await loginSteps.verifyFailedLogin(testData.ui.loginPage.genericErrorTextPart);
    });
  }

  test(`${scenario('TS-LOGIN-005').id}: ${scenario('TS-LOGIN-005').title}`, async ({ page }, testInfo) => {
    const loginSteps = new LoginSteps(page, testInfo);
    await loginSteps.openLoginPage();
    await loginSteps.loginAs(testData.users.usersByType.lockedOut);
    await loginSteps.verifyFailedLogin(testData.ui.loginPage.lockedOutErrorTextPart);
  });

  test(`${scenario('TS-LOGIN-006').id}: ${scenario('TS-LOGIN-006').title}`, async ({ page }, testInfo) => {
    const loginSteps = new LoginSteps(page, testInfo);
    await loginSteps.openLoginPage();
    await loginSteps.loginAs(testData.users.invalidCredentials.invalidUsernameValidPassword);
    await loginSteps.verifyFailedLogin(testData.ui.loginPage.genericErrorTextPart);
    await loginSteps.reloadPage();
    await loginSteps.verifyErrorIsNotVisible();
  });

  test(`${scenario('TS-LOGIN-008').id}: ${scenario('TS-LOGIN-008').title}`, async ({ page }, testInfo) => {
    const loginSteps = new LoginSteps(page, testInfo);
    await loginSteps.openLoginPage();
    await loginSteps.loginAs(testData.users.usersByType.lockedOut);
    await loginSteps.verifyFailedLogin(testData.ui.loginPage.lockedOutErrorTextPart);
    await loginSteps.verifyNoSuccessUi(
      testData.ui.loginPage.expectedInventoryTitle,
      testData.ui.loginPage.inventoryUrlPart,
    );
  });
});

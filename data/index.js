import { appData } from './app.data.js';
import { cartScenariosData } from './testScenarios/cart-scenarios.data.js';
import { checkoutCompleteScenariosData } from './testScenarios/checkout-complete-scenarios.data.js';
import { checkoutStepOneScenariosData } from './testScenarios/checkout-step-one-scenarios.data.js';
import { checkoutStepTwoScenariosData } from './testScenarios/checkout-step-two-scenarios.data.js';
import { inventoryScenariosData } from './testScenarios/inventory-scenarios.data.js';
import { loginScenariosData } from './testScenarios/login-scenarios.data.js';
import { productDetailsScenariosData } from './testScenarios/product-details-scenarios.data.js';
import { sortingScenariosData } from './testScenarios/sorting-scenarios.data.js';
import { usersData } from './users.data.js';
import { uiData } from './ui.data.js';

export const testData = Object.freeze({
  app: appData,
  loginScenarios: loginScenariosData,
  scenarios: Object.freeze({
    inventory: inventoryScenariosData,
    sorting: sortingScenariosData,
    productDetails: productDetailsScenariosData,
    cart: cartScenariosData,
    checkoutStepOne: checkoutStepOneScenariosData,
    checkoutStepTwo: checkoutStepTwoScenariosData,
    checkoutComplete: checkoutCompleteScenariosData,
  }),
  users: usersData,
  ui: uiData,
});

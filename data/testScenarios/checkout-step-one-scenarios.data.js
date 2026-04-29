export const checkoutStepOneScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-CO1-001',
      title: 'Continue with valid first name, last name, and zip code',
      priority: 'P0',
      expectedResult: 'User is redirected to /checkout-step-two.html.',
    }),
    Object.freeze({
      id: 'TS-CO1-002',
      title: 'Validation error is shown when first name is missing',
      priority: 'P0',
      expectedResult: 'Error message is displayed and user remains on step one.',
    }),
    Object.freeze({
      id: 'TS-CO1-003',
      title: 'Validation error is shown when last name is missing',
      priority: 'P0',
      expectedResult: 'Error message is displayed and user remains on step one.',
    }),
    Object.freeze({
      id: 'TS-CO1-004',
      title: 'Validation error is shown when zip code is missing',
      priority: 'P0',
      expectedResult: 'Error message is displayed and user remains on step one.',
    }),
    Object.freeze({
      id: 'TS-CO1-005',
      title: 'Cancel returns user from step one to cart page',
      priority: 'P1',
      expectedResult: 'User is redirected to /cart.html.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-CO1-001', title: 'Submit form using keyboard Enter action', priority: 'P2' }),
    Object.freeze({ id: 'EC-CO1-002', title: 'Use leading/trailing spaces in form fields', priority: 'P2' }),
    Object.freeze({ id: 'EC-CO1-003', title: 'Use long values in all checkout inputs', priority: 'P2' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-CO1-001',
      title: 'Checkout step one allows incomplete form submission',
      severity: 'high',
      mitigation: 'Validate each mandatory field with isolated negative tests.',
    }),
    Object.freeze({
      id: 'RISK-CO1-002',
      title: 'Validation messages are incorrect or missing',
      severity: 'high',
      mitigation: 'Assert error visibility and expected message content.',
    }),
    Object.freeze({
      id: 'RISK-CO1-003',
      title: 'Cancel action leads to wrong destination',
      severity: 'medium',
      mitigation: 'Assert redirect target and cart page elements.',
    }),
  ]),
});

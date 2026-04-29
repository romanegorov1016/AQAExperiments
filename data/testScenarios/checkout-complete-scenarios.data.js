export const checkoutCompleteScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-COC-001',
      title: 'Checkout completion page displays success confirmation',
      priority: 'P0',
      expectedResult: 'User sees confirmation heading, success icon, and thank-you message.',
    }),
    Object.freeze({
      id: 'TS-COC-002',
      title: 'Back Home from completion page returns to inventory',
      priority: 'P0',
      expectedResult: 'User is redirected to /inventory.html after clicking Back Home.',
    }),
    Object.freeze({
      id: 'TS-COC-003',
      title: 'Cart is cleared after successful checkout completion',
      priority: 'P0',
      expectedResult: 'Cart badge is absent or zero and previous cart items are not retained.',
    }),
    Object.freeze({
      id: 'TS-COC-004',
      title: 'User can start a new purchase flow after completion',
      priority: 'P1',
      expectedResult: 'Adding a new product after Back Home works as a clean fresh flow.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-COC-001', title: 'Refresh completion page and validate stable success state', priority: 'P2' }),
    Object.freeze({ id: 'EC-COC-002', title: 'Open cart after completion and verify empty state', priority: 'P1' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-COC-001',
      title: 'Order marked complete while cart remains non-empty',
      severity: 'high',
      mitigation: 'Assert badge/cart reset right after completion.',
    }),
    Object.freeze({
      id: 'RISK-COC-002',
      title: 'Missing completion confirmation elements',
      severity: 'medium',
      mitigation: 'Check visibility of heading, icon, and confirmation message.',
    }),
    Object.freeze({
      id: 'RISK-COC-003',
      title: 'Back Home navigation broken or misrouted',
      severity: 'medium',
      mitigation: 'Assert inventory URL and key inventory UI controls.',
    }),
  ]),
});

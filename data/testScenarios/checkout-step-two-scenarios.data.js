export const checkoutStepTwoScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-CO2-001',
      title: 'Checkout overview shows items selected in cart',
      priority: 'P0',
      expectedResult: 'Step two contains the exact cart items with correct names and prices.',
    }),
    Object.freeze({
      id: 'TS-CO2-002',
      title: 'Item total equals sum of all overview item prices',
      priority: 'P0',
      expectedResult: 'Displayed item total matches calculated sum from listed item prices.',
    }),
    Object.freeze({
      id: 'TS-CO2-003',
      title: 'Total equals item total plus tax',
      priority: 'P0',
      expectedResult: 'Displayed final total value is arithmetic sum of item total and tax.',
    }),
    Object.freeze({
      id: 'TS-CO2-004',
      title: 'Finish completes checkout and navigates to completion page',
      priority: 'P0',
      expectedResult: 'User is redirected to /checkout-complete.html.',
    }),
    Object.freeze({
      id: 'TS-CO2-005',
      title: 'Cancel from step two returns to inventory page',
      priority: 'P1',
      expectedResult: 'User is redirected to /inventory.html.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-CO2-001', title: 'Single-item and multi-item total calculations', priority: 'P1' }),
    Object.freeze({ id: 'EC-CO2-002', title: 'Verify currency format consistency in totals', priority: 'P2' }),
    Object.freeze({ id: 'EC-CO2-003', title: 'Refresh overview page before clicking Finish', priority: 'P2' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-CO2-001',
      title: 'Incorrect total and tax calculation',
      severity: 'high',
      mitigation: 'Recalculate values in tests and compare to displayed totals.',
    }),
    Object.freeze({
      id: 'RISK-CO2-002',
      title: 'Overview items differ from cart state',
      severity: 'high',
      mitigation: 'Compare expected cart dataset with checkout overview list.',
    }),
    Object.freeze({
      id: 'RISK-CO2-003',
      title: 'Finish or Cancel navigation regression',
      severity: 'medium',
      mitigation: 'Assert target URLs and page-level UI identifiers.',
    }),
  ]),
});

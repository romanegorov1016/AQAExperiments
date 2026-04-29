export const productDetailsScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-PD-001',
      title: 'Open product details from inventory by product name',
      priority: 'P0',
      expectedResult: 'User navigates to inventory-item page for the selected product.',
    }),
    Object.freeze({
      id: 'TS-PD-002',
      title: 'Product details data matches inventory data',
      priority: 'P0',
      expectedResult: 'Name, description, and price on details page are equal to inventory card values.',
    }),
    Object.freeze({
      id: 'TS-PD-003',
      title: 'Add to cart from details updates button and badge',
      priority: 'P0',
      expectedResult: 'Add to cart changes to Remove and cart badge increases.',
    }),
    Object.freeze({
      id: 'TS-PD-004',
      title: 'Remove from details updates button and badge',
      priority: 'P1',
      expectedResult: 'Remove changes to Add to cart and cart badge decreases.',
    }),
    Object.freeze({
      id: 'TS-PD-005',
      title: 'Back to products keeps selected product state',
      priority: 'P1',
      expectedResult: 'Returning to inventory preserves product add/remove state consistency.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-PD-001', title: 'Open details from product image click', priority: 'P1' }),
    Object.freeze({ id: 'EC-PD-002', title: 'Navigate between details and inventory multiple times', priority: 'P2' }),
    Object.freeze({ id: 'EC-PD-003', title: 'Validate URL id parameter for selected product', priority: 'P2' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-PD-001',
      title: 'Wrong product details opened from inventory click',
      severity: 'high',
      mitigation: 'Use deterministic product and validate identity on details page.',
    }),
    Object.freeze({
      id: 'RISK-PD-002',
      title: 'Data mismatch between inventory and details',
      severity: 'high',
      mitigation: 'Cross-check name and price in both views.',
    }),
    Object.freeze({
      id: 'RISK-PD-003',
      title: 'Badge inconsistency across page transitions',
      severity: 'medium',
      mitigation: 'Assert badge value before/after navigation.',
    }),
  ]),
});

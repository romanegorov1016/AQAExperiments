export const inventoryScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-INV-001',
      title: 'Inventory page is visible after successful login',
      priority: 'P0',
      expectedResult: 'User lands on /inventory.html and sees Products title with product cards.',
    }),
    Object.freeze({
      id: 'TS-INV-002',
      title: 'All expected inventory product cards are rendered',
      priority: 'P0',
      expectedResult: 'Exactly 6 product cards are shown, each with name, description, price, and action button.',
    }),
    Object.freeze({
      id: 'TS-INV-003',
      title: 'Add to cart from inventory updates button and cart badge',
      priority: 'P0',
      expectedResult: 'Clicked item button changes to Remove and cart badge increments by 1.',
    }),
    Object.freeze({
      id: 'TS-INV-004',
      title: 'Remove from inventory updates button and cart badge',
      priority: 'P0',
      expectedResult: 'Remove changes back to Add to cart and cart badge decrements accordingly.',
    }),
    Object.freeze({
      id: 'TS-INV-005',
      title: 'Added item state persists during in-app navigation',
      priority: 'P1',
      expectedResult: 'Returning to inventory keeps previously added items in Remove state with consistent badge.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-INV-001', title: 'Rapid add/remove clicks on same card', priority: 'P2' }),
    Object.freeze({ id: 'EC-INV-002', title: 'Add all products and verify max badge value', priority: 'P1' }),
    Object.freeze({ id: 'EC-INV-003', title: 'Refresh page after add to cart action', priority: 'P2' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-INV-001',
      title: 'Product cards missing or duplicated',
      severity: 'high',
      mitigation: 'Assert exact card count and unique product names.',
    }),
    Object.freeze({
      id: 'RISK-INV-002',
      title: 'Cart badge desynchronization with button state',
      severity: 'high',
      mitigation: 'Validate badge changes after each add/remove action.',
    }),
    Object.freeze({
      id: 'RISK-INV-003',
      title: 'Product data regression (price or description)',
      severity: 'medium',
      mitigation: 'Verify key text fields for each product card.',
    }),
  ]),
});

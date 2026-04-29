export const cartScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-CART-001',
      title: 'Cart shows only products that were added from inventory',
      priority: 'P0',
      expectedResult: 'Cart contains exact expected items with correct names and prices.',
    }),
    Object.freeze({
      id: 'TS-CART-002',
      title: 'Cart item count matches cart badge value',
      priority: 'P0',
      expectedResult: 'Number of cart rows equals current badge count.',
    }),
    Object.freeze({
      id: 'TS-CART-003',
      title: 'Remove item from cart updates list and badge',
      priority: 'P0',
      expectedResult: 'Removed item disappears and badge decrements accordingly.',
    }),
    Object.freeze({
      id: 'TS-CART-004',
      title: 'Continue Shopping navigates back to inventory',
      priority: 'P1',
      expectedResult: 'User is redirected to /inventory.html.',
    }),
    Object.freeze({
      id: 'TS-CART-005',
      title: 'Checkout button opens checkout step one',
      priority: 'P0',
      expectedResult: 'User is redirected to /checkout-step-one.html.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-CART-001', title: 'Remove all items and verify empty cart state', priority: 'P1' }),
    Object.freeze({ id: 'EC-CART-002', title: 'Open cart with single item and with multiple items', priority: 'P1' }),
    Object.freeze({ id: 'EC-CART-003', title: 'Refresh cart page after remove action', priority: 'P2' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-CART-001',
      title: 'Cart and inventory states become inconsistent',
      severity: 'high',
      mitigation: 'Cross-verify cart rows against expected item set.',
    }),
    Object.freeze({
      id: 'RISK-CART-002',
      title: 'Remove action does not persist after navigation',
      severity: 'medium',
      mitigation: 'Reopen cart and assert removed items are absent.',
    }),
    Object.freeze({
      id: 'RISK-CART-003',
      title: 'Checkout navigation leads to incorrect page',
      severity: 'high',
      mitigation: 'Assert destination URL and key step one UI elements.',
    }),
  ]),
});

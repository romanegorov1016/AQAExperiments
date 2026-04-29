export const sortingScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-SORT-001',
      title: 'Sort by name A to Z orders products alphabetically ascending',
      priority: 'P0',
      expectedResult: 'Product names are ordered from A to Z for the full list.',
    }),
    Object.freeze({
      id: 'TS-SORT-002',
      title: 'Sort by name Z to A orders products alphabetically descending',
      priority: 'P0',
      expectedResult: 'Product names are ordered from Z to A for the full list.',
    }),
    Object.freeze({
      id: 'TS-SORT-003',
      title: 'Sort by price low to high orders products numerically ascending',
      priority: 'P0',
      expectedResult: 'Product prices are ordered from minimum to maximum.',
    }),
    Object.freeze({
      id: 'TS-SORT-004',
      title: 'Sort by price high to low orders products numerically descending',
      priority: 'P0',
      expectedResult: 'Product prices are ordered from maximum to minimum.',
    }),
    Object.freeze({
      id: 'TS-SORT-005',
      title: 'Sorting keeps cart badge and Add/Remove states consistent',
      priority: 'P1',
      expectedResult: 'Sorting changes item order only; cart badge and button states stay correct.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({ id: 'EC-SORT-001', title: 'Switch all sort options sequentially', priority: 'P1' }),
    Object.freeze({ id: 'EC-SORT-002', title: 'Sort after adding multiple products to cart', priority: 'P1' }),
    Object.freeze({ id: 'EC-SORT-003', title: 'Validate default sort on fresh page load', priority: 'P2' }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-SORT-001',
      title: 'Price sort treated as text instead of numeric',
      severity: 'high',
      mitigation: 'Parse prices to numbers and assert numeric order.',
    }),
    Object.freeze({
      id: 'RISK-SORT-002',
      title: 'Partial list reorder due to stale UI',
      severity: 'medium',
      mitigation: 'Assert full ordered arrays for names and prices.',
    }),
    Object.freeze({
      id: 'RISK-SORT-003',
      title: 'Sort operation resets add/remove button states',
      severity: 'medium',
      mitigation: 'Validate state before and after sorting.',
    }),
  ]),
});

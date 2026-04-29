export const loginScenariosData = Object.freeze({
  testScenarios: Object.freeze([
    Object.freeze({
      id: 'TS-LOGIN-001',
      title: 'Successful login with valid credentials',
      priority: 'P0',
      credentialsType: 'valid',
      expectedResult:
        'User is redirected to /inventory.html, products list is visible, and page title contains "Products".',
    }),
    Object.freeze({
      id: 'TS-LOGIN-002',
      title: 'Login fails with invalid username and valid password',
      priority: 'P0',
      credentialsType: 'invalid-username',
      expectedResult: 'Generic error message is shown, user stays on the login page, and no redirect occurs.',
    }),
    Object.freeze({
      id: 'TS-LOGIN-003',
      title: 'Login fails with valid username and invalid password',
      priority: 'P0',
      credentialsType: 'invalid-password',
      expectedResult: 'Generic error message is shown, user stays on the login page, and no redirect occurs.',
    }),
    Object.freeze({
      id: 'TS-LOGIN-004',
      title: 'Login fails with invalid username and invalid password',
      priority: 'P0',
      credentialsType: 'invalid-both',
      expectedResult: 'Generic error message is shown, user stays on the login page, and no redirect occurs.',
    }),
    Object.freeze({
      id: 'TS-LOGIN-005',
      title: 'Locked out user cannot login',
      priority: 'P0',
      credentialsType: 'locked-user',
      expectedResult: 'Locked user error is shown and user remains on the login page.',
    }),
    Object.freeze({
      id: 'TS-LOGIN-006',
      title: 'Error message disappears after page reload',
      priority: 'P1',
      credentialsType: 'invalid-or-locked',
      expectedResult: 'Error message is not visible after page reload.',
    }),
    Object.freeze({
      id: 'TS-LOGIN-007',
      title: 'Login page core elements are visible',
      priority: 'P1',
      credentialsType: 'none',
      expectedResult:
        'Username input, password input, login button, and error container behavior are correct.',
    }),
    Object.freeze({
      id: 'TS-LOGIN-008',
      title: 'No false-success UI after failed login',
      priority: 'P1',
      credentialsType: 'invalid-or-locked',
      expectedResult: 'Products page title and inventory list are not displayed after failed login.',
    }),
  ]),
  edgeCases: Object.freeze([
    Object.freeze({
      id: 'EC-LOGIN-001',
      title: 'Empty username and/or password',
      priority: 'P1',
    }),
    Object.freeze({
      id: 'EC-LOGIN-002',
      title: 'Leading/trailing spaces in username or password',
      priority: 'P2',
    }),
    Object.freeze({
      id: 'EC-LOGIN-003',
      title: 'Case sensitivity checks for username and password',
      priority: 'P2',
    }),
    Object.freeze({
      id: 'EC-LOGIN-004',
      title: 'Very long input values and special characters',
      priority: 'P2',
    }),
    Object.freeze({
      id: 'EC-LOGIN-005',
      title: 'Multiple rapid clicks on Login button',
      priority: 'P2',
    }),
    Object.freeze({
      id: 'EC-LOGIN-006',
      title: 'State consistency after repeated failed attempts',
      priority: 'P2',
    }),
    Object.freeze({
      id: 'EC-LOGIN-007',
      title: 'Page refresh behavior after successful login',
      priority: 'P2',
    }),
  ]),
  risks: Object.freeze([
    Object.freeze({
      id: 'RISK-LOGIN-001',
      title: 'Incorrect redirect after successful login',
      severity: 'high',
      mitigation: 'Validate pathname and key UI elements on inventory page.',
    }),
    Object.freeze({
      id: 'RISK-LOGIN-002',
      title: 'Missing or incorrect login error message',
      severity: 'high',
      mitigation: 'Verify error visibility and meaningful message content for each negative flow.',
    }),
    Object.freeze({
      id: 'RISK-LOGIN-003',
      title: 'UI selector instability due to layout changes',
      severity: 'medium',
      mitigation: 'Use stable selectors (prefer data-test attributes).',
    }),
    Object.freeze({
      id: 'RISK-LOGIN-004',
      title: 'Flaky tests caused by timing issues',
      severity: 'medium',
      mitigation: 'Use auto-waiting expectations and avoid fixed sleeps.',
    }),
    Object.freeze({
      id: 'RISK-LOGIN-005',
      title: 'Test data dependency and credential drift',
      severity: 'medium',
      mitigation: 'Centralize credentials in data layer and support environment overrides.',
    }),
  ]),
  prioritization: Object.freeze({
    P0: Object.freeze([
      'Successful login with valid credentials',
      'Failed login with invalid credentials',
      'Failed login for locked out user',
    ]),
    P1: Object.freeze([
      'Error message reset after page reload',
      'Validation for empty fields',
      'UI state validation for success and failure flows',
    ]),
    P2: Object.freeze([
      'Whitespace and case-sensitivity checks',
      'Long/special-character input checks',
      'Repeated click and repeated attempt behavior',
      'Session behavior on page refresh after login',
    ]),
  }),
});

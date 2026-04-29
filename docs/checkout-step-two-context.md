# Checkout Step Two Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/checkout-step-two.html

## Preconditions
- User is logged in with valid credentials
- Cart contains products
- Checkout step one is completed with valid customer data

## Checkout Overview Elements
- Overview title
- Cart item rows
- Payment Information section
- Shipping Information section
- Price Total section
- Item total value
- Tax value
- Total value
- Finish button
- Cancel button

## Expected Behavior

### Order Overview
- Overview displays the same items that were in cart
- Item names and prices are correct
- Price summary is visible and correctly formatted

### Totals Calculation
- Item total equals sum of item prices
- Tax is shown as separate value
- Total equals item total plus tax

### Navigation
- "Finish" navigates to checkout complete page
- "Cancel" returns user to inventory page

## Verifications
- Assert item list consistency with cart setup
- Assert arithmetic correctness of totals
- Assert transition to `checkout-complete.html` after Finish
- Assert transition to `inventory.html` after Cancel

## Risks
- Incorrect tax/total calculations
- Missing items in overview
- Finish action not completing checkout
- Cancel action preserving invalid intermediate state

## Notes for Automation
- Recalculate totals in test using parsed numeric values
- Keep cart dataset deterministic for predictable expected totals
- Validate both content and navigation flow
- Avoid fragile assertions against full concatenated summary text

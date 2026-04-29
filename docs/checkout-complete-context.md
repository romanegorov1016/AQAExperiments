# Checkout Complete Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/checkout-complete.html

## Preconditions
- User is logged in with valid credentials
- Checkout step two is completed by clicking Finish

## Completion Page Elements
- Completion title/header
- Success icon/image
- Thank you confirmation message
- Back Home button

## Expected Behavior

### Successful Completion
- User sees confirmation that order was completed
- Completion message is visible and readable
- No checkout errors are displayed

### Back Home Behavior
- Clicking "Back Home" returns user to inventory page
- Cart badge is cleared after successful checkout

### Post-Completion State
- Completed checkout should not retain old cart items
- User can start a new purchase flow from inventory

## Verifications
- Assert presence of completion heading and success message
- Assert URL equals `checkout-complete.html`
- Assert navigation to `inventory.html` via Back Home
- Assert cart badge is absent or zero after completion

## Risks
- Order marked complete but cart not cleared
- Missing completion UI elements
- Back Home redirect broken
- Inconsistent state when starting next order

## Notes for Automation
- Keep assertions focused on user-visible completion signals
- Validate cart reset with explicit badge/cart checks
- Follow up with a new add-to-cart action to confirm clean state
- Keep this scenario in e2e checkout smoke path

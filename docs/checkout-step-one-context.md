# Checkout Step One Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/checkout-step-one.html

## Preconditions
- User is logged in with valid credentials
- Cart contains at least one product
- User opened checkout from cart page

## Checkout Information Form Elements
- First Name input
- Last Name input
- Zip/Postal Code input
- Continue button
- Cancel button
- Error message container

## Required Data
- First Name is mandatory
- Last Name is mandatory
- Zip/Postal Code is mandatory

## Expected Behavior

### Valid Form Submission
- With all required fields filled, user is redirected to checkout step two

### Invalid Form Submission
- Missing first name shows validation error
- Missing last name shows validation error
- Missing zip code shows validation error
- User remains on step one page when validation fails

### Navigation
- "Cancel" returns user to cart page

## Verifications
- Assert each validation message for missing fields
- Assert no navigation on invalid submission
- Assert navigation to `checkout-step-two.html` on valid submission
- Assert form data can be entered and submitted via keyboard

## Risks
- Incorrect validation order or message text
- Submit allowed with incomplete data
- Cancel action leading to wrong page
- Flaky form submit due to timing issues

## Notes for Automation
- Cover one-missing-field scenarios separately
- Use stable inputs locators (prefer data-test)
- Avoid hard waits after clicking Continue
- Keep form test data short and deterministic

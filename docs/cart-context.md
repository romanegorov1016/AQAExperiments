# Cart Feature Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/cart.html

## Preconditions
- User is logged in with valid credentials
- At least one product is added from inventory

## Cart Page Elements
- Cart title
- Cart item rows
- Item name, description, and price
- Remove button per item
- Continue Shopping button
- Checkout button

## Expected Behavior

### Cart Content
- Cart shows only products added by user
- Item count in cart matches cart badge value
- Item details in cart are correct

### Remove From Cart
- Clicking "Remove" deletes item row from cart
- Cart badge decrements accordingly
- Removed item is not present after navigation refresh

### Cart Navigation
- "Continue Shopping" returns to inventory page
- "Checkout" navigates to checkout step one page

## Verifications
- Validate exact list of items in cart
- Validate cart item count before and after remove
- Validate button navigation targets
- Validate empty cart state after removing all items

## Risks
- Cart data mismatch with inventory actions
- Remove action not persisted across pages
- Incorrect transitions to inventory/checkout
- Badge desynchronization after multiple operations

## Notes for Automation
- Build cart assertions from expected product set
- Validate both UI list and badge values
- Cover single-item and multi-item cart scenarios
- Keep setup explicit to avoid hidden dependencies

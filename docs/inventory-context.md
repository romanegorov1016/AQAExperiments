# Inventory Feature Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/inventory.html

## Preconditions
- User is logged in with valid credentials
- Main products page is opened

## Inventory Page Elements
- Products title ("Products")
- Product cards list
- Product name per card
- Product description per card
- Product price per card
- Add to cart / Remove button per card
- Shopping cart badge

## Expected Data
- Inventory shows 6 products
- Each product card contains name, description, price, and action button

## Expected Behavior

### Inventory Rendering
- Products list is visible after successful login
- All expected product cards are displayed
- Product cards contain complete and readable data

### Add To Cart Behavior
- Clicking "Add to cart" changes button to "Remove"
- Cart badge increments by 1
- Added product state is preserved during in-app navigation

### Remove From Inventory
- Clicking "Remove" changes button back to "Add to cart"
- Cart badge decrements by 1
- Product is removed from cart state

## Risks
- Missing or duplicated product cards
- Incorrect product price or text
- Cart badge not synchronized with action buttons
- State reset after navigation or refresh

## Notes for Automation
- Assert product count and key texts
- Validate button state transitions
- Validate cart badge value after each action
- Avoid fixed waits; rely on UI state changes
- Keep scenario independent from previous tests

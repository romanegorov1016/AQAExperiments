# Product Details Feature Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/inventory-item.html?id=<product_id>

## Preconditions
- User is logged in with valid credentials
- User navigates from inventory page by clicking product name or image

## Product Details Page Elements
- Product image
- Product name
- Product description
- Product price
- Add to cart / Remove button
- Back to products button

## Expected Behavior

### Navigation To Details
- Correct product details page opens for selected item
- Product name, description, and price match inventory data

### Cart Actions On Details Page
- Clicking "Add to cart" changes button to "Remove"
- Cart badge increments appropriately
- Clicking "Remove" reverts button and updates cart badge

### Back Navigation
- "Back to products" returns user to inventory page
- Product cart state remains consistent between details and inventory

## Verifications
- Validate that selected product identity is preserved on details page
- Cross-check name and price against inventory source data
- Validate Add/Remove state synchronization across pages
- Validate URL pattern contains `inventory-item.html`

## Risks
- Opening wrong product details
- Price/name mismatch between list and details
- Inconsistent cart state across pages
- Broken back navigation

## Notes for Automation
- Use deterministic product selection (by exact name)
- Assert data consistency before and after navigation
- Reuse helper methods for product card and details assertions
- Avoid brittle selectors tied to visual order only

# Sorting Feature Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/inventory.html

## Preconditions
- User is logged in with valid credentials
- Products list is visible

## Sorting Controls
- Sort dropdown
- Sorting options:
  - Name (A to Z)
  - Name (Z to A)
  - Price (low to high)
  - Price (high to low)

## Expected Behavior

### Name Sorting
- "Name (A to Z)" sorts product names in ascending alphabetical order
- "Name (Z to A)" sorts product names in descending alphabetical order

### Price Sorting
- "Price (low to high)" sorts products by ascending price
- "Price (high to low)" sorts products by descending price

### State Consistency
- Sorting changes only order, not product data
- Product button states (Add/Remove) remain correct after sorting
- Cart badge value is not affected by sorting

## Verifications
- Capture product names before and after sort for order assertion
- Capture prices before and after sort for numeric order assertion
- Verify list length remains unchanged after every sort
- Verify no product card disappears due to sorting

## Risks
- Lexicographic instead of numeric sort for prices
- Partial reorder with stale UI elements
- Wrong default sort option after page load
- Sort operation resetting cart button states

## Notes for Automation
- Compare arrays of names/prices instead of single element checks
- Parse prices as numbers before assertions
- Validate all sort options in isolated test cases
- Re-open page or reset state between scenarios if needed

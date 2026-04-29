# Login Feature Context (Swag Labs)

## Application
Swag Labs demo application

## URL
https://www.saucedemo.com/

## Login Page Elements
- Username input (placeholder: "Username")
- Password input (placeholder: "Password")
- Login button (text: "Login")
- Error message container

## Valid Credentials
- username: standard_user
- password: secret_sauce

## Locked User
- username: locked_out_user
- password: secret_sauce
- Expected: login should fail with a locked user error

## Invalid Credentials
- any incorrect username or password
- Expected: login should fail with a generic error

## Expected Behavior

### Successful Login
- User is redirected to: /inventory.html
- Products list is displayed
- Page contains title "Products"

### Failed Login (Invalid Credentials)
- Error message is displayed
- User remains on login page
- No redirect occurs

### Failed Login (Locked User)
- Error message indicates user is locked
- User remains on login page

## Error Message Behavior
- Error message should be visible
- Error message should contain meaningful text
- Error message should disappear after page reload

## Risks

- Incorrect redirect after login
- Error message not displayed or incorrect
- UI changes breaking selectors
- Flaky login due to timing issues
- Test data dependency issues

## Notes for Automation

- Prefer stable selectors (data-test if available)
- Avoid fixed waits
- Validate URL after login
- Validate UI state, not just navigation
- Keep tests independent

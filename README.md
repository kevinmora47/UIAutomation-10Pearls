# Automation of <https://10pearls.com/>

This project aims to automate the UI of the <https://10pearls.com/> website using Cypress.

## Overview

The automation project covers the following scenarios:

- Verify the navigation bar and footer are displayed on every page.
- Verify the "Work With Us" button redirects to the career page.
- Verify the contact form is functional and successful submission triggers a confirmation message.

## Prerequisites

- Node.js and npm should be installed on the system.
- The latest version of Cypress should be installed. You can install it by running the following command:

  ```
  npm install cypress
  ```

## Running the Tests

To run the tests, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal in the root directory of the project.
3. Run the following command to open the Cypress Test Runner:

   ```
   npx cypress open
   ```

4. Click on the test file you want to run, i.e., `navigation.spec.js`, `work-with-us.spec.js`, or `contact-form.spec.js`.

## Test Files

The project has the following test files:

### navigation.spec.js

This test file verifies that the navigation bar and footer are displayed on every page of the website.

### work-with-us.spec.js

This test file verifies that the "Work With Us" button on the home page redirects to the career page.

### contact-form.spec.js

This test file verifies that the contact form is functional, and a successful submission triggers a confirmation message.

## Configuration

The `cypress.json` file contains the configuration for the project. You can modify the configuration according to your needs.

## Conclusion

This project aims to automate the UI of the <https://10pearls.com/> website using Cypress. The tests cover the essential functionality of the website and can be used as a starting point for further automation.

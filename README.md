# Pet-SPA

# Pet Care SPA

The Pet Care SPA is a Single Page Application developed for a SoftUni Workshop. It utilizes page.js, lit-html, and lite-server for the frontend, and chai, mocha, playwright-chromium, and http-server for testing. The application is designed for managing pet care, allowing users to create accounts, log in, log out, and perform CRUD operations on pets.

## Technologies Used

- **page.js:** A micro client-side router inspired by the Express router.
- **lit-html:** A lightweight, expressive HTML templating library.
- **lite-server:** A lightweight development server.
- **chai:** A BDD/TDD assertion library for Node.js and browsers.
- **mocha:** A feature-rich JavaScript test framework.
- **playwright-chromium:** A browser automation library.
- **http-server:** A simple, zero-configuration command-line HTTP server.

## Features

- **User Authentication:**
  - Register, log in, and log out securely.

- **Pet Management:**
  - Create pets and associate them with user accounts.
  - Owners can edit or delete their pets.
  - Non-owners can view pet details but cannot perform CRUD operations.

## Testing

The application is thoroughly tested using chai, mocha, playwright-chromium, and http-server. To run the tests, follow these steps:

1. Install dependencies:

   ```bash
   npm install

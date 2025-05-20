
# Tech Stack
- JavaScript with Node.js
- Axios for API calls
- Jest for testing
- dotenv for credential/config management

Modular structure for readability and maintainability

📁 Project Structure
inventory-api-tests/
├── Dockerfile
├── .dockerignore
├── .env.example
├── package.json
├── README.md
├── tests/
│   ├── product.test.js
│   ├── transaction.test.js
│   └── tempProduct.json
├── services/
│   ├── apiClient.js
│   ├── productService.js
│   └── authService.js
├── utils/
│   └── tokenManager.js



# Inventory API Test Suite

This project contains automated API tests for an Inventory Management System using **Jest** and **Axios**.

## ✅ Features

- Product CRUD tests (Add, Update, Get, Delete)
- Transaction tests (Buy, Sell)
- Token-based authentication
- Fully Dockerized test environment

---


# To run the test locally machine:
- clone the repository
- cd into inventory-api-tests directory
- create `.env` file
- Put the `URL`, `USERNAME`, `PASSWORD` into the `.env` file created
- run `npm install` in terminal
- run `npm test` or `npx jest` to execute the tests

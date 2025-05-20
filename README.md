
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

## 🧰 Prerequisites

- [Docker](https://www.docker.com/) installed


# To run the test local machine:
cd inventory-api-tests
npm install
npm test 
or
npx jest


    Sample Output 
PASS  tests/product.test.js
PASS  tests/transaction.test.js
Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total


const { login } = require('../services/authService');
const { setToken } = require('../utils/tokenManager');
const { buyProduct, sellProduct } = require('../services/transactionService');
const fs = require('fs');
const path = require('path');
const tempDataFile = path.join(__dirname, 'tempProduct.json');

let productId;

beforeAll(async () => {
  const token = await login(process.env.USERNAME, process.env.PASSWORD);
  setToken(token);

// Read product ID from file
  const data = fs.readFileSync(tempDataFile, 'utf-8');
  productId = JSON.parse(data).productId;
});

describe('Buy/Sell', () => {
  const productId = productId;

  it('should fail to buy with invalid ID', async () => {
    await expect(buyProduct('bbbbbbb', 1)).rejects.toThrow();
  });

  it('should fail to sell with invalid quantity', async () => {
    await expect(sellProduct(productId, -10)).rejects.toThrow();
  });
});

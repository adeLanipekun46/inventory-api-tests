const { addProduct, updateProduct, deleteProduct, getAllProducts } = require('../services/productService');

const { login } = require('../services/authService');
const { setToken } = require('../utils/tokenManager');

const fs = require('fs');
const path = require('path');
const tempDataFile = path.join(__dirname, 'tempProduct.json');

function generateRandomName() {
  return `TestProduct_${Math.random().toString(36).substring(2, 10)}`;
}

let newProductId = '';       // Global so accessible in afterAll
let generatedName = '';      // Global so accessible in afterAll

beforeAll(async () => {
  const token = await login(process.env.USERNAME, process.env.PASSWORD);
  setToken(token);
});

describe('Products API', () => {
  it('Add a new product', async () => {
    generatedName = generateRandomName(); // ✅ Generate and store the name
    const product = {
      name: generatedName,               // ✅ Use the string, not a function
      description: 'Auto test product',
      price: 9.99,
      stock: 100
    };
    const res = await addProduct(product);
    console.log('Add Product Response:', res);

    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty('productId');

    newProductId = res.data.productId; // ✅ Store the ID
  });

  it('should retrieve product list', async () => {
    const res = await getAllProducts();
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBeGreaterThan(0);
  });

  it('should update the product', async () => {
    if (!newProductId) throw new Error('No productId available for update test');
    const updatedFields = {
      name: generatedName + '_Updated',
      price: 19.99,
      stock: 50,
    };
    const res = await updateProduct(newProductId, updatedFields);
    console.log('Update Product Response Data:', res.data);

    expect(res.status).toBe(200);
    expect(res.data.name).toBe(updatedFields.name);
    expect(res.data.price).toBe(updatedFields.price);
    
  });

  it('should delete the product', async () => {
    if (!newProductId) throw new Error('No productId available for delete test');
    expect(newProductId).toBeTruthy(); // Ensure ID exists

    const res = await deleteProduct(newProductId);
    console.log('Delete Product Response:', res);

    expect(res.status).toBe(200);
    expect(res.data.message || res.data.success).toBeTruthy();
  });
});

afterAll(() => {
  if (newProductId) {
    fs.writeFileSync(tempDataFile, JSON.stringify({ productId: newProductId, name: generatedName }));
  }
});

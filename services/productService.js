const apiClient = require('./apiClient');
const { getAuthHeader } = require('../utils/tokenManager');


const addProduct = async (product) => {
  try {
    const response = await apiClient.post('/products', product);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    console.error('Error adding product:', error.response?.data || error.message);
    throw error;
  }
};

const getAllProducts = async () => {
  const response = await apiClient.get('/products');
  return {
    status: response.status,
    data: response.data
  };
};

const updateProduct = async (id, updatedFields) => {
  const response = await apiClient.put(`/products/${id}`, updatedFields);
  return {
    status: response.status,
    data: response.data,
  };
};

const deleteProduct = async (id) => {
  const response = await apiClient.delete(`/products/${id}`);
  return {
    status: response.status,
    data: response.data
  };
};

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };

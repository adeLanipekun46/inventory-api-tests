const apiClient = require('./apiClient');

async function buyProduct(productId, quantity) {
  return apiClient.post(`/products/buy/${productId}`, { quantity });
}

async function sellProduct(productId, quantity) {
  return apiClient.post(`/products/sell/${productId}`, { quantity });
}

module.exports = { buyProduct, sellProduct };

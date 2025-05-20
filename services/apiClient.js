require('dotenv').config(); // Load .env variables

const axios = require('axios');
const { getAuthHeader } = require('../utils/tokenManager');

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const authHeader = getAuthHeader();
    config.headers = {
      ...config.headers,
      ...authHeader,
    };
    console.log(`[REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}`, config.headers);

    return config;
  },

  (error) => Promise.reject(error)
);

module.exports = apiClient;

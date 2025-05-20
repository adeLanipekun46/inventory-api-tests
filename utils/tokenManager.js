let authToken = '';

const setToken = (token) => {
  authToken = token;
};

const getAuthHeader = () => {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
};

module.exports = { setToken, getAuthHeader };

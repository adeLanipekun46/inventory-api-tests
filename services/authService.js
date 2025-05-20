const apiClient = require('./apiClient');

async function login(username, password) {
  const res = await apiClient.post('/auth/login', { username, password });
  return res.data.token;
}

module.exports = { login };

const { login } = require('../services/authService');
const { setToken } = require('../utils/tokenManager');


beforeAll(async () => {
  const token = await login(process.env.USERNAME, process.env.PASSWORD);
  setToken(token); // Now token is injected automatically in all future requests
});


describe('Authentication', () => {
  it('should return a valid token', async () => {
    const token = await login(process.env.USERNAME, process.env.PASSWORD);
    expect(typeof token).toBe('string');
    setToken(token);
  });

  it('should fail with wrong credentials', async () => {
    await expect(login('invalid', 'invalid')).rejects.toThrow();
  });
});







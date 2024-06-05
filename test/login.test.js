// login.test.js
const { login } = require('./login');

describe('login', () => {
  test('deve retornar mensagem de erro se o username não for fornecido', () => {
    const result = login('', 'admin123');
    expect(result).toEqual({
      success: false,
      message: 'Username and password are required.'
    });
  });

  test('deve retornar mensagem de erro se o password não for fornecido', () => {
    const result = login('admin', '');
    expect(result).toEqual({
      success: false,
      message: 'Username and password are required.'
    });
  });

  test('deve retornar mensagem de erro se o username estiver incorreto', () => {
    const result = login('user', 'admin123');
    expect(result).toEqual({
      success: false,
      message: 'Invalid username or password.'
    });
  });

  test('deve retornar mensagem de erro se o password estiver incorreto', () => {
    const result = login('admin', 'wrongpassword');
    expect(result).toEqual({
      success: false,
      message: 'Invalid username or password.'
    });
  });

  test('deve retornar sucesso se o username e password estiverem corretos', () => {
    const result = login('admin', 'admin123');
    expect(result).toEqual({
      success: true,
      message: 'Login successful.'
    });
  });
});

// login.js
function login(username, password) {
    if (!username || !password) {
      return { success: false, message: 'Username and password are required.' };
    }
  
    if (username !== 'admin' || password !== '1111') {
      return { success: false, message: 'Invalid username or password.' };
    }
  
    return { success: true, message: 'Login successful.' };
  }
  
  module.exports = { login };
  
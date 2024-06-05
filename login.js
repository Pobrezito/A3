// login.js
function login(username, password) {
    if (!username || !password) {
      return { success: false, message: 'Username and password are required.' };
    }
  
    if (username !== 'admin' || password !== 'admin123') {
      return { success: false, message: 'Invalid username or password.' };
    }
  
    return { success: true, message: 'Login successful.' };
  }
  
  module.exports = { login };
  
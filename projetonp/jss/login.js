
document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '1111') {
        window.location.href = 'pesquisa.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

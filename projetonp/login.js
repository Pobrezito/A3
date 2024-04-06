function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin") {
        alert("Logado com sucesso")
        location.href = 'index.html'
    }else{
        alert("Usuário ou senha incorreta")
    }
}
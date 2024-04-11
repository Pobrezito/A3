document.addEventListener("DOMContentLoaded", function() {
    const movieList = document.querySelector('.movie-list');
    const descriptionInput = document.getElementById('descriptionInput');
    const saveButton = document.getElementById('saveButton');

    // Array de filmes
    const filmes = [
        { nome: 'Matrix', poster: 'matrix.jpg', descricao: 'Descrição do filme Matrix' },
        { nome: 'Matrix Reloaded', poster: 'matrixreloaded.jpg', descricao: 'Descrição do filme Matrix Reloaded' },
        { nome: 'Matrix Revolutions', poster: 'matrixrevolutions.jpg', descricao: 'Descrição do filme Matrix Revolutions' }
    ];

    // Função para adicionar um filme à lista
    function adicionarFilme(filme) {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <a href="descricao_${filme.nome}.html">
                <img src="${filme.poster}" alt="${filme.nome}">
                <p>${filme.nome}</p>
            </a>
        `;
        movieList.appendChild(movieItem);
    }

    // Adicionando filmes à lista
    filmes.forEach(filme => adicionarFilme(filme));

    // Botão para adicionar filme
    const addButton = document.createElement('button');
    addButton.textContent = 'Adicionar Filme';
    addButton.addEventListener('click', function() {
        const filmeSelecionado = prompt('Escolha um filme: Matrix, Matrix Reloaded ou Matrix Revolutions');
        const filmeEncontrado = filmes.find(filme => filme.nome.toLowerCase() === filmeSelecionado.toLowerCase());
        if (filmeEncontrado) {
            adicionarFilme(filmeEncontrado);
        } else {
            alert('Filme não encontrado!');
        }
    });

    document.body.appendChild(addButton);

    // Carregar descrição do perfil do localStorage, se existir
    const savedDescription = localStorage.getItem('profileDescription');
    if (savedDescription) {
        descriptionInput.value = savedDescription;
    }

    // Evento para salvar a descrição do perfil
    saveButton.addEventListener('click', function() {
        const description = descriptionInput.value;
        localStorage.setItem('profileDescription', description);
        alert('Descrição salva com sucesso!');
    });
});

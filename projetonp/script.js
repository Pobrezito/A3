// script.js
const movies = [
    { title: "Blade Runner", poster: "bladerunner.jpg" },
    { title: "Matrix", poster: "matrix.jpg" },
    { title: "Star Wars: Episódio I – A Ameaça Fantasma", poster: "starwarsi.png" },
    { title: "Star Wars: Episódio II – Ataque dos Clones", poster: "starwarsii.png" },
    { title: "Star Wars: Episódio III – A Vingança dos Sith", poster: "starwarsiii.png" },
    { title: "Star Wars: Episódio IV – Uma Nova Esperança", poster: "starwarsiv.png" },
    { title: "Star Wars: Episódio V – O Império Contra-Ataca", poster: "starwarsv.png" }
    // Adicione mais filmes conforme necessário
];

const moviesList = document.getElementById('movies-list');

movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const imgElement = document.createElement('img');
    imgElement.src = movie.poster;
    imgElement.alt = movie.title;

    const linkElement = document.createElement('a');
    linkElement.href = `https://pt.wikipedia.org/wiki/${encodeURIComponent(movie.title)}`;
    linkElement.textContent = movie.title;
    linkElement.target = "_blank";

    movieElement.appendChild(imgElement);
    movieElement.appendChild(linkElement);
    
    moviesList.appendChild(movieElement);
});

// script.js
const movies = [
    { title: "Blade Runner", poster: "bladerunner.jpg" },
    { title: "Matrix", poster: "matrix.jpg" },
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

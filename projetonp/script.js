const movies = [
    { title: "Blade Runner", poster: "bladerunner.jpg" },
    { title: "Matrix", poster: "matrix.jpg" },
    { title: "Star Wars: Episódio I – A Ameaça Fantasma", poster: "starwarsi.jpg" },
    { title: "Star Wars: Episódio II – Ataque dos Clones", poster: "starwarsii.png" },
    { title: "Star Wars: Episódio III – A Vingança dos Sith", poster: "starwarsiii.png" },
    { title: "Star Wars: Episódio IV – Uma Nova Esperança", poster: "starwarsiv.png" },
    { title: "Star Wars: Episódio V – O Império Contra-Ataca", poster: "starwarsv.png" },
    { title: "Star Wars: Episode VI – Return of the Jedi", poster: "starwarsvi.png" },
    { title: "Star Wars: Episode VII — The Force Awakens", poster: "starwarsvii.png" },
    { title: "Star Wars: The Last Jedi", poster: "starwarsviii.png" },
    { title: "Star Wars: The Rise of Skywalker", poster: "starwarsix.png" },
    { title: "The Maze Runner (film)", poster: "mazerunneri.png" },
    { title: "Maze Runner: The Scorch Trials", poster: "mazerunnerii.png" },
    { title: "Maze Runner: The Death Cure", poster: "mazerunneriii.png" },
    { title: "Raiders of the Lost Ark", poster: "indianajonesi.png" },
    { title: "Indiana Jones and the Temple of Doom", poster: "indianajonesii.png" },
    { title: "Indiana Jones and the Last Crusade", poster: "indianajonesiii.png" },
    { title: "Indiana Jones e o Reino da Caveira de Cristal", poster: "indianajonesiv.png" },
    { title: "Indiana Jones and the Dial of Destiny", poster: "indianajonesv.png" },
    { title: "Harry Potter e a Pedra Filosofal (filme)", poster: "harrypotteri.png" },
    { title: "Harry Potter and the Chamber of Secrets (filme)", poster: "harrypotterii.png" },
    { title: "Harry Potter e o Prisioneiro de Azkaban (filme)", poster: "harrypotteriii.png" },
    { title: "Harry Potter e o Cálice de Fogo (filme)", poster: "harrypotteriv.png" },
    { title: "Harry Potter and the Order of the Phoenix (filme)", poster: "harrypotterv.png" },
    { title: "Harry Potter and the Half-Blood Prince (filme)", poster: "harrypottervi.png" },
    { title: "Harry Potter and the Deathly Hallows – Part 1", poster: "harrypottervii.png" },
    { title: "Harry Potter and the Deathly Hallows – Part 2", poster: "harrypotterviii.png" },
    { title: "The Hobbit: An Unexpected Journey", poster: "hobbiti.png" },
    { title: "O Hobbit: A Desolação de Smaug", poster: "hobbitii.png" },
    { title: "O Hobbit: A Batalha dos Cinco Exércitos", poster: "hobbitiii.png" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", poster: "lordoftheringsi.png" },
    { title: "O Senhor dos Anéis: As Duas Torres", poster: "lordoftheringsii.png" },
    { title: "The Lord of the Rings: The Return of the King", poster: "lordoftheringsiii.png" }
];

const movieList = document.getElementById('movie-list');
const movieDetails = document.getElementById('movie-details');

// Function to create movie list items
function createMovieItem(movie) {
    const listItem = document.createElement('li');
    listItem.classList.add('movie-item');

    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;

    listItem.appendChild(img);

    // Store movie details in dataset for easy access
    Object.keys(movie).forEach(key => {
        listItem.dataset[key] = movie[key];
    });

    return listItem;
}

// Function to display movie details when clicked
function displayMovieDetails(event) {
    if (event.target.tagName === 'IMG') {
        const movie = event.target.parentElement.dataset;
        const detailsHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
        `;
        movieDetails.innerHTML = detailsHTML;
        movieDetails.style.display = 'block';
    }
}

// Populate movie list
movies.forEach(movie => {
    const movieItem = createMovieItem(movie);
    movieList.appendChild(movieItem);
});

// Event listener for displaying movie details
movieList.addEventListener('click', displayMovieDetails);


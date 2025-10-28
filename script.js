const movies = [
  { title: 'Starlit Journey', genre: 'Sci-Fi', rating: 8.2, poster: 'https://picsum.photos/seed/starlit/300/420' },
  { title: 'Midnight Heist', genre: 'Action', rating: 7.6, poster: 'https://picsum.photos/seed/heist/300/420' },
  { title: 'Parallel Lives', genre: 'Romance', rating: 8.7, poster: 'https://picsum.photos/seed/parallel/300/420' },
  { title: 'Laugh Track', genre: 'Comedy', rating: 6.9, poster: 'https://picsum.photos/seed/laugh/300/420' },
  { title: 'Mystery at Hollow House', genre: 'Horror', rating: 7.3, poster: 'https://picsum.photos/seed/hollow/300/420' },
  { title: 'Code of Tomorrow', genre: 'Sci-Fi', rating: 8.0, poster: 'https://picsum.photos/seed/code/300/420' }
];

const movieList = document.getElementById('movieList');
const searchBox = document.getElementById('searchBox');

function renderMovies(list) {
  movieList.innerHTML = '';
  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${m.poster}" alt="${m.title}" />
      <div class="movie-info">
        <h3>${m.title}</h3>
        <p>${m.genre} • ⭐ ${m.rating}</p>
        <button class="like-btn">♡</button>
      </div>
    `;
    const btn = card.querySelector('.like-btn');
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    });
    movieList.appendChild(card);
  });
}

renderMovies(movies);

searchBox.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(q));
  renderMovies(filtered);
});

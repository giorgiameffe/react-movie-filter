import { useState, useEffect } from 'react';
import movies from './data/movies.js';



function App() {

  // useState che corrisponde all'array di oggetti
  const [moviesList, setMoviesList] = useState(movies);
  // useState iniziale del campo select --> inizialmente è vuoto
  const [searchGenre, setSearchGenre] = useState('');

  // useEffect per filtrare i film per genere
  useEffect(() => {

    let result = movies;

    if (searchGenre !== '') {

      result = movies.filter(movie => movie.genre === searchGenre)
    }

    setMoviesList(result);

  }, [searchGenre])

  return (
    <>
      <h1>Movie Blog</h1>

      <section>
        <label>Cerca per genere</label>
        <div>
          <select value={searchGenre} onChange={event => setSearchGenre(event.target.value)}>
            <option value=''>---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
        </div>
      </section>

      {moviesList.map((movie, i) =>
        <section key={i}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </section>)}
    </>
  )
}

export default App;

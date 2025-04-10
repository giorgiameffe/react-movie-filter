import { useState, useEffect } from 'react';
import movies from './data/movies.js';



function App() {

  // useState iniziale che corrisponde all'array di oggetti
  const [moviesList, setMoviesList] = useState(movies);

  // useState iniziale per selezione genere del film --> inizialmente è vuoto
  const [searchGenre, setSearchGenre] = useState('');

  // useState iniziale per selezione titolo del film --> inizialmente è vuoto
  const [searchMovieTitle, setSearchMovieTitle] = useState('');

  // useEffect per filtrare i film per genere e per titolo
  useEffect(() => {

    let result = movies;

    if (searchGenre !== '') {

      result = movies.filter(movie => movie.genre === searchGenre);
    }

    if (searchMovieTitle !== '') {

      result = movies.filter(movie => {

        const lowercaseTitle = movie.title.toLowerCase();
        return lowercaseTitle.includes(searchMovieTitle);

      })
    }

    setMoviesList(result);

  }, [searchGenre, searchMovieTitle])

  return (
    <>
      <header>
        <h1>Movie Blog</h1>
      </header>

      <main>
        <div className='container'>
          <div className='input-container'>
            <label>Cerca per genere</label>
            <select value={searchGenre} onChange={event => setSearchGenre(event.target.value)}>
              <option value=''>---</option>
              <option>Fantascienza</option>
              <option>Thriller</option>
              <option>Romantico</option>
              <option>Azione</option>
            </select>

            <label>Cerca per titolo</label>
            <input type="text" value={searchMovieTitle} onChange={event => setSearchMovieTitle(event.target.value)} placeholder='Inserisci il titolo' />
          </div>


          <div className='raw'>
            {moviesList.map((movie, i) =>
              <section className='column' key={i}>
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
              </section>)}
          </div>
        </div>
      </main>
    </>
  )
}

export default App;

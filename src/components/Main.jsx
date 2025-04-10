// Hooks
import { useState, useEffect } from 'react';
// array di film
import movies from '../data/movies.js';

export default function Main() {

    // useState iniziale che corrisponde all'array di oggetti
    const [moviesList, setMoviesList] = useState(movies);

    // useState iniziale per selezione genere del film --> inizialmente è vuoto
    const [searchGenre, setSearchGenre] = useState('');

    // useState iniziale per selezione titolo del film --> inizialmente è vuoto
    const [searchMovieTitle, setSearchMovieTitle] = useState('');

    // useState inziale per l'aggiunta del titolo di un nuovo film --> inizialmente è vuoto
    const [newTitle, setNewTitle] = useState('');

    // useState inziale per l'aggiunta del genere di un nuovo film --> inizialmente è vuoto
    const [newGenre, setNewGenre] = useState('');

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

    // creazione nuovo film 
    const newFilm = {
        title: newTitle,
        genre: newGenre
    }

    // aggiungere nuovo film tramite spread operator
    const addNewMovie = event => {
        event.preventDefault();
        setMoviesList([...moviesList, newFilm]);
        setNewTitle('');
        setNewGenre('');
    }

    return (
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
                    <input
                        type="text"
                        value={searchMovieTitle}
                        onChange={event => setSearchMovieTitle(event.target.value)}
                        placeholder='Inserisci il titolo' />
                </div>

                <div className='raw'>
                    {moviesList.map((movie, i) =>
                        <section className='column' key={i}>
                            <h3>{movie.title}</h3>
                            <p>{movie.genre}</p>
                        </section>)}
                </div>

                <div className='input-container add-movie-section'>
                    <label>Cerca per genere</label>
                    <select value={newGenre} onChange={event => setNewGenre(event.target.value)}>
                        <option value=''>---</option>
                        <option>Fantascienza</option>
                        <option>Thriller</option>
                        <option>Romantico</option>
                        <option>Azione</option>
                    </select>

                    <form onSubmit={addNewMovie}>
                        <label>Aggiungi un nuovo film</label>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={event => setNewTitle(event.target.value)}
                            placeholder='Inserisci il titolo' />
                        <button className="btn">Aggiungi nuovo film</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
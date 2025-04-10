import movies from './data/movies.js';

function App() {

  return (
    <>
      <div>
        <h1>Movie Blog</h1>
      </div>
      {movies.map((movie, i) =>
        <section key={i}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </section>)}
    </>
  )
}

export default App;

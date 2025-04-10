
export default function MoviesList({ movies }) {

    return (
        <div className='raw'>
            {movies.map((movie, i) =>
                <section className='column' key={i}>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre}</p>
                </section>)}
        </div>
    )
}
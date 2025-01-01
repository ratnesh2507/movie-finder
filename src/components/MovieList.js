import Movie from "../components/Movie.js";
export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie, i) => (
        <Movie key={i} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../assets/data/movie_key";

function MovieCard({ movie }) {
  // console.log(movie)
  const navigate = useNavigate();

  return (
    <li className="movie-card" onClick={() => {navigate(`/Detail/${movie.id}`)}}>
      <span className="img-box">
        <img src={`${IMG_URL + movie.poster_path}`} alt={movie.title} />
      </span>
      <div className="text-box">
        <p className="title">{movie.title}</p>
        <p className="average">평점: {movie.vote_average}</p>
      </div>
    </li>
  )
}

export default MovieCard;
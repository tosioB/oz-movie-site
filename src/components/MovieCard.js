import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../assets/data/movie_key";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <li onClick={() => {navigate(`Detail/${movie.id}`)}}>
      <span className="img-box">
        <img src={`${IMG_URL + movie.poster_path}`} alt={movie.title} />
      </span>
      <p className="title">{movie.title}</p>
    </li>
  )
}

export default MovieCard;
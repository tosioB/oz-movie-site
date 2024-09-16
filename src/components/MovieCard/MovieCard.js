import { useNavigate } from "react-router-dom";
import "./style.scss";
import { IMG_URL } from "../../assets/data/movie_key";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => {
        navigate(`/Detail/${movie.id}`);
      }}
    >
      <span className="img-box">
        <img src={`${IMG_URL + movie.poster_path}`} alt={movie.title} />
      </span>
      <div className="text-box">
        <p className="title">{movie.title}</p>
        <p className="average">평점: {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieCard;

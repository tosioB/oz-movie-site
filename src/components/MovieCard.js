import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../assets/data/movie_key";

function MovieCard({ data }) {
  const navigate = useNavigate();

  return (
    <li onClick={() => {navigate(`Detail/${data.id}`)}}>
      <span className="img-box">
        <img src={`${IMG_URL + data.poster_path}`} alt={data.title} />
      </span>
      <p className="title">{data.title}</p>
    </li>
  )
}

export default MovieCard;
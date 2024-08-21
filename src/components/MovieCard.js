import { useNavigate } from "react-router-dom";

function MovieCard({ data }) {
  const navigate = useNavigate();

  return (
    <li onClick={() => {navigate(`Detail/${data.id}`)}}>
      <span className="img-box">
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
      </span>
      <p className="title">{data.title}</p>
      {/* <p>id: {data.id}</p> */}
    </li>
  )
}

export default MovieCard;
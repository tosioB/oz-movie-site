import { useState } from "react";
// import { useParams } from "react-router-dom";
import data from "../assets/data/movieDetailData.json"

function Detail() {
  const [movieData, setMovieData] = useState(data);
  console.log(movieData.genres)
  // const params = useParams();
  return (
    <>
      <div className="detail-page">
        <span className="bg-img-box">
          <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} />
        </span>
        <div className="movie-info">
          <span className="img-box">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
          </span>
          <div className="add-info">
            <h2 className="title">{data.title}</h2>
            <div className="info">
              <span>런타임: {data.runtime}분</span>
              <span>평점: {data.vote_average}</span>
              <ul className="genre">
                {
                  data.genres.map((genre, index) => {
                    return <li key={index}>{genre.name}</li>
                  })}
              </ul>
            </div>
            
            <p className="desc">{data.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail;
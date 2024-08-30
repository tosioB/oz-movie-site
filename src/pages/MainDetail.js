import { useLocation } from "react-router-dom";
import { IMG_URL } from "../assets/data/movie_key";

function MainDetail() {
  const location = useLocation();
  console.log(location)
  
  return (
    <div className="detail-page">
      <span className="bg-img-box">
        <img src={IMG_URL + location.state?.backdrop_path} />
      </span>
      <div className="movie-info">
        <span className="img-box">
          <img src={IMG_URL + location.state?.poster_path} alt={location.state?.title} />
        </span>
        <div className="add-info">
          <h2 className="title">{location.state?.title}</h2>
          <div className="info">
            {/* <span>런타임: {location.state.runtime}분</span> */}
            <span>평점: {location.state?.vote_average}</span>
            {/* <ul className="genre">
              {
                location.state.genres.map((genre, index) => {
                  return <li key={index}>{genre.name}</li>
                })
              }
            </ul> */}
          </div>
          
          <p className="desc">{location.state?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MainDetail;
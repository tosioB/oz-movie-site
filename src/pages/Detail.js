import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../assets/data/movie_key";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovies, fetchTopRatedMovies } from "../RTK/thunk";
import { selectorMovieId } from "../RTK/selector";

function Detail() {
  const movieParams = useParams();
  const movieData = useSelector(selectorMovieId(Number(movieParams.id))); // movieParams.id의 id는 App.js의 route 컴포넌트의 paht='Detail/:id'이다.

  return (
    <>
      <div className="detail-page">
        <span className="bg-img-box">
          <img src={IMG_URL + movieData.backdrop_path} />
        </span>
        <div className="movie-info">
          <span className="img-box">
            <img src={IMG_URL + movieData.poster_path} alt={movieData.title} />
          </span>
          <div className="add-info">
            <h2 className="title">{movieData.title}</h2>
            <div className="info">
              {/* <span>런타임: {movieData.runtime}분</span> */}
              <span>평점: {movieData.vote_average}</span>
              {/* <ul className="genre">
                {
                  movieData.genres.map((genre, index) => {
                    return <li key={index}>{genre.name}</li>
                  })
                }
              </ul> */}
            </div>
            
            <p className="desc">{movieData.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail;
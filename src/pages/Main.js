import { useState } from "react";
import data from "../assets/data/movieListData.json"
import MovieCard from "../components/MovieCard";

function Main() {
  const [movieData, setMovieData] = useState(data);
  // console.log(movieData.results)
  return (
    <>
      <div className="main-page">
        <div className="inner">
          <ul className="movie-list">
            {
              movieData.results.map((data) => {
                return (
                  <MovieCard key={data.id} data={data} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Main;
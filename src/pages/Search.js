import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectorSearchMovieTitle } from "../RTK/selector";
import { getRegExp } from "korean-regexp";
import MovieCard from "../components/MovieCard";

function Search() {
  const [searchParams] = useSearchParams(); // SearchBox.js에서 navigate로 가져온 movie 검색 값
  const movieTitle = searchParams.get('movie');
  const reg = getRegExp(movieTitle)
  const searchMovie = useSelector(selectorSearchMovieTitle(reg));

  /** 검색한 값과 일치하는 영화 리스트를 가져와야함
   * 한국어로 정규식을 만들때 유용하게 사용할 수 있는 라이브러리(korean-regexp)
   * 정규식 라이브러리 설치 - npm i korean-regexp
   */

  return (
    <>
      <div className="search-page">
        <div className="inner">
          <h2 className="section-title">검색결과</h2>
          {
            <ul className="movie-list">
              {
                searchMovie.map((movie) => {
                  return (
                    <MovieCard key={movie.id} movie={movie} />
                  )
                })
              }
            </ul>
          }
        </div>
      </div>
    </>
  )
}

export default Search;
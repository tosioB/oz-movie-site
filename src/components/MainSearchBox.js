import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { Scrollbar } from "swiper/modules";
import useDebounce from "../debounce/debounce";

function MainSearchBox({ setMainSearchBoxStatus }) {
  const [searchValue, setSearchValue] = useState("");
  // const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue)
  const debouncedSearchValue = useDebounce(searchValue, 1000)
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchData, setSearchData] = useState();
  console.log(searchData)
  
  const inputChangeValue = (e) => {
    setSearchValue(e.target.value)
  }
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    
    const options = {
      // method: 'GET',
      headers: {
        // accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    const fetchAPI = async () => {
      const searchAPI = await fetch(`https://api.themoviedb.org/3/search/movie?query=${debouncedSearchValue}`, options);
      const searchMovieData = await searchAPI.json();
      setSearchLoading(true);
      setSearchData(searchMovieData);
    }
    fetchAPI();
  }, [debouncedSearchValue]);

  return(
    <div className="main-search-box">
      <div className="container">
        <span className="inp-box">
          <input 
            type="text"
            placeholder="영화를 검색하세요."
            value={searchValue}
            onChange={inputChangeValue}
          />
        </span>
        <button type="button" className="icon-btn close-btn" onClick={() => (setMainSearchBoxStatus(prev => false))}>검색창 닫기</button>
        <ul className="search-movie-list">
          {
            searchLoading ? 
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={8}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {
                searchData?.results?.map((movie) => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <MovieCard movie={movie} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper> : null
          }
        </ul>
      </div>
    </div>
  )
}

export default MainSearchBox;
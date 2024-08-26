import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import useDebounce from "../debounce/debounce";

function SearchBox2({ setSearchBox2 }) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 1초 딜레이
  const navigate = useNavigate();

  // debouncedSearchTerm이 변경될 때마다 호출
  useEffect(() => {
    if (debouncedSearchTerm === "") {
      navigate("/");
    } else {
      navigate(`/Search?movie=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, navigate]);

  // input의 값이 변경될 때마다 호출
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // searchData, searchLoading, searchError - slice.js에서 initialState의 key값과 동일해야함
  // searchMovies - store.js에서 가져옴
  const { searchData, searchLoading, searchError } = useSelector((state) => state.searchMovies);

  return (
    <div className="search-box2">
      <div className="container">
        <span className="inp-box">
          <input 
            type="text"
            placeholder="영화를 검색하세요."
            value={searchTerm}
            onChange={handleChange}
          />
        </span>
        <button type="button" className="icon-btn close-btn" onClick={() => (setSearchBox2(prev => false))}>검색창 닫기</button>
        <ul className="search-movie-list">
          {
            searchLoading ? 'loading...' :
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
                searchData.map((movie) => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <MovieCard movie={movie} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchBox2
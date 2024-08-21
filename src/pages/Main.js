import { useState } from "react";
import data from "../assets/data/movieListData.json"
import MovieCard from "../components/MovieCard";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

function Main() {
  const [movieData, setMovieData] = useState(data);
  // console.log(movieData.results)
  return (
    <>
      <div className="main-page">
        <div className="inner">
          <h2 className="section-title">평점순 TOP 20</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper movie-swiper"
          >
            {
              movieData.results.map((data) => {
                return (
                  <SwiperSlide>
                    <span className="img-box">
                      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                    </span>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <h2 className="section-title">인기순</h2>
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
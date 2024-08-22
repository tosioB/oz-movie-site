import { useState } from "react";
import data from "../assets/data/movieListData.json"
import MovieCard from "../components/MovieCard";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [movieData, setMovieData] = useState(data);
  const navigate = useNavigate();
  // console.log(movieData.results)
  return (
    <>
      <div className="main-page">
        <div className="inner">
          <h2 className="section-title">평점순 TOP 20</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // navigation={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              512:{
                slidesPerView: 2,
              },
              768:{
                slidesPerView: 3,
              },
              1024:{
                slidesPerView: 4,
              },
              1280:{
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper movie-swiper"
          >
            {
              movieData.results.map((data) => {
                return (
                  <SwiperSlide key={data.id} onClick={() => {navigate(`Detail/${data.id}`)}}>
                    <span className="img-box">
                      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                    </span>
                  </SwiperSlide>
                )
              })
            }
            <div className="swiper-button-prev swiper-navigation">이전</div>
            <div className="swiper-button-next swiper-navigation">다음</div>
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
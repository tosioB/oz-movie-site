import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies, fetchNowPlayingMovies } from "../RTK/thunk";

function Main() {
  const dispatch = useDispatch();

  // popularData, popularLoading, popularError - slice.js에서 initialState의 key값과 동일해야함
  // topRatedData, topRatedLoading, topRatedError - slice.js에서 initialState의 key값과 동일해야함
  // nowPlayingData, nowPlayingLoading, nowPlayingError - slice.js에서 initialState의 key값과 동일해야함
  // topRatedMovies - store.js에서 가져옴
  const { popularData, popularLoading, popularError } = useSelector((state) => state.popularMovies);
  const { topRatedData, topRatedLoading, topRatedError } = useSelector((state) => state.topRatedMovies);
  const { nowPlayingData, nowPlayingLoading, nowPlayingError } = useSelector((state) => state.nowPlayingMovies);
  console.log(popularData)
  // console.log(topRatedData)

  useEffect(() => {
    dispatch(fetchPopularMovies()) // fetchPopularMovies - thunk.js에서 불러옴
    dispatch(fetchTopRatedMovies()) // fetchTopRatedMovies - thunk.js에서 불러옴
    dispatch(fetchNowPlayingMovies()) // fetchNowPlayingMovies - thunk.js에서 불러옴
  }, [dispatch])

  
  // const [topRatedMovies, setTopRatedMovies] = useState();
  // const [topRatedLoading, setTopRatedLoading] = useState(true);
  // const [nowPlayingMovies, setNowPlayingMovies] = useState();
  // const [nowPlayingLoading, setNowPlayingLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => { // Top Rated API 호출
  //   async function fetchData() {
  //     const topRatedRes = await fetch(`${TOP_RATED_API+API_KEY}`);
  //     const topRatedData = await topRatedRes.json();
  //     setTopRatedMovies(topRatedData);

  //     setTopRatedLoading(false)
  //   }
  //   fetchData()
  // }, []);
  
  // useEffect(() => { // Now Playing API 호출
  //   async function fetchData() {
  //     const nowPlayingRes = await fetch(`${NOW_PLAYING_API+API_KEY}`);
  //     const nowPlayingData = await nowPlayingRes.json();
  //     setNowPlayingMovies(nowPlayingData);

  //     setNowPlayingLoading(false)
  //   }
  //   fetchData()
  // }, []);
  
  return (
    <>
      <div className="main-page">
        <div className="inner">
          {/* 지금 뜨는 영화들 */}
          <section>
            <h2 className="section-title">지금 뜨는 영화들</h2>
            {
              popularLoading ? 'loading...' :
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
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
                  popularData.map((movie) => {
                    return (
                      <SwiperSlide key={movie.id}>
                        <MovieCard movie={movie} />
                      </SwiperSlide>
                    )
                  })
                }
                <div className="swiper-button-prev swiper-navigation">이전</div>
                <div className="swiper-button-next swiper-navigation">다음</div>
              </Swiper>
            }
          </section>

          {/* 높은 평점의 영화들 */}
          <section>
            <h2 className="section-title">높은 평점의 영화들</h2>
            {
              topRatedLoading ? 'loading...' :
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
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
                  topRatedData.map((movie) => {
                    return (
                      <SwiperSlide key={movie.id}>
                        <MovieCard movie={movie} />
                      </SwiperSlide>
                    )
                  })
                }
                <div className="swiper-button-prev swiper-navigation">이전</div>
                <div className="swiper-button-next swiper-navigation">다음</div>
              </Swiper>
            }
          </section>
            
          {/* NOW PLAYING */}
          <section>
            <h2 className="section-title">Now Playing</h2>
              {
                nowPlayingLoading ? 'loading...' :
                <ul className="movie-list">
                  {
                    nowPlayingData.map((movie) => {
                      return (
                        <MovieCard key={movie.id} movie={movie} />
                      )
                    })
                  }
                </ul>
              }
          </section>
        </div>
      </div>
    </>
  )
}

export default Main;
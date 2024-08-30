import { useEffect, useRef, useState } from "react";
import MovieCard from "../components/MovieCard";
const token1 = process.env.REACT_APP_API_TOKEN1;

function UpcomingMovie() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [page, setPage] = useState(1); // 페이지 번호 상태 추가
  const [hasMore, setHasMore] = useState(true); // 추가 데이터가 있는지 여부
  const viewRef = useRef()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token1}`
      }
    };
    
    const fetchAPI = async (pageNumber) => {
      setUpcomingLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=ko&page=${pageNumber}`, options);
        const data = await response.json();
        setUpcomingMovies(prevMovies => [...prevMovies, ...data.results]); // 기존 데이터에 추가
        setHasMore(data.page < data.total_pages); // 더 많은 데이터가 있는지 체크
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
      } finally {
        setUpcomingLoading(false);
      }
    } 
    fetchAPI(page);
  }, [page]);

  useEffect(() => {
    const observerCallback = (entries) => {
      if (entries[0].isIntersecting && !upcomingLoading && hasMore) {
        setPage(prevPage => prevPage + 1); // 다음 페이지 로딩
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });

    if (viewRef.current) {
      observer.observe(viewRef.current);
    }

    return () => {
      if (viewRef.current) {
        observer.unobserve(viewRef.current);
      }
    };
  }, [upcomingLoading, hasMore]);

  return (
    <div className="upcoming-page">
      <div className="inner">
        {
          upcomingLoading && page === 1 ? 'Loading...' : 
          <ul className="movie-list">
            {
              upcomingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            }
          </ul>
        }
        <div ref={viewRef} style={{height: "5px"}}></div>
        {upcomingLoading && page > 1 && <p>Loading more...</p>}
      </div>
    </div>
  )
}

export default UpcomingMovie;
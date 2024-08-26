import { createAsyncThunk } from "@reduxjs/toolkit";
import { POPULAR_API, TOP_RATED_API, NOW_PLAYING_API, SEARCH_API } from "../assets/data/movie_key";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchPopularMovies = createAsyncThunk( // createAsyncThunk - Redux Toolkit에서 비동기 작업을 처리할 때 사용하는 함수
  'movies/fetchPopularMovies', // 이 작업을 식별하는 문자열 액션 타입
  async () => { // 비동기 작업을 수행하는 함수
    const popularResAPI = await fetch(`${POPULAR_API}&api_key=${apiKey}`);
    const popularData = await popularResAPI.json();
    return popularData.results;
  }
)

export const fetchTopRatedMovies = createAsyncThunk( // createAsyncThunk - Redux Toolkit에서 비동기 작업을 처리할 때 사용하는 함수
  'movies/fetchTopRatedMovies', // 이 작업을 식별하는 문자열 액션 타입
  async () => { // 비동기 작업을 수행하는 함수
    const topRatedResAPI = await fetch(`${TOP_RATED_API}&api_key=${apiKey}`);
    const topRatedData = await topRatedResAPI.json();
    return topRatedData.results;
  }
)

export const fetchNowPlayingMovies = createAsyncThunk( // createAsyncThunk - Redux Toolkit에서 비동기 작업을 처리할 때 사용하는 함수
  'movies/fetchNowPlayingMovies', // 이 작업을 식별하는 문자열 액션 타입
  async () => { // 비동기 작업을 수행하는 함수
    const nowPlayingsAPI = await fetch(`${NOW_PLAYING_API}&api_key=${apiKey}`);
    const nowPlayingData = await nowPlayingsAPI.json();
    return nowPlayingData.results;
  }
)

export const fetchSearchMovies = createAsyncThunk( // createAsyncThunk - Redux Toolkit에서 비동기 작업을 처리할 때 사용하는 함수
  'movies/fetchSearchMovies', // 이 작업을 식별하는 문자열 액션 타입
  async () => { // 비동기 작업을 수행하는 함수
    const searchedAPI = await fetch(`${SEARCH_API}&api_key=${apiKey}`);
    const searchedData = await searchedAPI.json();
    return searchedData.results;
  }
)
/** Redux Toolkit - fetch
 * 1. Thunk 정의
 * - API를 호출하고 결과를 처리하는 비동기 액션을 정의
 * 
 * 2. Slice 정의
 * - 상태관리, 초기 상태 정의, 리듀서 정의
 * - extraReducers를 통해 thunk의 상태에 따라 상태를 업데이트(pending, fulfilled, rejected)
 * pending - 처리중
 * fulfilled - 불러오기 성공
 * rejected - 불러오기 실패
 * 
 * 3. Store 정의
 * 애플리케이션의 전역 상태를 관리
 * 
 * 4. Provider 설정
 * index.js에서 Provider를 설정하여 전역 상태를 모든 컴포넌트에서 사용할 수 있게 한다.
 * <Provider store={store}>
 *   <App />
 * </Provider>
 * 
 * 5. Seletor 설정(선택사항 - 안써도 사용할 수 있음.)
 * Detail, Bookmark 페이지에서 영화 데이터를 전부 가져오는것은 비효율적이다.
 * Detail페이지는 하나의 영화 리스트만 호출하기 위해 사용
 * Bookmark페이지는 사용자가 마킹한 영화 리스트만 호출하기 위해 사용
 * 필요한 영화만 선택하여 상태를 반환하기 때문에 효율성이 좋다.
 * 성능 최적화에 좋다.
 * 
 * 6. React 컴포넌트에서 사용하기
 * const dispatch = useDispatch();
 * const { data } = useSelector((state) => state.store에_있는_리듀서_키)
 * useEffect(() => {
 *   dispatch(thunk에_있는_함수());
 * }, [dispatch]);
 */
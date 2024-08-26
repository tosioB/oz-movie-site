import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies, fetchTopRatedMovies, fetchNowPlayingMovies, fetchSearchMovies } from "./thunk";

export const popularMovieSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    popularData: [], // 영화의 초기값을 담아줄 빈 배열
    popularLoading: true, // 호출하는 동안의 로딩상태
    popularError: null,
  },
  reducers: {}, // reducers - 동기적으로 상태를 변경할 때 사용
  extraReducers: (builder) => { // extraReducers - 비동기적으로 상태를 변경할 때 사용
    builder
      // fetchPopularMovies - thunk.js에서 가져옴
      .addCase(fetchPopularMovies.pending, (state) => { // pending - 처리중
        state.popularLoading = true; // createSlice의 initialState loading은 true
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => { // fulfilled - 불러오기 성공
        state.popularData = action.payload;
        state.popularLoading = false; // createSlice의 initialState loading은 false
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => { // reject - 불러오기 실패
        state.popularLoading = true; // createSlice의 initialState loading은 true
        state.popularError = action.error.message;
      })
  }
})

export const topRatedMovieSlice = createSlice({
  name: 'topRatedMovies',
  initialState: {
    topRatedData: [], // 영화의 초기값을 담아줄 빈 배열
    topRatedLoading: true, // 호출하는 동안의 로딩상태
    topRatedError: null,
  },
  reducers: {}, // reducers - 동기적으로 상태를 변경할 때 사용
  extraReducers: (builder) => { // extraReducers - 비동기적으로 상태를 변경할 때 사용
    builder
      // fetchTopRatedMovies - thunk.js에서 가져옴
      .addCase(fetchTopRatedMovies.pending, (state) => { // pending - 처리중
        state.topRatedLoading = true; // createSlice의 initialState loading은 true
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => { // fulfilled - 불러오기 성공
        state.topRatedData = action.payload;
        state.topRatedLoading = false; // createSlice의 initialState loading은 false
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => { // reject - 불러오기 실패
        state.topRatedLoading = true; // createSlice의 initialState loading은 true
        state.topRatedError = action.error.message;
      })
  }
})

export const nowPlayingMovieSlice = createSlice({
  name: 'nowPlayingMovies',
  initialState: {
    nowPlayingData: [], // 영화의 초기값을 담아줄 빈 배열
    nowPlayingLoading: true, // 호출하는 동안의 로딩상태
    nowPlayingError: null,
  },
  reducers: {}, // reducers - 동기적으로 상태를 변경할 때 사용
  extraReducers: (builder) => { // extraReducers - 비동기적으로 상태를 변경할 때 사용
    builder
      // fetchNowPlayingMovies - thunk.js에서 가져옴
      .addCase(fetchNowPlayingMovies.pending, (state) => { // pending - 처리중
        state.nowPlayingLoading = true; // createSlice의 initialState loading은 true
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => { // fulfilled - 불러오기 성공
        state.nowPlayingData = action.payload;
        state.nowPlayingLoading = false; // createSlice의 initialState loading은 false
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => { // reject - 불러오기 실패
        state.nowPlayingLoading = true; // createSlice의 initialState loading은 true
        state.nowPlayingError = action.error.message;
      })
  }
})

export const searchMovieSlice = createSlice({
  name: 'searchMovies',
  initialState: {
    searchData: [], // 영화의 초기값을 담아줄 빈 배열
    searchLoading: true, // 호출하는 동안의 로딩상태
    searchError: null,
  },
  reducers: {}, // reducers - 동기적으로 상태를 변경할 때 사용
  extraReducers: (builder) => { // extraReducers - 비동기적으로 상태를 변경할 때 사용
    builder
      // fetchSearchMovies - thunk.js에서 가져옴
      .addCase(fetchSearchMovies.pending, (state) => { // pending - 처리중
        state.searchLoading = true; // createSlice의 initialState loading은 true
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => { // fulfilled - 불러오기 성공
        state.searchData = action.payload;
        state.searchLoading = false; // createSlice의 initialState loading은 false
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => { // reject - 불러오기 실패
        state.searchLoading = true; // createSlice의 initialState loading은 true
        state.searchError = action.error.message;
      })
  }
})

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
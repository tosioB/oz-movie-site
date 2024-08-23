import { configureStore } from "@reduxjs/toolkit";
import { nowPlayingMovieSlice, topRatedMovieSlice } from "./slice";

export const store = configureStore({
  reducer: {
    topRatedMovies: topRatedMovieSlice.reducer, // topRatedMovieSlice - slice.js에서 가져옴
    nowPlayingMovies: nowPlayingMovieSlice.reducer, // nowPlayingMovieSlice - slice.js에서 가져옴
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
 * 5. React 컴포넌트에서 사용하기
 * const dispatch = useDispatch();
 * const { data } = useSelector((state) => state.store에_있는_리듀서_키)
 * useEffect(() => {
 *   dispatch(thunk에_있는_함수());
 * }, [dispatch]);
 */
import { createSelector } from "@reduxjs/toolkit";

export const selectorMovieId = (movieId) => createSelector(
  // popularMovies - store.js에서 가져옴
  // popularData - slice.js에서 popularData 가져옴
  state => state.popularMovies.popularData,

  // topRatedMovies - store.js에서 가져옴
  // topRatedData - slice.js에서 topRatedData 가져옴
  state => state.topRatedMovies.topRatedData,

  // nowPlayingMovies - store.js에서 가져옴
  // nowPlayingData - slice.js에서 topRatedData 가져옴
  state => state.nowPlayingMovies.nowPlayingData,

  (popularMovies, topRatedMovies, nowPlayingMovies) => { // 이곳의 topRatedData는 위 state => state.topRatedData,코드이다.
    const newArray = [...popularMovies, ...topRatedMovies, ...nowPlayingMovies] // topRatedMovies와 nowPlayingMovies를 하나의 배열로 출력(따로 했더니 오류 발생함.)
    return newArray.find(e => e.id === movieId);
  }
)

export const selectorSearchMovieTitle = (reg) => createSelector(
  state => state.popularMovies.popularData,
  state => state.topRatedMovies.topRatedData,
  state => state.nowPlayingMovies.nowPlayingData,

  (popularMovies, topRatedMovies, nowPlayingMovies) => {
    const newArray = [...popularMovies, ...topRatedMovies, ...nowPlayingMovies];

    /** new Set()
     * 중복된 id 값을 추적하기 위한 Set 객체를 생성 
     * Set은 중복된 값을 허용하지 않기 때문에, 각 id 값을 추적하는 데 유용하다.
     */
    const seen = new Set();
    const removeDupArray = newArray.filter((e) => {
      if(!seen.has(e.id)) {// 현재 id가 Set에 이미 존재하는지 확인
        seen.add(e.id);// id가 존재하지 않는다면, Set에 id를 추가
        return true; // 요소를 필터링된 배열에 포함
      }
      return false // id가 이미 존재한다면, 요소를 필터링된 배열에 포함시키지 않는다.
    });

    // 중복된 id값 필터링 후 다시 타이틀 검색 필터링
    const titleFilterArray = removeDupArray.filter((e) => e.title.match(reg));

    return titleFilterArray;
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
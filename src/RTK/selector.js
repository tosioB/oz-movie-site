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
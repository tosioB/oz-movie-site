import { createSelector } from "@reduxjs/toolkit";

export const selectorMovieId = (movieId) => createSelector(
  // topRatedMovies - store.js에서 가져옴
  // topRatedData - slice.js에서 topRatedData 가져옴
  state => state.topRatedMovies.topRatedData,

  // nowPlayingMovies - store.js에서 가져옴
  // nowPlayingData - slice.js에서 topRatedData 가져옴
  state => state.nowPlayingMovies.nowPlayingData,

  (topRatedMovies, nowPlayingMovies) => { // 이곳의 topRatedData는 위 state => state.topRatedData,코드이다.
    const newArray = [...topRatedMovies, ...nowPlayingMovies] // topRatedMovies와 nowPlayingMovies를 하나의 배열로 출력(따로 했더니 오류 발생함.)
    return newArray.find(e => e.id === movieId);
  }
)
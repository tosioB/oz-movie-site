import { Route, Routes } from "react-router-dom";
// 깃연결 확인
// pages
import Main from "./pages/Main/Main";
// import Detail from "./pages/Detail";
// import Search from "./pages/Search";
// import Bookmark from "./pages/Bookmark/Bookmark";
import Mypage from "./pages/Mypage/Mypage";
import Login from "./pages/Join/Login";
import SignUp from "./pages/SignUp/SignUp";
import UpcomingMovie from "./pages/UpcomingMovie/UpcomingMovie";

// components
// import MainDetail from "./pages/MainDetail";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";
import Bookmark from "./pages/Bookmark/Bookmark";

function App() {
  return (
    <>
      <Header />
      <div className="movie-site">
        {/* <nav>
          <Link to="/">Main</Link>
          <Link to="/Detail">Detail</Link>
          <Link to="/Bookmark">Bookmark</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Mypage" element={<Mypage />} />

          {/* 검색이 두개인 이유!!! */}
          {/* TMDB Popular, Now Playing, Top Rated 호출(Search, Detail)
              - Redux Toolkit 사용해서 호출, 전역으로 영화 데이터를 관리
              - selector을 사용해 검색페이지와 상세페이지에 모든 영화데이터를 불러오는것이 아닌
              - 화면에 필요한 데이터만 호출 
              (Redux Toolkit - thunk, slice, store, selector 학습 목적)
          */}
          {/* <Route path="/Search" element={<Search />} /> */}
          <Route path="/Detail/:id" element={<Detail />} />

          {/* TMDB Search api 사용(UpcomingMovie, MainDetail)
              - state를 사용해 클릭한 영화 정보를 상세페이지에 넘기고 상세페이지에서 useLocation을 사용해 영화 정보를 받아옴
              (Search api, state, useLocation 학습 목적)
          */}
          {/* <Route path="/MainDetail" element={<MainDetail />} /> */}
          <Route path="/UpcomingMovie" element={<UpcomingMovie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

/** 메모
 * 다크모드
 * 무한스크롤
 * 탑버튼
 * 검색 api 상세페이지 따로 만들기(state)
 * ...
 */

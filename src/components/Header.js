import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import "../assets/style/header.scss";
import MainSearchBox from "./MainSearchBox";

function Header() {
  const [searchBox, setSearchBox] = useState(false);
  const [mainSearchBoxStatus, setMainSearchBoxStatus] = useState(false);

  const [user, setUser] = useState(null);

  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link to="/" className="logo">DVING</Link>
        </h1>
        <div className="pages">
          <Link to="/Bookmark" className="bookmark-btn icon-btn">내가 찜한 영화</Link>
          <button type="button" className="search-btn icon-btn" onClick={() => (setSearchBox(true))}>검색</button>
          <button type="button" className="search-btn icon-btn" onClick={() => (setMainSearchBoxStatus(true))}>검색</button>
          <Link to="/UpcomingMovie" className="btn">개봉예정작</Link>
          {
            user ? (
            <>
              <Link to="/Mypage" className="mypage-btn icon-btn">마이페이지</Link>
              <button className="login-btn join-btn btn">로그아웃</button>
            </>
            ) : 
            (
              <>
                <Link to="/SignUp" className="sign-up-btn join-btn btn">회원가입</Link>
                <Link to="/Login" className="login-btn join-btn btn">로그인</Link>
              </>
            )
          }
        </div>
      </div>
      {
        searchBox ? <SearchBox setSearchBox={setSearchBox} /> : null
      }
      {
        mainSearchBoxStatus ? <MainSearchBox setMainSearchBoxStatus={setMainSearchBoxStatus} /> : null
      }
    </header>
  )
}

export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import "../assets/style/header.scss";

function Header() {
  const [searchBox, setSearchBox] = useState(false)

  return (
    <>
      <header className="header">
        <div className="inner">
          <h1 className="logo">
            <Link to="/" className="logo">DVING</Link>
          </h1>
          <div className="pages">
            <Link to="/Login" className="login-btn join-btn btn">Login</Link>
            <Link to="/SignUp" className="sign-up-btn join-btn btn">SignUp</Link>
            <Link to="/Bookmark" className="bookmark-btn icon-btn">내가 찜한 영화</Link>
            <button type="button" className="search-btn icon-btn" onClick={() => (setSearchBox(prev => true))}>검색</button>
          </div>
        </div>
        {
          searchBox ? <SearchBox setSearchBox={setSearchBox} /> : null
        }
      </header>
    </>
  )
}

export default Header;
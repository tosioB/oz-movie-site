import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="inner">
          <h1>
            <Link to="/" className="logo">로고</Link>
          </h1>
          <div className="pages">
            <Link to="/Bookmark" className="bookmark-btn btn">Bookmark</Link>
            <Link to="/Login" className="login-btn join-btn btn">Login</Link>
            <Link to="/SignUp" className="sign-up-btn join-btn btn">SignUp</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
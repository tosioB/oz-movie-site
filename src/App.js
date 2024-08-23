import { Link, Route, Routes } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Bookmark from "./pages/Bookmark";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// components
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="movie-site">
        <Header />
        {/* <nav>
          <Link to="/">Main</Link>
          <Link to="/Detail">Detail</Link>
          <Link to="/Bookmark">Bookmark</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Bookmark" element={<Bookmark />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
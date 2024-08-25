import { Route, Routes } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// components
import Header from "./components/Header";

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
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Bookmark" element={<Bookmark />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
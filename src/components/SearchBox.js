import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox({ setSearchBox }) {
  // const [searchInp, setSearchInp] = useState("");
  const navigate = useNavigate();

  const handleSearchPage = (e) => {
    if (e.target.value === "") { // 검색창이 빈 문자열이면 메인으로 이동
      navigate("/")
    } else {
      navigate(`/Search?movie=${e.target.value}`); // Search 페이지로 이동 + SearchParams 검색 설정
    }
    
  }

  return (
    <div className="search-box">
      <span className="inp-box" onChange={handleSearchPage}>
        <input type="text" />
      </span>
      <p className="search-exp">검색어를 입력하세요.</p>
      <button type="button" className="icon-btn close-btn" onClick={() => (setSearchBox(prev => false))}>검색창 닫기</button>
    </div>
  )
}

export default SearchBox;
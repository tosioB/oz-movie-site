import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../debounce/debounce";

function SearchBox({ setSearchBox }) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 1초 딜레이
  const navigate = useNavigate();

  // debouncedSearchTerm이 변경될 때마다 호출
  useEffect(() => {
    if (debouncedSearchTerm === "") {
      navigate("/");
    } else {
      navigate(`/Search?movie=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  // input의 값이 변경될 때마다 호출
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-box">
      <span className="inp-box">
        <input 
          type="text"
          placeholder="영화를 검색하세요."
          value={searchTerm}
          onChange={handleChange}
        />
      </span>
      <button type="button" className="icon-btn close-btn" onClick={() => (setSearchBox(prev => false))}>검색창 닫기</button>
    </div>
  )
}

export default SearchBox;
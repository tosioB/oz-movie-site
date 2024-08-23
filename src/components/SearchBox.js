function SearchBox({ setSearchBox }) {
  return (
    <div className="search-box">
      <span className="inp-box">
        <input type="text" />
      </span>
      <p className="search-exp">검색어를 입력하세요.</p>
      <button type="button" className="icon-btn close-btn" onClick={() => (setSearchBox(prev => false))}>검색창 닫기</button>
    </div>
  )
}

export default SearchBox;
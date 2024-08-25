function Login() {
  return (
    <div className="login-page join-page">
      <div className="join-box">
        <h2 className="title">로그인</h2>
        <form>
          <div className="form-box">
            <span className="inp-box">
              <input type="text" name="email" className="email" placeholder="이메일을 입력하세요." />
              {/* <p className="msg">메시지</p> */}
            </span>
            <span className="inp-box">
              <input type="password" name="password" className="password" placeholder="비밀번호를 입력하세요." />
              {/* <p className="msg">메시지</p> */}
            </span>
            <button type="submit" className="login-btn join-btn" onClick={(e) => {
              e.preventDefault();
            }}>로그인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
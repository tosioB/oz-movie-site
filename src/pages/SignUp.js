function SignUp() {
  return (
    <div className="sign-up-page join-page">
      <div className="join-box">
        <h2 className="title">회원가입</h2>
        <form autocomplete="off">
          <div className="form-box">
            <span className="inp-box">
              <input type="text" name="name" className="name" placeholder="이름을 입력하세요." />
              {/* <p className="msg">메시지</p> */}
            </span>
            <span className="inp-box">
              <input type="email" name="email" className="email" placeholder="이메일을 입력하세요." />
              {/* <p className="msg">메시지</p> */}
            </span>
            <span className="inp-box">
              <input type="password" name="password" className="password" placeholder="비밀번호를 입력하세요." />
              {/* <p className="msg">메시지</p> */}
            </span>
            <span className="inp-box">
              <input type="password" name="re-password" className="re-password" placeholder="비밀번호를 다시 입력하세요." />
              {/* <p className="msg">메시지</p> */}
            </span>
            <button type="submit" className="sign-up-btn join-btn" onClick={(e) => {
              e.preventDefault();
            }}>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
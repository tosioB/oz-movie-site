import { useForm } from "react-hook-form";
import "./style.scss";
import "../../assets/style/join.scss";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="login-page join-page">
      <div className="join-box">
        <h2 className="title">로그인</h2>
        <form>
          <div className="form-box">
            <span className="inp-box">
              <input
                type="email"
                name="email"
                className="email"
                placeholder="이메일을 입력하세요."
                {...register("email", {
                  required: "이메일은 필수 입력 항목입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "유효한 이메일 주소를 입력하세요."
                  }
                })}
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message}</p>
              )}
            </span>
            <span className="inp-box">
              <input
                type="password"
                name="password"
                className="password"
                placeholder="비밀번호를 입력하세요."
                {...register("password", {
                  required: "비밀번호는 필수 입력 항목입니다."
                })}
              />
              {errors.password && (
                <p className="error-msg">{errors.password.message}</p>
              )}
            </span>
            <button type="submit" className="login-btn join-btn">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

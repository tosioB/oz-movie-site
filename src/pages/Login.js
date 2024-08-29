import { useForm } from 'react-hook-form';
import { supabase } from '../supabaseClient.js'; // Supabase 클라이언트 가져오기
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const { email, password } = data;
    
    // Supabase의 signInWithPassword 메서드를 사용하여 로그인 시도
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      alert(error.message);
    } else {
      navigate("/");
      alert('로그인 성공!');
      // 로그인 성공 후 페이지 리다이렉션이나 다른 액션을 추가할 수 있다.
    }
  };

  return (
    <div className="login-page join-page">
      <div className="join-box">
        <h2 className="title">로그인</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-box">
            <span className="inp-box">
              <input
                type="email"
                name="email"
                className="email"
                placeholder="이메일을 입력하세요."
                {...register('email', { 
                  required: '이메일은 필수 입력 항목입니다.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: '유효한 이메일 주소를 입력하세요.'
                  }
                })}
              />
              {errors.email && <p className="error-msg">{errors.email.message}</p>}
            </span>
            <span className="inp-box">
              <input
                type="password"
                name="password"
                className="password"
                placeholder="비밀번호를 입력하세요."
                {...register('password', { 
                  required: '비밀번호는 필수 입력 항목입니다.',
                })}
              />
              {errors.password && <p className="error-msg">{errors.password.message}</p>}
            </span>
            <button type="submit" className="login-btn join-btn">로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

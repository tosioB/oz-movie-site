import { useForm } from 'react-hook-form';

function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // 비밀번호 확인 필드의 일치 여부를 체크
  const password = watch("password");

  return (
    <div className="sign-up-page join-page">
      <div className="join-box">
        <h2 className="title">회원가입</h2>
        <form>
          <div className="form-box">
            <span className="inp-box">
              <input
                type="text"
                name="name"
                className="name"
                placeholder="이름을 입력하세요."
                {...register('name', { required: '이름은 필수 입력 항목입니다.' })}
              />
              {errors.name && <p className="error-msg">{errors.name.message}</p>}

            </span>
            <span className="inp-box">
              <input
                type="email"
                name="email"
                className="email"
                placeholder="이메일을 입력하세요."
                {...register('email', { 
                  required: '이메일은 필수 입력 항목입니다.',
                  pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
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
                {
                  ...register('password', { 
                    required: '비밀번호는 필수 입력 항목입니다.',
                    minLength: {
                        value: 6,
                        message: '비밀번호는 최소 6자리 이상이어야 합니다.'
                    }
                  })
                }
              />
              {errors.password && <p className="error-msg">{errors.password.message}</p>}
            </span>
            <span className="inp-box">
              <input
                type="password"
                name="re-assword"
                className="re-password"
                placeholder="비밀번호를 다시 입력하세요."
                {
                  ...register('confirmPassword', { 
                    required: '비밀번호 확인은 필수 입력 항목입니다.',
                    validate: value => value === password || '비밀번호가 일치하지 않습니다.'
                  })
                }
              />
              {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword.message}</p>}
            </span>
            <button className="sign-up-btn join-btn">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
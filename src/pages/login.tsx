import '~/styles/water.css'

export default function Register() {
  const navigate = useNavigate()
  const go = () => {
    navigate('/register')
  }
  const goHome = () => {
    navigate('/')
  }
  return (
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2>登陆</h2>
          <form>
            <div className="inputBox">
              <input type="text" placeholder="学号" />
            </div>
            <div className="inputBox">
              <input type="password" placeholder="密码" />
            </div>
            <div className="inputBox">
              <input type="submit" value="登陆" onClick={() => goHome()}/>
            </div>
          </form>
        </div>
      </div>
      <span className="btns signup"></span>
      <button onClick={() => go()} className="btns"><p className="text-5">注册</p></button>
    </div>
  )
}

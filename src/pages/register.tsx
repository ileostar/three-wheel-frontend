import '~/styles/reg.css'
import CustomSelect from '~/components/Select'

export default function Index() {
  const navigate = useNavigate()
  const go = () => {
    navigate('/login')
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="regContainer">
        <div className="drop">
          <div className="content">
            <h2>注册</h2>
            <form>
              <div className="inputBox">
                <input type="text" placeholder="学号（11位数字）" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="姓名（1-7个字符）" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="密码（8-15个字符或数字组成）" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="确认密码" />
              </div>
              <div className="Box flex flex-between gap-4">
                <div className="selectBox flex-1 flex justify-center pt-2.5 text-center">
                  <div className="text-center">
                    <CustomSelect
                      tips="性别"
                      options={['男', '女']}
                    />
                  </div>
                </div>
                  <div className="selectBox flex-1 flex justify-center pt-2.5 text-center">
                  <div className="text-center">
                    <CustomSelect
                      tips="年级"
                      options={['2020级', '2021级', '2022级', '2023级']}
                    />
                    </div>
                </div>
              </div>
              <div className="inputBox">
                <input type="password" placeholder="邮箱" />
              </div>
              <div className="inputBox">
                <input type="submit" value="注册" />
              </div>
            </form>
          </div>
        </div>
        <span className="btns signup"></span>
        <button onClick={() => go()} className="btns"><p className="text-5">去登陆</p></button>
      </div>
    </div>
  )
}

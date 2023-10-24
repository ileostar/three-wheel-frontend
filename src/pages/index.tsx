import '~/styles/index.css'
import BasicTable from '~/components/BasicTable'
import VisualData from '~/components/VisualData'

export default function Index() {
  const [active, setActive] = useState(0)

  const handleClick = (index: number) => {
    setActive(index)
  }

  const clickBtn = (index: number) => {
    return active === index ? 'rd-2 bg-green-100/40 opacity-100' : ''
  }
  const renderContent = () => {
    if (active === 0)
      return <BasicTable />

    else if (active === 1)
      return <VisualData />
  }

  return (
    <div className="box-border flex justify-between items-center flex-col w-screen h-screen overflow-hidden px-8">
      <div className="box-border w-fullrd-8 mb-5 text-5 font-400 w-full h-15">
        <div className="flex justify-between px-5 rd-5 h-15 bg-white-100/60 text-start border-white-100/50 border-1 g-glossy">
          <div className="flex items-center h-15">
            <span className="i-streamline-emojis-crazy-face text-3xl mr-3 inline-block text-gray-700 h-10 w-10"></span>
            <p className="mr-5 font-bold text-gray-700">用户管理页面</p>
          </div>
          <div className="flex items-center h-15">
            <button className="i-streamline-emojis-cross-mark mr-5 text-gray-700 h-9 w-9" title="退出登陆" />
          </div>
        </div>
      </div>
      <div className="box-border w-full h-full flex-1">
        <div className=" overflow-hidden box-border flex items-center justify-center flex-between w-full h-full">
          <div className="box-border rd-5 mr-5 bg-white-100/60 w-20 h-full flex justify-start items-center flex-col p-5 box-border border-2 border-white-100/50 g-glossy">
            <button className={`h-12 w-12 i-streamline-emojis-clipboard icon-btn icon-btn ${clickBtn(0)}`}
              onClick={() => handleClick(0)} title="基础表格"/>
            <button className={`h-12 w-12 mt-4 i-streamline-emojis-bar-chart icon-btn ${clickBtn(1)}`}
              onClick={() => handleClick(1)} title="可视化数据"/>
          </div>
          <main className="box-border overflow-hidden rd-5 bg-white-100/60 flex w-full h-full justify-center items-center border-2 border-white-100/50 g-glossy">
              {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

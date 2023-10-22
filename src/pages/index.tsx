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
    <div className="flex justify-center items-center flex-col w-full h-full">
      <div className="px-5 w-fullrd-8 m-5 text-5 px-5 font-400 w-full h-15">
        <div className="flex justify-between rd-8 h-15 bg-blue-100/50 text-start px-6 border-blue-100/50">
          <div className="flex items-center h-15">
            <span className="i-carbon-pedestrian text-4xl inline-block"></span>
            <p className="mr-5 font-bold">用户管理页面</p>
          </div>
          <div className="flex items-center h-15">
            <button className="mr-5 font-bold">退出登录</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-between w-full h-full p-7 p-t-0">
        <div className="rd-8 mr-5 bg-blue-100/50 w-23 h-full flex justify-start items-center flex-col p-5 box-border border-2 border-blue-100/50">
          <button className={`h-13 w-13 i-streamline-emojis-confetti-ball icon-btn icon-btn ${clickBtn(0)}`}
            onClick={() => handleClick(0)} title="基础表格"/>
          <button className={`h-13 w-13 mt-4 i-streamline-emojis-bar-chart icon-btn ${clickBtn(1)}`}
            onClick={() => handleClick(1)} title="可视化数据"/>
        </div>
        <main className="rd-8 bg-blue-100/50 flex w-full h-full justify-center items-center border-2 border-blue-100/50">
            {renderContent()}
        </main>
      </div>
    </div>
  )
}

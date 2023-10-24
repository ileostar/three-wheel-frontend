import MyChartComponent from './MyChart'
import PieChart from './PieChart'

export default function Footer() {
  return (
    <div className="flex justify-center overflow-hidden flex-between h-full w-full p-8 gap-8">
      <div className="flex-1 flex rd-5 p-4 justify-center items-center visualBox">
        <MyChartComponent />
      </div>
      <div className="flex-1 rd-5 visualBox">
        <PieChart />
      </div>
    </div>
  )
}

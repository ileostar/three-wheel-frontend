import MyChartComponent from './MyChart'
import PieChart from './PieChart'

export default function Footer() {
  return (
    <div className="box-border grid grid-cols-30 flex-between h-full w-full p-8 gap-8">
      <div className="col-span-17 overflow-auto flex rd-5 p-4 justify-center items-center visualBox">
        <MyChartComponent />
      </div>
      <div className="col-span-13 overflow-auto rd-5 visualBox">
        <PieChart />
      </div>
    </div>
  )
}

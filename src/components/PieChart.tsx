import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from 'highcharts/highcharts-3d'

highcharts3d(Highcharts)

const options = {
  chart: {
    type: 'pie',
    renderTo: 'container',
    plotBackgroundColor: 'transparent',
    plotBorderColor: 'transparent',
    backgroundColor: 'transparent',
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: '男女占比',
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
    },
  },
  series: [{
    name: '人数',
    data: [
      ['男', 33],
      ['女', 44],
    ],
  }],
}
const resizeEvent = new Event('resize')
window.dispatchEvent(resizeEvent)

export default function PieChart() {
  return (
    <div className="flex w-full h-full justify-center items-center flex-grow flex-col">
      <div id="container" className="pieChart flex overflow-hidden p-2 items-center justify-center text-gray-700">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  )
}

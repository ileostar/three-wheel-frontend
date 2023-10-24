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
    text: '简数科技每周水果消耗量',
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
    name: '货物金额',
    data: [
      ['香蕉', 8],
      ['猕猴桃', 3],
      ['桃子', 1],
      ['橘子', 6],
      ['苹果', 8],
      ['梨', 4],
      ['柑橘', 4],
      ['橙子', 1],
      ['葡萄 (串)', 1],
    ],
  }],
}

export default function PieChart() {
  return (
    <div id="container" className="flex p-2 w-full h-full items-center justify-center text-gray-700 mt-2 gap-1">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import HCMore from 'highcharts/highcharts-more'

Highcharts3D(Highcharts)
HCMore(Highcharts)

// eslint-disable-next-line react/prop-types
const MyChartComponent = ({ arrGrade = [29.9, 72, 106.4, 170.2] }) => {
  useEffect(() => {
    const chart = new Highcharts.Chart({
      chart: {
        renderTo: 'container',
        type: 'column',
        plotBackgroundColor: 'transparent',
        plotBorderColor: 'transparent',
        backgroundColor: 'transparent',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25,
        },
      },
      title: {
        text: '年级人数比',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          depth: 25,
        },
      },
      series: [{
        name: '男',
        data: arrGrade,
      }, {
        name: '女',
        data: arrGrade,
      }],
    })

    // Update the DOM with current angle information
    const alphaValue = document.getElementById('alpha-value')
    const betaValue = document.getElementById('beta-value')
    const depthValue = document.getElementById('depth-value')

    function showValues() {
      alphaValue.innerHTML = chart.options.chart.options3d.alpha
      betaValue.innerHTML = chart.options.chart.options3d.beta
      depthValue.innerHTML = chart.options.chart.options3d.depth
    }

    // Listen to slider changes and update the chart
    const sliders = document.querySelectorAll('#sliders input')
    sliders.forEach((slider) => {
      slider.addEventListener('input', function () {
        if (chart && chart.options && chart.options.chart) {
          chart.options.chart.options3d[this.id] = parseFloat(this.value)
          showValues()
          chart.redraw(false)
        }
      })
    })

    showValues()

    return () => {
      chart.destroy()
    }
  }, [])

  return (
    <div className="flex flex-grow flex-col">
      <div id="container" />
      <div id="sliders" className="box-border flex h-full overflow-hidden p-2 justify-between items-center text-gray-700 mt-2 gap-1 flex-grow mx-5">
        <div className="flex items-center gap-1">
          <label htmlFor="alpha" className="text-3">Alpha:</label>
          <input type="range" id="alpha" min="0" max="45" step="1" defaultValue="15" />
          <span id="alpha-value" className="w-3 text-3" />
        </div>

        <div className="flex items-center gap-1">
          <label htmlFor="beta" className="text-3">Beta:</label>
          <input type="range" id="beta" min="0" max="45" step="1" defaultValue="15" />
          <span id="beta-value" className="w-3 text-3" />
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="depth" className="text-3">Depth:</label>
          <input type="range" id="depth" min="10" max="99" step="1" defaultValue="50" />
          <span id="depth-value" className="w-3 text-3" />
        </div>
      </div>
    </div>
  )
}

export default MyChartComponent

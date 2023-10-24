// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import HCMore from 'highcharts/highcharts-more'

Highcharts3D(Highcharts)
HCMore(Highcharts)

const MyChartComponent = () => {
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
        text: '交互性3D柱状图',
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
        name: '图例1',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
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
    <div>
      <div id="container" />
      <div id="sliders" className="flex p-2 justify-between items-center text-gray-700 mt-2 gap-1">
        <label htmlFor="alpha" className="text-3">Alpha:</label>
        <input type="range" id="alpha" min="10" max="45" step="1" defaultValue="15" />
        <span id="alpha-value" className="w-3 text-3" />

        <label htmlFor="beta" className="text-3">Beta:</label>
        <input type="range" id="beta" min="10" max="45" step="1" defaultValue="15" />
        <span id="beta-value" className="w-3 text-3" />

        <label htmlFor="depth" className="text-3">Depth:</label>
        <input type="range" id="depth" min="15" max="99" step="1" defaultValue="50" />
        <span id="depth-value" className="w-3 text-3" />
      </div>
    </div>
  )
}

export default MyChartComponent

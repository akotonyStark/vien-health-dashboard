import React from 'react'
import Chart from 'react-apexcharts'

function Donut({ colors, data }) {
  const options = {
    colors,
    dataLabels: {
      enabled: false,    
    },
    plotOptions:{
      pie:{
        startAngle:0,
        expandOnClick:true,
        customScale: 0.7
        },
        donut:{
          labels:{
            show:false,
            name:{
              show: false
            }
          }
        }
    }
  }

  return (
    <Chart
      options={options}
      series={data}
      type='donut'
    />
  )
}

export default Donut

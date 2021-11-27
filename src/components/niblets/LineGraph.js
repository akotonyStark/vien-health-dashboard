import React from 'react'
import Chart from 'react-apexcharts'
import * as BiIcons from 'react-icons/bi'
function LineGraph({ caption, color, serieName }) {
  const series = [
    {
      name: serieName,
      data: [50, 36, 45, 65, 53, 30, 40],
    },
  ]
  const options = {
    chart: {
      id: 'basic-bar',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 1,
    },

    title: {
      text: caption,
      align: 'left',
    },
    markers: {
      size: 3,
      colors: [color],
    },
    colors: [color],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return `$${value}k`
        },
      },
    },
  }

  return (
    <div>
      <BiIcons.BiDotsHorizontalRounded
        style={{ float: 'right', marginRight: 20 }}
      />
      <Chart
        options={options}
        series={series}
        type='area'
        width='100%'
        height={200}
      />
    </div>
  )
}

export default LineGraph

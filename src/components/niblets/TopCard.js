import { Grid, Card } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import Chart from 'react-apexcharts'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#016450' : '#308fe8',
  },
}))

const options = {
  chart: {
    id: 'basic-bar',
  },
  colors: ['#FF8433'],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {},
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: { show: false },
  xaxis: {
    labels: {
      show: false,
      lines: {
        show: false,
      },
    },
  },
}
const series = [
  {
    name: '',
    data: [50, 30, 20, 60, 50, 30, 35],
  },
]

function TopCard({ color, progress, title, value, change, subTitle }) {
  return (
    <Grid item xs={4}>
      <Card
        elevation={0}
        style={{
          padding: '20px ',
          border: '1px solid #f1f1f1',
          position: 'relative',
          minHeight: 150,
        }}
      >
        <div>
          <div style={{ float: 'left', fontSize: '16px', fontWeight: '500' }}>
            {title}
          </div>
          <div style={{ float: 'right', color: '#9EA0A5', fontSize: '12px' }}>
            {subTitle}
          </div>
        </div>
        <div style={{ clear: 'both' }}>
          <div style={{ float: 'left', fontSize: 30, fontWeight: 'bold' }}>
            {value}
          </div>
          <div
            style={{
              float: 'right',
              color,
              fontSize: '12px',
              marginTop: 15,
            }}
          >
            {change}
          </div>
          <div style={{ clear: 'both', marginTop: 20 }}>
            {progress === 'progress' ? (
              <BorderLinearProgress variant='determinate' value={70} />
            ) : (
              <div style={{ top: 60, left: 0, position: 'absolute' }}>
                <Chart
                  options={options}
                  series={series}
                  type='bar'
                  width='100%'
                  height={75}
                />
              </div>
            )}
          </div>
          <div style={{ color: '#9EA0A5', marginTop: 15, fontSize: '12px' }}>
            {progress === 'progress' ? 'Yearly Goal' : null}
          </div>
        </div>
      </Card>
    </Grid>
  )
}

export default TopCard

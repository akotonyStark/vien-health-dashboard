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
  colors: '#FF8433',
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {},
    pie:{
      donut:{
        labels:{
          show: false
        }
      }
    }
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
    name: 'Bar',
    data: [50, 30, 20, 60, 50, 30, 35],
  },
]

function TopCard({ caption, desc, value, color, type, change }) {
  return (
    <Grid item xs={4}>
      <Card
        elevation={0}
        style={{
          padding: '20px ',
          border: '1px solid #EAEDF3',
          position: 'relative',
          minHeight: 175,
        }}
      >
        <div>
          <div style={{ float: 'left', fontSize: '16px', fontWeight: '500' }}>
            {caption}
          </div>
          <div style={{ float: 'right', color: '#9EA0A5', fontSize: '12px' }}>
            {desc}
          </div>
        </div>
        <div style={{ clear: 'both' }}>
          <div style={{ float: 'left', paddingTop:'20px'}}>
            <h3>{value}</h3>
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
            {type === 'progressbar' ? (
              <BorderLinearProgress variant='determinate' value={70} />
            ) : (
              <div style={{ top: 60, left: 0, position: 'absolute', paddingTop:'30px' }}>
                <Chart
                  options={options}
                  series={series}
                  type='bar'              
                  height={80}
                />
              </div>
            )}
          </div>
          <div style={{ color: '#9EA0A5', marginTop: 15, fontSize: '12px' }}>
            {type === 'progressbar' ? 'Yearly Goal' : null}
          </div>
        </div>
      </Card>
    </Grid>
  )
}

export default TopCard

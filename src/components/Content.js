import React from 'react'
import Paper from '@mui/material/Paper'
import { Card, Grid } from '@mui/material'
import TopCard from './niblets/TopCard'
import MidCard from './niblets/MidCard'
import BottomCard from './niblets/BottomCard'
import LineChart from './niblets/LineGraph'
import DonutChart from './niblets/Donut'
import { styled } from '@mui/material/styles'

function Content() {
  return (
    <div>
      <Grid container spacing={2}>
        <TopCard
          title='Sales'
          progress='progress'
          value='98.1%'
          change='+6.9%'
          subTitle='Monthly Goal'
          color='#348373'
        />
        <TopCard
          title='Revenue'
          progress='bar'
          value='$13,893'
          change='+11.3%'
          subTitle='Total Profit'
          color='#FF8433'
        />
        <TopCard
          title='Clients'
          progress='progress'
          value='1,232'
          change='+3.2%'
          subTitle='Subscribed'
          color='#348373'
        />
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={4}>
          <BottomCard
            chart={
              <DonutChart colors={['#016450', '#EAECEE']} data={[80, 20]} />
            }
            title='Total Sales'
            subTitle='+$985.56'
            chartAmount='$2,595'
            chartText='Invoiced'
            chartNum='23'
            numText='Invoiced'
            bgColor='#016450'
          />
        </Grid>
        <Grid item xs={8}>
          <Card
            elevation={0}
            style={{ padding: '20px ', border: '1px solid #f1f1f1' }}
          >
            <LineChart
              title='Daily Profit'
              color='#FF8433'
              serieName='Profit'
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={8}>
          <Card
            elevation={0}
            style={{ padding: '20px ', border: '1px solid #f1f1f1' }}
          >
            <LineChart
              title='Daily active clients'
              color='#016450'
              serieName='Active client'
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <MidCard
            chart={
              <DonutChart colors={['#FACF55', '#EAECEE']} data={[20, 80]} />
            }
            title='User Onboarding'
            subTitle='Q3 Goal: 8,000 User'
            chartAmount='2,452'
            chartText='ONBOARDED'
            bgColor='#FACF55'
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Content

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),

  color: theme.palette.text.secondary,
}))

import React from 'react'
import { Card, Grid } from '@mui/material'
import TopCard from './niblets/TopCard'
import BottomCard from './niblets/BottomCard'
import MiddleCard from './niblets/MiddleCard'
import LineGraph from './niblets/LineGraph'
import DonutChart from './niblets/Donut'


function Content() {
  return (
    <div>
      <Grid container spacing={2}>
        <TopCard
          caption='Sales'
          type='progressbar'
          value='98.1%'
          change='+6.9%'
          desc='Monthly Goal'
          color='#348373'
        />
        <TopCard
          caption='Revenue'
          type='bar'
          value='$13,893'
          change='+11.3%'
          desc='Total Profit'
          color='#FF8433'
        />
        <TopCard
          caption='Clients'
          type='progressbar'
          value='1,232'
          change='+3.2%'
          desc='Subscribed'
          color='#348373'
        />
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={4} >
          <MiddleCard  
            chart={
              <DonutChart  colors={['#016450', '#EAECEE']} data={[70, 30]} />
            }
            caption='Total Sales'
            desc='+$985.56'
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
            <LineGraph
              caption='Daily Profit'
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
            <LineGraph
              caption='Daily active clients'
              color='#016450'
              serieName='Active client'
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <BottomCard
            chart={
              <DonutChart colors={['#FACF55', '#EAECEE']} data={[30, 70]} />
            }
            caption='User Onboarding'
            desc='Q3 Goal: 8,000 User'
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


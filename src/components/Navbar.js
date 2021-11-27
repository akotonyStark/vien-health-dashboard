import React from 'react'
import { Box, Toolbar, IconButton, AppBar, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { InputGroup, FormControl } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'

const useStyles = makeStyles({
  mtop: {
    marginTop: 20,
  },
  menuIcon: {},
})

function Navbar() {
  const classes = useStyles()
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={7}>
        <div className='searchInput'>
          <InputGroup
            className='mb-6  lg-6 xl-8'
            style={{ width: 300, margin: '10px auto 0 auto' }}
          >
            <FormControl
              placeholder='Add more'
              aria-describedby='basic-addon2'
            />
            <InputGroup.Text style={{ background: '#016450', color: '#fff' }}>
              <BiIcons.BiSearch />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div
          className={classes.mtop}
          style={{
            display: 'flex',
            textAlign: 'right',
          }}
        >
          Udwell Now
        </div>
      </Grid>
      <Grid item xs={2}>
        <div
          className={classes.mtop}
          style={{ display: 'flex', alignContent: 'flex-end' }}
        >
          Sell a property
        </div>
      </Grid>
      <Grid item xs={1}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <BiIcons.BiMenuAltLeft />
          </IconButton>
        </Toolbar>
      </Grid>
    </Grid>
  )
}

export default Navbar

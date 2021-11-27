import React from 'react'
import { Toolbar, IconButton, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { InputGroup, FormControl } from 'react-bootstrap'
import * as BI from 'react-icons/bi'
import * as MD from 'react-icons/md'

const useStyles = makeStyles({
  mtop: {
    marginTop: 20,
  },
  menuIcon: {},
})

function Navbar() {
  const classes = useStyles()
  return (
    <Grid container spacing={2} >
      <Grid item xs={8}>
        <div>
          <InputGroup
            className='mb-6  lg-6 xl-8'
            style={{ width: 300, margin: '10px auto 0 auto' }}
          >
            
            <FormControl
              placeholder='Add more'
              aria-describedby='basic-addon2'
              style={{paddingLeft:'110px', background:'#F5F5F5', fontSize:'12px', color:'#767676', border: '0.5px solid #e8e8e8'}}
            />
            <span className="badge rounded-pill inside-badge">Granger, IA <MD.MdCancel /></span>
            <InputGroup.Text style={{ background: '#016450', color: '#fff' }}>
              <BI.BiSearch />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Grid>
      <Grid item xs={1}>
        <div
          className={classes.mtop}          
        >
          Udwell Now
        </div>
      </Grid>
      <Grid item xs={1}>
        <div
          className={classes.mtop}          
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
            <BI.BiMenuAltLeft />
          </IconButton>
        </Toolbar>
      </Grid>
    </Grid>
  )
}

export default Navbar

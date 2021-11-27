import React from 'react'
import { Grid, Avatar, Stack } from '@mui/material'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import { makeStyles } from '@mui/styles'


const Footer = () => {
  const styles = useStyles()
  return (
    <Grid
      container
      xl={12}
      
    >
      <Grid item xs={3} >
        <p className='mt-5' style={{color: '#767676'}} >
          Counter Delivery, Carters Beach<br/> PostCentre, Westport
        </p>
      </Grid>
      <Grid item xs={3}>
        <h4>About</h4>
        <p className={styles.links}>Company</p>
        <p className={styles.links}>Team</p>
        <p className={styles.links}>Careers</p>
        <p className={styles.links}>Blog</p>
      </Grid>
      <Grid item xs={3}>
        <h4>Support</h4>
        <p className={styles.links}>Help Center</p>
        <p className={styles.links}>Cancellation Options</p>
        <p className={styles.links}>Neighborhood Support</p>
        <p className={styles.links}>Trust &amp; Safety</p>
      </Grid>
      <Grid item xs={3}>
        <h4>Address</h4>
        <p style={{ color: '#767676', marginBottom:'40px' }}>
          Counter Delivery, Carters Beach <br/> PostCentre, Westport
        </p>
        <div>
          <Stack direction='row' spacing={2}>
            <Avatar
              style={{
                boxShadow:
                  'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
              }}
              sx={{ bgcolor: '#ffffff', color: '#098B71' }}
            >
              <FiIcons.FiFacebook />
            </Avatar>
            <Avatar
              style={{
                boxShadow:
                  'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
              }}
              sx={{ bgcolor: '#098B71', color: '#fff' }}
            >
              <FaIcons.FaInstagram />
            </Avatar>
            <Avatar
              style={{
                boxShadow:
                  'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
              }}
              sx={{ bgcolor: '#ffffff', color: '#098B71' }}
            >
              <FaIcons.FaTwitter />
            </Avatar>
          </Stack>
        </div>
      </Grid>
      <div className={styles.copyright}>
        <p>
          &copy;Udwell, LLC. All rights reserved.{' '}
          <span className={styles.dot}>.</span> Terms &amp; Conditions{' '}
          <span className={styles.dot}>.</span> Privacy Policy
        </p>
      </div>
    </Grid>
  )
}

export default Footer


const useStyles = makeStyles({
  bs: {
    boxShadow:
      'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
  },  
  dot: {
    fontSize: 3,
    color: '#A3A3A3',
  },
  copyright: {
    margin: '60px auto',
  },
  links:{    
      color:'#767676'    
  }
  
})
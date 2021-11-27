import React from 'react'
import * as BiIcons from 'react-icons/bi'
import { makeStyles } from '@mui/styles'
import { Divider } from '@mui/material'

const useStyles = makeStyles({
  root: {
    border: '1px solid #f1f1f1',
    overflow: 'hidden',
    height: 258,
    borderRadius: 5,
  },
  chart_container: {
    position: 'absolute',
  },
  chart_text: {
    float: 'right',
    marginTop: '45px',
    marginRight: '20px',
  },
  icon_holder: {
    float: 'left',
    textAlign: 'center',
    width: 40,
    height: 40,
    borderRadius: '10px',
  },
  card_icon: {
    color: '#fff',
    fontSize: 20,
    marginTop: 8,
  },
  clear: {
    clear: 'both',
  },
  card_header: {
    padding: '10px 20px',
  },
  desc: {
    fontSize: 11,
    padding: 0,
  },
  caption: {
    margin: 0,
    fontSize: 15,
  },
  card_header_menuIcon: {
    float: 'right',
    marginRight: 10,
    fontSize: 15,
  },
})

function BottomCard({
  chart,
  caption,
  desc,
  chartAmount,
  chartText,
  bgColor,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.card_header}>
        <div className={classes.icon_holder} style={{ background: bgColor }}>
          <BiIcons.BiUser className={classes.card_icon} />
        </div>
        <div style={{ float: 'left', width: '50%', marginLeft: 15 }}>
          <h6 className={classes.caption}>{caption}</h6>
          <span className={classes.desc}>{desc}</span>
        </div>
        <div className={classes.card_header_menuIcon}>
          <BiIcons.BiDotsHorizontalRounded />
        </div>
      </div>

      <Divider className={classes.clear} style={{ marginTop: 40 }} />

      <div style={{ position: 'relative' }}>
        <div className={classes.chart_container}>{chart}</div>
        <div className={classes.chart_text}>
          <h5 style={{ marginLeft: '60px' }}>{chartAmount}</h5>
          <span style={{ marginLeft: '45px', marginBottom: 10, fontSize: 11 }}>
            {chartText}
          </span>
          <Divider style={{ justifySelf: 'left', marginLeft: '30px' }} />
        </div>
      </div>
    </div>
  )
}

export default BottomCard

import React from 'react'
import * as FI from 'react-icons/fi'
import * as FA from 'react-icons/fa'
import * as AI from 'react-icons/ai'
import * as BS from 'react-icons/bs'
import * as TI from 'react-icons/ti'
import * as MD from 'react-icons/md'
import * as IO from 'react-icons/io'
import { Divider } from '@mui/material'

const color = '#A3A3A3'
const ListItems = [
  {
    menu: 'Profile',
    icon: <FI.FiUser color={color}/>,
  },
  {
    menu: 'My listing',
    icon: <BS.BsCardChecklist color={color}/>,
  },
  {
    menu: 'Saved homes',
    icon: <FA.FaHands color={color} />,
  },
  {
    menu: 'Saved search',
    icon: <MD.MdScreenSearchDesktop color={color}/>,
  },
  {
    menu: 'Messages',
    icon: <TI.TiMessages color={color}/>,
  },
  {
    menu: 'Notifications',
    icon: <MD.MdOutlineSettingsSuggest color={color}/>,
  },
  {
    menu: 'Billing',
    icon: <IO.IoMdCalculator color={color}/>,
  },
  {
    menu: 'Analytics',
    icon: <AI.AiOutlinePieChart color={color} />,
  },
  {
    menu: 'Blog',
    icon: <MD.MdEditNote color={color}/>,
  },
]

export default function ListGroup() {
  return (
    <>
    
      {ListItems.map((item, i) => (
        <div
          style={{
            borderTop: '0.5px solid #e8e8e8',
            overflow: 'hidden',
            padding: '9px 5px',
          }}
          key={i}
        >
          <div style={{ float: 'left', width: '90%' }}>{item.menu}</div>
          <div style={{ float: 'right', width: '10%' }}>{item.icon}</div>
        </div>
        
      ))}
<Divider style={{color:'#e8e8e8'}}/>
 
    </>
  )
}

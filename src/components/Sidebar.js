import React from 'react'
import ListGroup from './niblets/ListGroup'
import { InputGroup, FormControl } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import { Button } from '@mui/material'
import Picture from '../images/alex.png'

function Sidebar() {
  return (
    <div style={{ padding: '30px 20px 30px 20px' }}>
      <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <img
          src={Picture}         
          style={{ width: '150px', height: '150px' }}
          alt='Cinque Terre'
        />
        <br />
        <h5 style={{ padding: 0, margin: 2, fontSize: '16px' }}>
          Alex Assenmacher
        </h5>
        <h6
          style={{
            padding: 0,
            margin: 10,
            color: '#767676',
            fontWeight: '400',
            fontSize: '12px',
          }}
        >
          Home Buyer
        </h6>
        <Button
          style={{           
            color: '#ffffff',
            background: '#016450',
            textTransform: 'capitalize',
            fontSize: '12',
            width: '135px'
          }}
          size='small'
        >
          Edit profile
        </Button>
      </div>
      <ListGroup />
      <div style={{marginTop: '40px'}}>
        <p style={{ padding: 0, margin: 0, color: '#484848', fontWeight:'bold' }}>Profile link</p>
        <InputGroup className='mb-3'>
          <FormControl style = {{color:'#226EC7'}}
            value='https://www.udwell.com/p.'
            
          />
          <InputGroup.Text id='basic-addon2' style={{ background: '#fff' }}>
            <BiIcons.BiCopy />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import Card from './Card'
import CardLong from './CardLong'

export default function Layout() {
  return (
    <>
        <div className='container-1'>
        <div className='box-1'>
          {/* <h3>Box One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <CardLong border='border-primary' text='text-primary'/>
        </div>
        <div className='box-2'>
          {/* <h3>Box Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <Card />
        </div>
        <div className='box-3'>
          {/* <h3>Box Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <CardLong border='border-danger' text='text-danger'/>
        </div>
      </div>
    </>
  )
}

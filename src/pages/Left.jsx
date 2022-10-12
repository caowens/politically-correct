import React from "react";
import Layout from '../components/Layout';
import RowLayout from '../components/RowLayout';
import Card from '../components/Card';
import CardLong from '../components/CardLong';

export default function Left() {
  return (
    <>
        <div className='container-1'>
        <div className='box-4'>
          {/* <h3>Box One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <Card border='border-primary' text='text-primary'/>
        </div>
        <div className='box-5'>
          {/* <h3>Box Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <CardLong border='border-primary' text='text-primary'/>
        </div>
        <div className='box-6'>
          {/* <h3>Box Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <CardLong border='border-primary' text='text-primary'/>
        </div>
      </div>
      <RowLayout border='border-primary' text='text-primary'/>
      <RowLayout border='border-primary' text='text-primary'/>
    </>
  );
}

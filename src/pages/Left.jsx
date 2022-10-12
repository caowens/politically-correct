import React from "react";
import RowLayout from '../components/RowLayout';
import Card from '../components/Card';
import CardLong from '../components/CardLong';

export default function Left() {
  return (
    <>
        <div className='container-1'>
        <div className='box-4'>
          <Card border='border-primary' text='text-primary'/>
        </div>
        <div className='box-5'>
          <CardLong border='border-primary' text='text-primary'/>
        </div>
        <div className='box-6'>
          <CardLong border='border-primary' text='text-primary'/>
        </div>
      </div>
      <RowLayout border='border-primary' text='text-primary'/>
      <RowLayout border='border-primary' text='text-primary'/>
    </>
  );
}

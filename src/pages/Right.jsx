import React from "react";
import RowLayout from '../components/RowLayout';
import Card from '../components/Card';
import CardLong from '../components/CardLong';

export default function Right() {
  return (
    <>
        <div className='container-1'>
        <div className='box-7'>
          <CardLong border='border-danger' text='text-danger'/>
        </div>
        <div className='box-8'>
          <CardLong border='border-danger' text='text-danger'/>
        </div>
        <div className='box-9'>
          <Card border='border-danger' text='text-danger'/>
        </div>
      </div>
      <RowLayout border='border-danger' text='text-danger'/>
      <RowLayout border='border-danger' text='text-danger'/>
    </>
  );
}

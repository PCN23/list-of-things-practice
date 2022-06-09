
import React from 'react';

export default function TransportationItem({ car, type, trucks }) {
  return (
    <div className='cars-item'>
      <p>car: {car}</p>
      <p>type: {type}</p>
      <p>truck: {trucks.mpg}</p>
      <p>truck: {trucks.engine}</p>
    </div>
  );
}

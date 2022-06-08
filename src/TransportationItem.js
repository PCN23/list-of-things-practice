
import React from 'react';

export default function TransportationItem({ car, type, trucks }) {
  return (
    <div>
      <p>car: {car}</p>
      <p>type: {type}</p>
      <p>truck: {trucks.mpg}</p>
      <p>truck: {trucks.engine}</p>
    </div>
  );
}

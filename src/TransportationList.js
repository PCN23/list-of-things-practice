import React from 'react';
import TransportationItem from './TransportationItem';

export default function TransportationList({ transportations }) {

  return (
    <div>{
      transportations.map((transportation, i) => <TransportationItem {...transportation} 
        key={transportation.car + i}/>) 
        
    }
        
    </div>
  );
}


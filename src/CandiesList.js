import React from 'react';
import CandyItem from './CandyItem';

export default function CandiesList({ candies }) {

  return (
    <div>{
      candies.map((candy, i) => <CandyItem 
        candy={candy} key={candy + i} />)
      
    }
    </div>
  );
}

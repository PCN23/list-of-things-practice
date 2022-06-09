import React from 'react';
import FruitsItem from './FruitsItem';

export default function FruitsList({ fruits }) {
  return (
    <div className='fruits-list'>
      {
        fruits.map((fruit, i) => <FruitsItem {...fruit} 
          key={fruit.name + i}/>)
      }
    </div>
  );
}


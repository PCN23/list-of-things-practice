import React from 'react';

export default function FruitsItem({ north_america, south_america, Europe }) {
  return (
    <div className='fruit-item'>
      <p>north_america: {north_america}</p>
      <p>south_america: {south_america}</p>
      <p>Europe: {Europe}</p>
    </div>
  );
}


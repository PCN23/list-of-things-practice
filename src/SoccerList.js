
import React from 'react';
import SoccerItem from './SoccerItem';

export default function SoccerList({ soccerBalls }) {
  return (
    <div>
      {
        soccerBalls.map((soccerBall, i) => <SoccerItem {...soccerBall} 
          key={soccerBall.name + i} />)
      }
    </div>
  );
}

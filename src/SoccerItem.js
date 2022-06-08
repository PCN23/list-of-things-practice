
import React from 'react';

export default function SoccerItem({ ball, worldCup, maker }) {
  return (
    <div>
      <p>{ball}</p>
      <p>{worldCup}</p>
      <p>{maker}</p>
    </div>
  );
}

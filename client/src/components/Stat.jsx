import React from 'react';

const Stat = ({stats, type}) => {
  var total = 0;
  stats.forEach((stat) => {
    total += stat[type];
  })
  if (type === 'atkSpeed' || type === 'crit') {
    total = total.toFixed(2)
  }
  return (
    <div className='stat'>{type.toUpperCase()}: {total}</div>
  );
};

export default Stat;
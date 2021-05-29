import React from 'react';
import Stat from './Stat.jsx';

const StatGroup = ({stats}) => {

  return (
    <div className='stat-group'>
      <Stat stats={stats} type={'ad'}/>
      <Stat stats={stats} type={'ap'}/>
      <Stat stats={stats} type={'atkSpeed'}/>
      <Stat stats={stats} type={'crit'}/>
    </div>
  );
};

export default StatGroup;
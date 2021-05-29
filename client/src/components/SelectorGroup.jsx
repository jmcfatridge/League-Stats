import React from 'react';
import ItemSelector from './ItemSelector.jsx';

const SelectorGroup = ({items, selectItem}) => {

  return (
    <div className="selector-group">
      <ItemSelector items={items} slot={1} selectItem={selectItem}/>
      <ItemSelector items={items} slot={2} selectItem={selectItem}/>
      <ItemSelector items={items} slot={3} selectItem={selectItem}/>
      <ItemSelector items={items} slot={4} selectItem={selectItem}/>
      <ItemSelector items={items} slot={5} selectItem={selectItem}/>
      <ItemSelector items={items} slot={6} selectItem={selectItem}/>
    </div>
  );
};

export default SelectorGroup;
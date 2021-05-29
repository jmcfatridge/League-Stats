import React from 'react';
import ItemSlot from  './ItemSlot.jsx';

const SlotGroup = ({item1, item2, item3, item4, item5, item6}) => {
  return (
    <div className='slot-group'>
      <ItemSlot item={item1}/>
      <ItemSlot item={item2}/>
      <ItemSlot item={item3}/>
      <ItemSlot item={item4}/>
      <ItemSlot item={item5}/>
      <ItemSlot item={item6}/>
    </div>
  );
};

export default SlotGroup;
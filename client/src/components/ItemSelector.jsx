import React from 'react';

const ItemSelector = ({items, slot, selectItem}) => {

  return (
    <select className={`item${slot}`} onChange={selectItem}>
      <option value='null'>- Select Item -</option>
      {
        items.map((item) => {
          return <option
                   key={item._id}
                   name={`item${slot}`}
                   value={item._id}>
                    {item.name}
                  </option>
        })
      }
    </select>
  );
};

export default ItemSelector;
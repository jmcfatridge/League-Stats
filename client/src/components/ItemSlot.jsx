import React from 'react';

const ItemSlot = ({item}) => {
  const styles = { "width": "64px", "height": "64px", "border": "solid"}
  return (
    <img
    className='item-slot'
    style={styles}
    src={item ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${item}.png` : 'blank.png.svg'}></img>
  );
};

export default ItemSlot;
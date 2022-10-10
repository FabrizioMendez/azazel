import React, { useState } from 'react'

const ItemCount = ({initial, onAdd}) => {
const [qty, setQty] = useState(initial);

const onChangeHandller = (e) => {
  let a;
  if (parseInt(e.target.value)){
    a = parseInt(e.target.value);
  } else {
    a = 1;
  }
  setQty(a);
}


  return (
    <>
      <input type='button' value={'-'} onClick={()=> (qty > 1 ? setQty(qty - 1): 1)}/>
      <input type='number' value ={qty} onChange={onChangeHandller} autoFocus/>
      <input type='button' value={'+'} onClick={()=> (qty < 99 ? setQty(qty + 1): 99)}/>
      
      <div onClick={() => {onAdd(qty)}}>

      <input type='button' value='Añadir al carrito'/>
      </div>
    </>
  )
}

export default ItemCount
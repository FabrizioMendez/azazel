import React from 'react'
import { useCartContext } from '../../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({propContainerDetalle}) => {
  const {cart, addToCart} = useCartContext();
console.log(propContainerDetalle)

const onAdd = (quantity) => {
  addToCart(propContainerDetalle, quantity)
  console.log(quantity)
};

  return (
    <>
      <h1>{propContainerDetalle.nombre}</h1>
      <p>{propContainerDetalle.categoria}</p>
      <p>{propContainerDetalle.descripcion}</p>
      <p>$ {propContainerDetalle.precio}</p>
      <ItemCount initial={1} onAdd= {onAdd}/>
    </>
  )
}

export default ItemDetail
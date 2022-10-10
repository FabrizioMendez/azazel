import React from 'react'
import './style/Navbar.css'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {totalQty, totalPrice} = useCartContext();
  console.log(totalQty)
  return (
    <>
    <Link to='/'>Cocina</Link>
    <Link to='/sabor/Dulce'>Dulces</Link>
    <Link to='/sabor/Salado'>Salados</Link>
    <Link to='/sabor/Especial'>Especiales</Link>
    <Link to='/cart'>Carrito</Link>
    <p>Cantidad de Panqueques: {totalQty}</p>
    <p>Precio Total a Pagar: ${totalPrice}</p>
    </>
  )
}

export default Navbar
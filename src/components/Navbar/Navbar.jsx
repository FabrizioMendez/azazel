import React from 'react'
import './style/Navbar.css'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {totalQty, totalPrice} = useCartContext();
  console.log(totalQty)
  return (
    <>
    <div className='links'>
    <Link className='link' to='/'>Cocina</Link>
    <Link className='link' to='/sabor/Dulce'>Dulces</Link>
    <Link className='link' to='/sabor/Salado'>Salados</Link>
    <Link className='link' to='/sabor/Especial'>Especiales</Link>
    <Link className='link' to='/cart'>Carrito</Link>
    </div>
    <div className='cantidades'>
    <p>Cantidad de Panqueques: {totalQty}</p>
    <p>Precio Total a Pagar: ${totalPrice}</p>
    </div>
    </>
  )
}

export default Navbar
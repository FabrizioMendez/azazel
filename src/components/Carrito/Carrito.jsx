import React from 'react'
import { useCartContext } from '../../context/cartContext'

const Carrito = () => {
const {cart} = useCartContext()

  return (
   
    <>
        <p>Este Es El Carrito</p>
        {cart.length > 0 ? (
            <>
                <ul>
                    {cart.map((item, index) => {
                        return <li key={index}>
                            <p>{item.nombre}</p>
                            <p>{item.quantity}</p>
                            <p>{item.quantity * item.precio}</p>
                            <button>Eliminar del Carrito</button>
                    </li>
                    })}             
                    </ul>
                    </>
                    ) : (
                     <p>El Carrio Esta Vacio, Anda a Comprar Panqueuqes que Son Re Ricoos</p> 
                    )}   
    </>
  )
}



export default Carrito
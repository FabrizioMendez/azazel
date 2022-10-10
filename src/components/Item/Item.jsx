import React from 'react'
import './style/Item.css'
import { Link } from 'react-router-dom'

const Item = ({propListPanqueques}) => {

  return (
    <div className='cuadro'>
    <h1>{propListPanqueques.nombre}</h1>
    <Link to={`/detalle/${propListPanqueques.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
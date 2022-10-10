import React from 'react'
import Item from '../Item/Item'
const ItemList = ({propContainerPanqueques}) => {

  return (
    <>
    {propContainerPanqueques.map((panqueques, i) => {
      return <Item key={panqueques.id} propListPanqueques={panqueques} />
    })}
    </>
  )
}

export default ItemList
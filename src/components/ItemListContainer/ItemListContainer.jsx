import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {panqueques} from '../../api/panqueques'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
const [statePanqueques, setStatePanqueques] = useState ([]);
const [loading, setLoading] = useState (true);
const {saboresId} = useParams();
console.log(saboresId)
useEffect (() => {
  const getPanqueques = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(panqueques);
    }, 2000);
  });
  getPanqueques.then((result) =>{
    if (saboresId) {
      const prodFiltered = result.filter((prod) => prod.categoria === saboresId)
      setStatePanqueques(prodFiltered);
    } else {
      setStatePanqueques(result)
    }
    setLoading(false);
  });
  return () => {
    setLoading(true)
  }
}, [saboresId]);
  return loading ? <p>COCINANDO....</p> : <ItemList className='platos' propContainerPanqueques = {statePanqueques} />;
  
}

export default ItemListContainer
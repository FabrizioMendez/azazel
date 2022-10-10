import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { panqueques } from '../../api/panqueques';

const ItemDetailContainer = () => {
  const [stateDetalle, setStateDetalle] = useState({});
  const [loading, setLoading] = useState(true);
  
  const {detalleId} = useParams();

  useEffect(() => {
    const getDetalle = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(panqueques);
    }, 2000);
  });
  getDetalle.then((result) =>{
    const prodFiltered = result.filter((prod) => prod.id == detalleId)
    setStateDetalle(prodFiltered[0]);
    setLoading(false);
  });
  }, [detalleId]);


  return loading ? <p>DETALLANDO....</p> : <ItemDetail propContainerDetalle = {stateDetalle} />;
 
}

export default ItemDetailContainer
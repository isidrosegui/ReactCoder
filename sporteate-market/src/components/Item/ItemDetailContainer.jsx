import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFetch } from '../Helpers/getFetch'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const{prod_id} = useParams()
    console.log(prod_id)
    const [loading, setLoading] = useState(true)
    const[producto, setProducto] = useState([])
    
    useEffect(() => {
          
            getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === parseInt(prod_id)))) //acá recibo los productos de getFetch y los cargo en el estado dentro de productos.
             .catch(err => console.log(err)) //hago el control de errores
            .finally(() => setLoading(false)) //quito el loading cuando termina de cargar la informacion.
          
       
    }, [prod_id])
    console.log(producto)
    return (
        <>
         'Estoy en el ItemDetailContainer del prod' {prod_id}
        
            {   loading ? 
                <h2>...Cargando</h2>
                :
                <ItemDetail producto = {producto} />
            }
          
          
        </>
    )
}

export default ItemDetailContainer

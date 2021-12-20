import React from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'
import { Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { getFetch } from '../Helpers/getFetch'


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
        <div className ='row'>
            <div className ='col-7'>
                <Image src={producto.imagen}  ></Image>
            </div>
            <div className ='col-5'>
                <ItemCount/>
            </div>
        </div>
        </>
    )
}

export default ItemDetailContainer

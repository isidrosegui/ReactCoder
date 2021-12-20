import React from 'react'
import { Image } from 'react-bootstrap' 
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    return (
        <>
            <div className ='row'>
            <div className ='col-7'>
                <Image src={producto.imagen} />
            </div>
            <div className ='col-5'>
               {show ? <ItemCount setShow={setShow} stock ={producto.stock}/> : <Link to='/cart'>Ir al carrito</Link>}
            </div>
        </div>  
        </>
    )
}

export default ItemDetail

import React from 'react'
import Item from './Item';


function ItemList({productos}) {
    return (
        <>
        <br/>
        <div className='row'>
         { productos.map((prod) => <Item key={prod.id} producto = {prod}/>) }
         </div>
        </>
    )
}

export default ItemList

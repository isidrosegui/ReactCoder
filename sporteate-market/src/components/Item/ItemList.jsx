import React from 'react'
import Item from './Item';


function ItemList({productos}) {
    return (
        <>
         { productos.map((prod) => <Item producto = {prod}/>) }
        </>
    )
}

export default ItemList

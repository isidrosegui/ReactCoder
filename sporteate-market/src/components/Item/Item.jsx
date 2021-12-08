import React from 'react'
import { Image } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

function Item({productos}) {
    return (
        <div>
            <h1>{productos.name}</h1>
            <h3>{productos.description}</h3>
            <ItemCount></ItemCount>
        </div>
    )
}

export default Item

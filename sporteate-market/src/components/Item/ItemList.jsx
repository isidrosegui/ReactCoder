import React from 'react'
import Item from "./Item"

const getFetched = new Promise((res,rej) =>{
    setTimeout(() => {
       res(stock) 
    }, 3000);
})

function ItemList({productos}) {
    return (
        <>
         { productos.map((prod) => <Item producto = {prod}/>) }
        </>
    )
}

export default ItemList

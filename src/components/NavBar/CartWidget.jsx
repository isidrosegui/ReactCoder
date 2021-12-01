import React from 'react'
import { Cart3 } from 'react-bootstrap-icons';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function CartWidget() {
    return (
        <div style={{flexDirection: 'row', width:'40px'}}>
            <Cart3 size={24} style={{marginRight: '20px'}}/>
            <ItemListContainer greeting="4"/>
        </div>
    )
}

export default CartWidget

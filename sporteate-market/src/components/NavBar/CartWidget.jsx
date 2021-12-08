import React from 'react'
import { Cart3 } from 'react-bootstrap-icons';
import ItemListContainer from '../Item/ItemListContainer';


function CartWidget() {
    return (
        <div className="row" style={{width:'90px',marginRight: '20px'}}>
            <div className="col-6">
            <Cart3 size={24}/>
            </div>
            <div className="col-6">
            <ItemListContainer greeting="4"/>
            </div>
        </div>
    )
}

export default CartWidget

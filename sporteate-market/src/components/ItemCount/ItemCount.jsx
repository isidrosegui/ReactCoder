import Button from '@restart/ui/esm/Button'
import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';

function ItemCount({stock}) {
    
   function addToCart() {
        let a = 1;
    }

    return (
        <div  className='row' style={{marginTop:'10px'}}>
            <div className='col-6'></div>
            <div className='col-3'>
            <NumericInput mobile strict className="form-control" style={{width: '200px'}} max = {stock}  />
            </div>
            <div className='col-2'>
            <Button className='form-control' onClick = {addToCart} >Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount

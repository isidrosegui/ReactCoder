import Button from '@restart/ui/esm/Button'
import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import { useState, useEffect } from 'react';
function ItemCount({stock}) {
let cantidad = 1;    
    const [cantEnCarro, setcantEnCarro] = useState(cantidad = 0);

   function setCantidad(value){
    cantidad = value;
   }

    function addToCart(value) {
        
       setcantEnCarro(cantidad);
       //aca debe ser una llamada asincronica para el cant en carro del log aparezca actualizada la primera vez que clickeo 
       console.log('cantencarro'+ cantEnCarro )
    }

    return (
        <>
           
            <div  className='row' style={{marginTop:'10px'}}>
                <div className='col-6'><h1>En Carro: {cantEnCarro}</h1></div>
                <div className='col-3'>
                    <NumericInput  mobile strict className="form-control" style={{width: '200px'}} max = {stock} min = {0}
                    defaultValue = {1}  onChange={(value) => setCantidad(value)}/>
                </div>
                <div className='col-2'>
                <Button className='form-control'  onClick={addToCart}>Agregar al Carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount

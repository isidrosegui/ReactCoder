import Button from '@restart/ui/esm/Button'
import React from 'react'
import { FormControl, InputGroup, Row, Col } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import { useState, useEffect } from 'react';

function ItemCount({stock, setShow}) {
let cantidad = 1;    
    const [cantEnCarro, setcantEnCarro] = useState(cantidad = 0);

   function setCantidad(value){
    cantidad = value;
   }

    function addToCart(value) {
        setShow(false)
       setcantEnCarro(cantidad);
       //aca debe ser una llamada asincronica para el cant en carro del log aparezca actualizada la primera vez que clickeo 
       console.log('cantencarro'+ cantEnCarro )
    }

    return (
            <Row style={{marginTop:'10px'}}>
                <Col className='col-3'>
                </Col>
                <Col className='col-6'>
                    <NumericInput  mobile strict className="form-control" style={{width: '200px'}} max = {stock} min = {0}
                    defaultValue = {1}  onChange={(value) => setCantidad(value)}/>
                </Col>            
                <Col className='col-3'>
                </Col>
                <Col className='col-3'>
                </Col>
                <Col className='col-6'>
                    <Button className='form-control'  onClick={addToCart}>Agregar al Carrito</Button>
                </Col>
                <Col className='col-3'>
                </Col>
            </Row>
        
    )
}

export default ItemCount

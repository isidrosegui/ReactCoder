import React from 'react'
import { Image, Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

function Item({producto}) {
    return (
        <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
            <Card key={producto.id} style={{ width: '18rem' }}>
           
            <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Img  variant="top" src={producto.imagen} />
            <Card.Text>
                {producto.description}
            </Card.Text>
            <ItemCount/>
            </Card.Body>
            </Card>
        </div>
        <div className='col-md-4'></div>
        </div>
     
    )
}

export default Item

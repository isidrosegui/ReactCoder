import React from 'react'
import { Image, Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

function Item({producto}) {
    return (
        
        
        <div className='col-md-3' style={{marginBottom:'10px'}}>
            <Card key={producto.id} style={{ width: '18rem' }}>
           
            <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Img  variant="top" src={producto.imagen} />
            <Card.Text>
                {producto.description}
            </Card.Text>
                <Card.Link href={`/detalle/${producto.id}`}>Ver Detalle</Card.Link>
          
            </Card.Body>
            </Card>
        </div>
        
        
     
    )
}

export default Item

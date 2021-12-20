import React from 'react'
import { Image } from 'react-bootstrap' 
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    return (
        <>
            <div className ='row'>
            <div className ='col-7'>
                <Image src={producto.imagen} />
            </div>
            <div className ='col-5'>
               {show ? <ItemCount/> : <Link></Link>
            </div>
        </div>  
        </>
    )
}

export default ItemDetail

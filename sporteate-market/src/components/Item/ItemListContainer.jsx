
import { useState, useEffect } from "react"
import { getFetch } from "../Helpers/getFetch"
import ItemList from './ItemList'
import {useParams} from 'react-router-dom' 
import { ConeStriped } from "react-bootstrap-icons"


function ItemListContainer({greeting}) {
    const[productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {cat_id} = useParams()




useEffect(() => {
    if(!cat_id)
    {
      
            getFetch
                 .then(resp => setProductos(resp)) //acá recibo los productos de getFetch y los cargo en el estado dentro de productos.
                 .catch(err => console.log(err)) //hago el control de errores
                 .finally(() => setLoading(false)) //quito el loading cuando termina de cargar la informacion.
      
    }
    else{
       
        getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria_id === parseInt(cat_id) ))) //acá recibo los productos de getFetch y los cargo en el estado dentro de productos.
             .catch(err => console.log(err)) //hago el control de errores
            .finally(() => setLoading(false)) //quito el loading cuando termina de cargar la informacion.
      
        }
}, [cat_id])

//    useEffect(() => { 

    // if(cat_id)
    // {
    //    
    // }
    // else{
    //    
    // }
    /*la carga de datos va dentro del useEffect para que no me frene durante el tiempo de carga de datos el return.
     y se pueda ver la pantalla (en este cao el loding)*/
    
//}, [cat_id])


    return (
        <div>
            {greeting}
            {   loading ? 
                <h2>...Cargando</h2>
                :
                <ItemList productos = {productos} />
            }
          
          </div>
    )
        }

export default ItemListContainer

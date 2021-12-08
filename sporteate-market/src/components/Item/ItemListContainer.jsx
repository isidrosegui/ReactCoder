
import { useState, useEffect } from "react"
import { getFetch } from "../Helpers/getFetch"
import ItemList from './ItemList'

function ItemListContainer({greeting}) {
    const[productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => { 
    /*la carga de datos va dentro del useEffect para que no me frene durante el tiempo de carga de datos el return.
     y se pueda ver la pantalla (en este cao el loding)*/
    getFetch
        .then(resp => resp.setProductos(resp)) //acá recibo los productos de getFetch y los cargo en el estado dentro de productos.
        .catch(err => console.log(err)) //hago el control de errores
        .finally(() => setLoading(false)) //quito el loading cuando termina de cargar la informacion.
}, [])/*y le agrego con filtro un array vacío para que se ejecute una sola vez 
      y no cada vez que realizo un CAMBIO DE ESTADO del componente.*/


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

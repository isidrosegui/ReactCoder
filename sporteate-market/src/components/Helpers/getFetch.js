const productos =[
  { id: '1', name:'Remera Manga Corta', description: 'Remera Manga Corta Adidas',categoria:'Indumentaria Deportiva', stock: 5, Imagen:'' },
  { id: '2', name:'Pantalón Largo Deportivo', description: 'Pantalón Largo Deportivo Nike', categoria:'Indumentaria Deportiva', stock: 10, Imagen:'' },
  { id: '3', name:'Raqueta Tenis Niños', description: 'Raqueta de tenis Head para niños ', categoria:'Insumos Deportivos', stock: 4, Imagen:'' },
  { id: '4', name:'Tubo Pelotas de Tenis', description: 'Tubo de Pelotas de Tenis Penn X 3',categoria:'Insumos Deportivos', stock: 20, Imagen:''  },
  
]
//acá lo unico que hago es devolver los productos con un delay de 2 segundos. Como no hay margen de error (por el momento) no pongo pa parte de reject-
export const getFetch = new Promise ((res) =>  {
    setTimeout(() => {
       res(productos) 
    }, 2000);
  }) 
  
  
const productos =[
  { id: '1', name:'Pantalon Adidas', description: 'Pantalon largo Adidas',categoria:'Indumentaria Deportiva', stock: 5, imagen:'/public/img/pantalon Adidas.png' },
  { id: '2', name:'Pantalón Largo Deportivo', description: 'Pantalón Largo Deportivo Nike', categoria:'Indumentaria Deportiva', stock: 10, imagen:'https://images.app.goo.gl/phyCKid8LP46JavJ7' },
  { id: '3', name:'Raqueta Tenis Head', description: 'Raqueta de tenis Head', categoria:'Insumos Deportivos', stock: 4, imagen:'https://images.app.goo.gl/CmXgjoteJjMTR72n6' },
  { id: '4', name:'Tubo Pelotas de Tenis', description: 'Tubo de Pelotas de Tenis Penn X 3',categoria:'Insumos Deportivos', stock: 20, imagen:'https://images.app.goo.gl/KMh18JnHknX8fXL18'  },
  
]
//acá lo unico que hago es devolver los productos con un delay de 2 segundos. Como no hay margen de error (por el momento) no pongo pa parte de reject-
export const getFetch = new Promise ((res) =>  {
    setTimeout(() => {
       res(productos) 
    }, 2000);
  }) 
  
  
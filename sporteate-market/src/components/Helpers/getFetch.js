

export const getFetch = new Promise ((res) =>  {
    setTimeout(() => {
       res( fetch("../JSON/DataList.json") .then((response) => response.json())) 
    }, 2000);
  }) 
  
 
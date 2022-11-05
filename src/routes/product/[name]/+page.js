
export async function load({fetch, params}) {
    const fetchData = async () => {
        
 const products = await fetch(`/api/products/${params.name}.json`)
    
    
    
     return products.json();
 
    }
       
 
   return {
     body:  fetchData()}
 }
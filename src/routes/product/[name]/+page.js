
export async function load({fetch, params}) {
    const fetchData = async () => {
        // const res = await fetch(`https://www.amazon.com/s?k=${params.name}&ref=nb_sb_noss_2`);
    //   const products = await fetch(`/api/products/${params.name}.json`)
        let products = params.name;
    
     console.log(products, 'from the load function');
     return products.json();
 
    }
       
 
   return {
     body:  fetchData()}
 }
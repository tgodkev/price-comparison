import { json } from "@sveltejs/kit";

export async function GET(params) {
    


    const productName = params.name;

    console.log(productName, 'from the api route');
    return json({ name: productName });

    // return new Response(JSON.stringify(productName))
// this is where we will scrape the data from the website.

  
//   return new Response(JSON.stringify(html) );
}
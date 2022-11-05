import { json } from "@sveltejs/kit";
import cheerio from 'cheerio';

export async function GET(params) {

 const res = await fetch(`https://www.amazon.com/s?k=${params.params.name}`);

//  https://www.amazon.com/s?k=cereal
// https://www.walmart.com/search/?cat_id=0&query=beans
 const dom = cheerio.load(await res.text());
    const products = [];
    const productList = dom(`div[data-index]`)

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        const title = dom(product).find(`h2.a-size-mini`).text();
        const price = dom(product).find(`span.a-price-whole`).text();
        const image = dom(product).find(`img.s-image`).attr('src');

        

        products.push({
            title,
            price,
            image
           
        })
    }



  
  return new Response(JSON.stringify(products) );
}
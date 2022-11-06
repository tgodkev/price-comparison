import { json } from "@sveltejs/kit";
import cheerio from 'cheerio';

export async function GET(params) {


  const fetchAmazon = async ( )=> {

  const amazon = await fetch(`https://www.amazon.com/s?k=${params.params.name}`);

  //  https://www.amazon.com/s?k=cereal
  const dom = cheerio.load(await amazon.text());
  const amazonProducts = [];
  const amazonList = dom(`div[data-index]`)

  for (let i = 0; i < 10; i++) {
    const product = amazonList[i];
    const title = dom(product).find(`h2.a-size-mini`).text();
    const price = dom(product).find(`span.a-price-whole`).text();
    const image = dom(product).find(`img.s-image`).attr('src');
    const link = dom(product).find(`a.a-link-normal.a-text-normal`).attr('href');


    amazonProducts.push({
      title,
      price,
      image,
      link

    })
  }

  return amazonProducts;
}

const fetchWalmart = async ( )=> {
  // https://www.walmart.com/search/?cat_id=0&query=beans
  const walmart = await fetch(`https://www.walmart.com/search/?cat_id=0&query=${params.params.name}`);
  const wdom = cheerio.load(await walmart.text());
  const walmartProducts = [];
  const walmartList = wdom(`div[data-index]`)

  for (let i = 0; i < 10; i++) {
    const product = walmartList[i];
    const title = wdom(product).find(`span.w_CC`).text();
   
    const image = wdom(product).find(`img`).attr('src');
    const link = wdom(product).find(`a.a-link-normal.a-text-normal`).attr('href');

   


    walmartProducts.push({
      title,
      image,
      link,
     

    })
  }

  return walmartProducts;
}

  //   https://www.target.com/s?searchTerm=beans



  const products = { walmart: await fetchWalmart(), amazon: await fetchAmazon() };

  //   console.log(products.walmart, '<- walmartProducts');
  //   return new Response(JSON.stringify(products) );

  return json(products);
}
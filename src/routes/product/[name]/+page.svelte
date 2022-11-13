<script>
  export let data;

  console.log(data.body);
  // console.log(data.body.products);
</script>

<div>
  <a href="/">
    <button class="btn">Home</button>
  </a>
</div>

<div class="py-10 flex justify-center">
  <h2 class="text-3xl">Amazon</h2>
</div>
<div class="grid grid-cols-3">
  {#each data.body.amazon as product}
    {#if product.title}
      <div class="w-1/2">
        <h2 class="truncate">{product.title}</h2>
        <img src={product.image} alt="" />
        <p>${product.price}</p>
      </div>
    {/if}
  {/each}
</div>

<div class="py-10 flex justify-center">
  <h2 class="text-3xl">Walmart</h2>
</div>
<div class="grid grid-cols-3">
  {#each data.body.walmart as product}
    <div class="w-1/2">
      <h2 class="truncate">{product.title}</h2>
      <img src={product.image} alt="" />
      <p>${product.price}</p>
    </div>
  {/each}
</div>

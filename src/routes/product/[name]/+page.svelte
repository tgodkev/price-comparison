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

<div class="grid grid-cols-3">
  {#each data.body as product}
    {#if product.title}
      <div class="w-1/2">
        <h2 class="truncate">{product.title}</h2>
        <img src={product.image} alt="" />
        <p>${product.price}</p>
        <a href="`www.amazon.com/${product.link}`">
          <button class="btn btn-secondary">Link</button>
        </a>
      </div>
    {/if}
  {/each}
</div>

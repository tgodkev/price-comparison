<script>
  let name = "";
</script>

<div>
  <h2>search your product here.</h2>
  <input bind:value={name} type="text" />
</div>

<div>
  <a href="/product/{name}"> <button class="btn"> Search. </button></a>
</div>

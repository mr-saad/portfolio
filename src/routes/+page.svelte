<script lang="ts">
  import me from "$lib/images/me.png"
</script>

<svelte:head>
  <title>Saad Khatri | Fullstack Web Developer</title>
</svelte:head>

<div
  id="home"
  class="flex flex-col md:flex-row gap-20 md:items-center overflow-clip scroll-m-30 md:scroll-m-4"
>
  <div>
    <h2 class="text-3xl font-bold">I'm Saad</h2>
    <h3 class="text-xl font-bold">Fullstack Web Developer</h3>
    <p class="opacity-80">Aspirant</p>
  </div>
  <img
    class="max-w-full grayscale border-b"
    width="500"
    src={me}
    alt="Saad Khatri"
  />
</div>
<div class="mt-20 grid gap-20"></div>

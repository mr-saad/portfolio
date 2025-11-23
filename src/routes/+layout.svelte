<script lang="ts">
  import "../app.css"
  import Footer from "../components/Footer.svelte"
  import Navbar from "../components/Navbar.svelte"

  const { children } = $props()
</script>

<svelte:head>
  <title>Saad Khatri | Portfolio</title>
</svelte:head>

<div class="grid md:grid-cols-[auto_1fr]">
  <Navbar />
  <main class="md:overflow-y-auto md:h-screen p-5">
    {@render children()}
    <Footer />
  </main>
</div>

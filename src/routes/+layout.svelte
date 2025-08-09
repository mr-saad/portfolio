<script lang="ts">
  import "../app.css"
  import Footer from "../components/Footer.svelte"
  import Navbar from "../components/Navbar.svelte"

  const { children } = $props()
</script>

<svelte:head>
  <title>Saad Khatri | Portfolio</title>
</svelte:head>

<Navbar />
<main>
  {@render children()}
</main>
<Footer />

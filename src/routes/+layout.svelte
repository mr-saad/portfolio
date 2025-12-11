<script lang="ts">
  import "../app.css"
  import Footer from "../components/Footer.svelte"
  import Sidebar from "../components/Sidebar.svelte"

  const { children } = $props()
</script>

<svelte:head>
  <title>Saad Khatri | Portfolio</title>
</svelte:head>

<div class="grid md:grid-cols-[auto_1fr]">
  <Sidebar />
  <main>
    <div class="p-5 md:min-h-screen">
      {@render children()}
    </div>
    <Footer />
  </main>
</div>

<script lang="ts">
  import "@fontsource-variable/geist/wght.css"
  import Silk from "$lib/components/svelte-bits/Silk.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Navbar from "../lib/components/Navbar.svelte"
  import "../app.css"

  import type { LayoutProps } from "./$types"
  import Container from "$lib/components/Container.svelte"

  const { children }: LayoutProps = $props()
</script>

<svelte:head>
  <title>Saad Khatri | Portfolio</title>
</svelte:head>

<div>
  <div class="fixed w-full -z-1 h-full">
    <Silk speed={2} scale={1} color="#2e1000" noiseIntensity={1} rotation={0} />
  </div>
  <Navbar />
  <Container>
    <main class="pt-22 px-5 container mx-auto leading-relaxed md:text-lg">
      <!-- {#if navigating.to}
          <p class="text-xl">navigating to {navigating.to?.url.pathname}</p>
        {:else} -->
      {@render children()}
      <!-- {/if} -->
    </main>
    <Footer />
  </Container>
</div>

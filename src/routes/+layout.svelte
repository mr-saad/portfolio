<script lang="ts">
  import { navigating } from "$app/state"
  import "../app.css"
  import Footer from "../components/Footer.svelte"
  import Sidebar from "../components/Sidebar.svelte"
  import type { LayoutProps } from "./$types"

  const { children, data }: LayoutProps = $props()

  const links = data.pages.map((page: any) => ({
    href: `/${page.slug}`,
    label: page.title,
  }))
</script>

<svelte:head>
  <title>Saad Khatri | Portfolio</title>
</svelte:head>

<div class="grid md:grid-cols-[auto_1fr]">
  <Sidebar {links} />
  <main>
    <div class="p-5 min-h-screen">
      {#if navigating.to}
        <p class="text-xl">navigating to {navigating.to?.url.pathname}</p>
      {:else}
        {@render children()}
      {/if}
    </div>
    <Footer />
  </main>
</div>

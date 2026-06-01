<script lang="ts">
  import About from "$lib/components/sections/About.svelte"
  import Contact from "$lib/components/sections/Contact.svelte"
  import Hero from "$lib/components/sections/Hero.svelte"
  import Projects from "$lib/components/sections/Projects.svelte"
  import Skills from "$lib/components/sections/Skills.svelte"
  import type { PageProps } from "./$types"
  const { data }: PageProps = $props()
</script>

<svelte:head>
  <title>Saad Khatri | Fullstack Web Developer</title>
</svelte:head>

<div class="grid gap-10">
  <Hero />
  <Projects projects={data.projects} />
  <Skills />
  <About />
  <Contact />
</div>

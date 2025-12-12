<script lang="ts">
  import type { PageProps } from "./$types"
  import Projects from "../../components/Projects.svelte"
  const { data }: PageProps = $props()
</script>

<svelte:head>
  <title>Projects | Saad Khatri</title>
</svelte:head>

<Projects projects={data.projects} />

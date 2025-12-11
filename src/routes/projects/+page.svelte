<script lang="ts">
  import type { PageProps } from "./$types"
  import Projects from "../../components/Projects.svelte"
  const { data }: PageProps = $props()
</script>

<Projects projects={data.projects} />

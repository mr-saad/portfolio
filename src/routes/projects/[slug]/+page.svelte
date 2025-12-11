<script lang="ts">
  import { PortableText } from "@portabletext/svelte"
  import type { PageProps } from "./$types"

  const { data }: PageProps = $props()
  const { project } = data
</script>

<!-- <div class="p-5 rounded-md shadow-md border border-black/10"> -->
<h2 class="text-2xl">{project.title}</h2>
<p class="mb-5">{project.desc}</p>
<img
  src={project.image}
  width="500"
  height="500"
  class="max-w-full mb-2 rounded"
  alt={project.title}
/>
<div class="prose">
  <PortableText value={project.body} />
</div>
<!-- </div> -->

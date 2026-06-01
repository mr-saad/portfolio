<script lang="ts">
  import { PortableText } from "@portabletext/svelte"
  import type { PageProps } from "./$types"

  const { data }: PageProps = $props()
  const { project } = data
</script>

<h2 class="text-3xl mb-2 font-bold">{project.title}</h2>
<p class="mb-5">{project.desc}</p>
<img
  fetchpriority="high"
  src={project.image}
  width="500"
  height="500"
  class="max-w-full mb-5 rounded"
  alt={project.title}
/>
<div class="prose md:prose-lg text-inherit">
  <PortableText value={project.body} />
</div>

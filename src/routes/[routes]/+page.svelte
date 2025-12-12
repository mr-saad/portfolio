<script lang="ts">
  import { PortableText } from "@portabletext/svelte"
  import type { PageProps } from "./$types"

  const { data }: PageProps = $props()
  const { page } = data
</script>

<svelte:head>
  <title>{page.title} | Saad Khatri</title>
</svelte:head>

<div class="prose">
  <PortableText value={page.content} />
</div>

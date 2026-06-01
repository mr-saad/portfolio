<script lang="ts">
  const { projects } = $props()
</script>

<div>
  <h4 class="text-3xl font-bold mb-2">Projects</h4>
  <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    {#each projects as project}
      <a
        href={"/projects/" + project.slug}
        class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
      >
        <div class="overflow-hidden">
          <img
            loading="lazy"
            fetchpriority="high"
            src={project.image}
            width="300"
            height="300"
            class="w-full aspect-square object-cover will-change-transform transition hover:scale-102 duration-300 focus-visible:scale-102"
            alt={project.title}
          />
        </div>
        <div class="px-5 py-2">
          <h5 class="text-2xl">{project.title}</h5>
          <p>{project.desc}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

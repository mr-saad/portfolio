<script lang="ts">
  const { projects } = $props()
</script>

<div>
  <h4 class="text-3xl font-bold mb-5 scroll-m-30 md:scroll-m-4" id="projects">
    Projects
  </h4>
  <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    {#each projects as project}
      <a
        href={"/projects/" + project.slug}
        class="border border-black/10 shadow-xl rounded-md overflow-hidden transition will-change-contents backface-hidden duration-500 hover:-translate-y-1"
      >
        <img
          loading="lazy"
          fetchpriority="high"
          src={project.image}
          width="300"
          height="300"
          class="w-full aspect-square object-cover"
          alt={project.title}
        />
        <div class="p-5">
          <h5 class="font-bold text-2xl">{project.title}</h5>
          <p>{project.desc}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<script lang="ts">
  import me from "$lib/images/me.png"
  import projects from "../data/projects"
</script>

<div class="flex flex-col md:flex-row gap-20 md:items-center overflow-clip">
  <div>
    <h2 class="text-3xl font-bold">I'm Saad</h2>
    <h3 class="text-xl font-bold">Fullstack Web Developer</h3>
    <p class="opacity-80">Aspirant</p>
  </div>
  <img
    class="max-w-full grayscale border-b"
    width="500"
    src={me}
    alt="Saad Khatri"
  />
</div>
<div class="mt-20">
  <h4 class="text-3xl font-bold mb-5 scroll-m-4" id="projects">Projects</h4>
  <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
    {#each projects as project}
      <a href={project.url} target="_blank">
        <img
          src={"/projects/" + project.img}
          width="300"
          height="300"
          class="w-full aspect-square object-cover rounded"
          alt={project.title}
        />
        <h5 class="font-bold text-2xl mt-2">{project.title}</h5>
        <p>{project.desc}</p>
      </a>
    {/each}
  </div>
</div>

<script lang="ts">
  import me from "$lib/images/me.png"
  import projects from "../data/projects"
</script>

<div
  class="px-5 pt-10 flex flex-wrap gap-20 items-center overflow-clip bg-gray-50"
>
  <div>
    <h2 class="text-3xl font-bold">I'm Saad</h2>
    <h3 class="text-xl font-bold">Fullstack Web Developer</h3>
    <p class="opacity-80">Aspirant</p>
  </div>
  <img
    class="max-w-full drop-shadow-xl drop-shadow-black/30 grayscale"
    width="500"
    src={me}
    alt="Saad Khatri"
  />
</div>
<div class="mt-10">
  <h4 class="text-3xl px-5 font-bold mb-5" id="projects">Projects</h4>
  {#each projects as project}
    <a
      href={project.url}
      target="_blank"
      class="min-h-[80vh] flex flex-col justify-end relative bg-fixed bg-top after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/70"
      style="background-image: url(/projects/{project.img});"
    >
      <div class="z-1 md:p-20 p-10">
        <h5 class=" text-white font-bold text-3xl">{project.title}</h5>
        <p class="text-white">{project.desc}</p>
      </div>
    </a>
  {/each}
</div>

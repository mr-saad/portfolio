<script>
  const skills = [
    {
      text: "Next.js",
      url: "https://nextjs.org",
    },
    {
      text: "React.js",
      url: "https://react.dev",
    },
    {
      text: "Astro",
      url: "https://astro.build",
    },
    {
      text: "Svelte",
      url: "https://svelte.dev",
    },
    {
      text: "TailwindCSS",
      url: "https://tailwindcss.com",
    },
    {
      text: "Bootstrap",
      url: "https://getbootstrap.com",
    },
    {
      text: "ShadCn",
      url: "https://ui.shadcn.com",
    },
    {
      text: "Motion",
      url: "https://motion.dev",
    },
    {
      text: "Swiper.js",
      url: "https://swiperjs.com",
    },
    {
      text: "Express.js",
      url: "https://expressjs.com",
    },
  ]
</script>

<div>
  <h2 class="text-3xl font-bold mb-2">Skills</h2>
  <ul class="flex flex-wrap gap-2">
    {#each skills as skill}
      <li>
        <a
          class="px-3 transition hover:text-white focus-visible:text-white rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm"
          href={skill.url}
          target="_blank">{skill.text}</a
        >
      </li>
    {/each}
  </ul>
</div>

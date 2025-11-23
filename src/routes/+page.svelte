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
  <div class="mt-20">
    <h4 id="about" class="text-3xl font-bold mb-5 scroll-m-4">About Me</h4>
    <p class="mb-5">
      My name is <b>Saad Khatri</b>. A Computer Science student currently
      pursuing M.Sc. (CA-IT) at Department of Computer Science, Kachchh
      University. I am working towards becoming a Full Stack Web Developer with
      a strong interest in <b>modern web technologies</b> (Next.js, Svelte, Astro).
    </p>
    <p class="mb-5">
      I enjoy building <b>fast</b>, user-friendly and scalable web applications.
      I have experience working with Next.js, Astro, Svelte and backend
      technologies such as Express.js and MongoDB. I have also worked with
      Sanity CMS and deployed multiple projects using Vercel.
    </p>
    <p class="mb-5">
      I like learning new tools and improving my skills <b
        >through real projects</b
      >. My goal is to contribute to meaningful products while exploring areas
      like mobile app development and software engineering.
    </p>
    <p class="mb-5">
      Outside of coding, I enjoy design, problem-solving and exploring new ideas
      that help me grow both technically and creatively.
    </p>
  </div>
  <div class="mt-20">
    <h4 id="contact" class="text-3xl font-bold mb-5 scroll-m-4">
      Get in Touch
    </h4>

    <p class="mb-5">Thank you for visiting my portfolio.</p>
    <p class="mb-5">
      If you would like to discuss an opportunity, collaboration or have any
      questions, feel free to reach out.
    </p>
    <p class="mb-2">You can contact me through:</p>
    <ul class="ml-2 *:mb-2 mb-5">
      <li>
        Email: <b
          ><a href="mailto:khatrisaad233@gmail.com">khatrisaad233@gmail.com</a
          ></b
        >
      </li>
      <li>Phone: <b><a href="tel:917016039766">+91 7016039766</a></b></li>
      <li>
        Resume: <b><a href="/Resume.pdf" target="_blank">Saad Khatri</a></b>
      </li>
      <li>
        GitHub: <b
          ><a href="https://github.com/mr-saad" target="_blank"
            >github.com/mr-saad</a
          ></b
        >
      </li>
      <li>
        LinkedIn: <b
          ><a
            href="https://www.linkedin.com/in/saad-khatri-a60753391/"
            target="_blank">Saad Khatri</a
          ></b
        >
      </li>
      <li>Location: <b>Bhuj - Kachchh, Gujarat - India</b></li>
    </ul>
    <p>
      I will do my best to respond as soon as possible. I look forward to
      connecting with you.
    </p>
  </div>
</div>

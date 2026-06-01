<script lang="ts">
  // import { page } from "$app/state"
  import cn from "$lib/utils/cn"
  import Socials from "./Socials.svelte"
  // const { links } = $props()

  // let pathname = $derived(page.url.pathname)
  // let navOpen = $state(false)

  // function toggleNav() {
  //   navOpen = !navOpen
  // }
</script>

<div class="px-5 sticky top-5 z-3">
  <nav
    class="px-5 py-2 max-w-4xl mx-auto flex justify-between items-center bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl"
  >
    <h1 class="font-bold text-xl md:text-3xl">
      <a title="Home" href="/">SaaD</a>
    </h1>

    <!-- <button
      aria-label="Toggle Menubar"
      onclick={toggleNav}
      class="md:hidden z-2 flex justify-between flex-col w-6 h-[19px]"
    >
      <div
        class={cn(
          "bg-white h-0.5 transition origin-left rounded-full",
          navOpen ? "rotate-45" : "",
        )}
      ></div>
      <div
        class={cn(
          "bg-white h-0.5 transition origin-left rounded-full",
          navOpen ? "-rotate-45" : "",
        )}
      ></div>
    </button> -->

    <ul
      class={cn(
        "flex flex-wrap gap-2 md:gap-5 tracking-tight md:tracking-normal",
        // navOpen
        //   ? "opacity-100 visible pointer-events-auto"
        //   : "opacity-0 invisible pointer-events-none",
      )}
    >
      <!-- <li>
        <a
          onclick={toggleNav}
          title="Projects"
          class={cn(
            "hover:text-white focus-visible:text-white transition",
            pathname === "/projects" ? "text-white" : "text-white/60",
          )}
          href="/projects">Projects</a
        >
      </li>
      {#each links as link}
        <li>
          <a
            onclick={toggleNav}
            title={link.label}
            class={cn(
              "hover:text-white focus-visible:text-white transition",
              pathname.startsWith(link.href) ? "text-white" : "text-white/60",
            )}
            href={link.href}>{link.label}</a
          >
        </li>
      {/each} -->
    </ul>
    <!-- <div class="hidden md:block"> -->
    <Socials />
    <!-- </div> -->
  </nav>
</div>

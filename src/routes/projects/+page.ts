import client from "$lib/client"
import type { PageLoad } from "./$types"

export const load = (async () => {
  const projects = await client.fetch(`*[_type == "projects"]{
        title,
        "slug": slug.current,
        "image": img.asset->url,
        "lqip": img.asset->metadata.lqip,
        url,
    }`)
  return {
    projects,
  }
}) as PageLoad

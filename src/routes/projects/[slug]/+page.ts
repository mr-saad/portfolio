import client from "$lib/client"
import type { PageLoad } from "./$types"

export const load = (async ({ params }) => {
  const project = await client.fetch(
    `*[_type == "projects" && slug.current == $slug][0]{
        title,
        "slug": slug.current,
        "image": img.asset->url,
        "lqip": img.asset->metadata.lqip,
        body,
        desc,
        techStack,
        }`,
    {
      slug: params.slug,
    },
  )
  return {
    project,
  }
}) as PageLoad

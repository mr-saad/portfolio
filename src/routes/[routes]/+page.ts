import client from "$lib/client"
import type { PageLoad } from "./$types"

export const load = (async ({ params }) => {
  const page = await client.fetch(
    `*[_type == "pages" && slug.current == $slug][0]{
        title,
        content,
        "slug": slug.current
    }`,
    { slug: params.routes },
  )
  return {
    page,
  }
}) satisfies PageLoad

import client from "$lib/client"
import type { LayoutLoad } from "./$types"

export const load = (async () => {
  const pages = await client.fetch(`*[_type == "pages"]{
        title,
        "slug": slug.current,
        content
    }`)
  return {
    pages,
  }
}) as LayoutLoad

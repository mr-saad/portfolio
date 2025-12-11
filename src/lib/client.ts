import { createClient } from "@sanity/client"

export default createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-11-12",
  useCdn: true,
})

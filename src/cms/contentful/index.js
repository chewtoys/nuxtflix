import { createClient } from "contentful"
import { mapEntry, mapEntries, queryType } from "./utils"

export default (env) => {
  // Client
  const client = createClient({
    host: env.CONTENTFUL_HOST,
    space: env.CONTENTFUL_SPACE_ID,
    environment: env.CONTENTFUL_ENVIRONMENT,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN
  })

  // API
  return {
    async getFilms() {
      const query = queryType("film")
      const entries = await client.getEntries(query)
      return mapEntries(entries.items)
    },
    async getFilmBySlug(slug) {
      const query = queryType("film", { "fields.slug": slug })
      const entries = await client.getEntries(query)
      return mapEntry(entries.items[0])
    }
  }
}
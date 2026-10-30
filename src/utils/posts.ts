import { getCollection } from 'astro:content'

/** Non-draft blog posts, newest first. */
export const getPublishedPosts = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

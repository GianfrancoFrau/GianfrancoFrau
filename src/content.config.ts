import { defineCollection } from 'astro:content'
import { z } from 'zod'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      position: z.number(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      tagline: z.string().optional(),
      /** Any CSS color: tints the placeholder icon when no `icon` is set */
      color: z.string().optional(),
      icon: image().optional(),
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      platform: z.string().optional(),
      status: z.enum(['active', 'wip', 'archived']).optional(),
      since: z.number().int().optional(),
      stack: z.array(z.string()).default([]),
      features: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      changelog: z
        .array(
          z.object({
            version: z.string(),
            date: z.coerce.date(),
            notes: z.array(z.string()).min(1)
          })
        )
        .default([])
    })
})

export const collections = { projects }

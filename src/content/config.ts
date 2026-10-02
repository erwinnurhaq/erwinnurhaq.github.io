import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      excerpt: z.string(),
      draft: z.boolean().default(false),
    }),
  }),
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      role: z.string(),
      stack: z.string(),
      liveUrl: z.string().url(),
      repoUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      heroImage: z.string().optional(),
      description: z.string(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
  }),
};

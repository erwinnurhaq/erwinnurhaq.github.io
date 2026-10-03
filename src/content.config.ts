import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    stack: z.string(),
    liveUrl: z.url(),
    repoUrl: z.url().optional(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    description: z.string(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };

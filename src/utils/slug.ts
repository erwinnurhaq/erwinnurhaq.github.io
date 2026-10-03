import type { CollectionEntry } from 'astro:content';

type Entry = CollectionEntry<'blog'> | CollectionEntry<'projects'>;

// Content-layer entries have file-based `id` (e.g. "my-post.mdx") instead
// of the legacy `slug`. Derive the URL slug by stripping the extension.
export function slugOf(entry: Entry): string {
  return entry.id.replace(/\.[^.]+$/, '');
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { slugOf } from '../utils/slug';

export async function GET(context) {
  const posts = await getCollection('blog');

  return rss({
    title: 'erwww.in | Blog',
    description: 'Thoughts on frontend engineering, design, and building for the web.',
    site: context.site,
    items: posts
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        link: `/blog/${slugOf(post)}/`,
      })),
  });
}

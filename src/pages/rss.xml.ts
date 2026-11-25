import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../i18n/blog';
import { profile } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: profile.name,
    description: profile.description.en,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en</language>',
  });
}

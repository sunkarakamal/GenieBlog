import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', p => !p.data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: "Kamal Nadh — building CloudGenie",
    description: "Notes on cloud platforms, FinOps and the messy reality of multi-cloud.",
    site: context.site,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/posts/${p.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}

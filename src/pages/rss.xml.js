import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION, withBase } from "../config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const site = context.site ?? import.meta.env.SITE;
  const channelUrl = new URL(import.meta.env.BASE_URL, site).toString();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: channelUrl,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: new URL(withBase(`/blog/${post.slug}/`), site).toString(),
    })),
  });
}
import MDXComponents from "@/components/mdx/MDXComponents";
import dynamic from 'next/dynamic';

const ThinkList = dynamic(() => import('@/components/ThinkList'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
});

const TOC = dynamic(() => import('@/components/TOC'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-20 w-full rounded"></div>
});
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { getThinkPosts } from "@/lib/think";
import { BlogPost } from "@/types/blog";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          defaultLang: {
            block: "typescript",
            inline: "javascript",
          },
        },
      ],
    ],
  },
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { posts }: { posts: BlogPost[] } = await getThinkPosts();
  const post: BlogPost | undefined = posts.find(
    (post) => post.metadata.slug === slug
  );

  return {
    title: `${post?.metadata.title || "404"} | ${siteConfig.name}`,
    description: `${post?.metadata.description}`,
    metadataBase: new URL('https://lulubiu.com/'),
  };
}

export default async function ThinkDetailsPage({ params }: Props) {
  const { slug } = await params;
  const { posts }: { posts: BlogPost[] } = await getThinkPosts();
  const postIndex = posts.findIndex((post) => post.metadata.slug === slug);
  const post = posts[postIndex];
  // Reverse list order, thus invert condition check
  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    notFound();
  }

  const { content, metadata } = post;

  return (
    <div className="flex flex-row w-full pt-12">
      <aside className="hidden md:block md:w-1/5 pl-6 max-h-[90vh] h-full overflow-auto sticky top-16 left-0 mt-6">
        <ThinkList isSide posts={posts} />
      </aside>
      <div className="w-full md:w-3/5 px-6">
        <article id={`article`}>
          <h1>{metadata.title}</h1>
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={options as any}
          />
        </article>
        <Separator className="my-12 bg-gray-600" />
        <div className="flex justify-between">
          <div>发布时间：{dayjs(metadata.date).format("YYYY-MM-DD")}</div>
          <div className="flex gap-2 flex-col sm:flex-row">
            {prevPost ? (
              <Link href={prevPost.metadata.slug} className="link-underline">
                上一篇
              </Link>
            ) : (
              <></>
            )}
            {nextPost ? (
              <Link href={nextPost.metadata.slug} className="link-underline">
                下一篇
              </Link>
            ) : (
              <></>
            )}
            <Link href="/" className="link-underline">
              去首页
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/5 pr-6 max-h-[90vh] h-full overflow-auto sticky top-16 left-0 mt-6">
        <TOC />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { posts }: { posts: BlogPost[] } = await getThinkPosts();

  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export const revalidate = 3600; // 每小时重新验证一次
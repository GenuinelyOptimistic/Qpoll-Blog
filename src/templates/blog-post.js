import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

export default function BlogPostTemplate({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const { title, date, description, tags, author } = post.frontmatter;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto w-full px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-12"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          All posts
        </Link>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
          {title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-[11px] font-medium tracking-widest text-gray-400 uppercase mb-4">
          <time dateTime={date}>{formatDate(date)}</time>
          {post.timeToRead && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{post.timeToRead} min read</span>
            </>
          )}
          {author && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{author}</span>
            </>
          )}
        </div>

        {/* Description / lede */}
        {description && (
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 border-b border-gray-100 pb-12">
            {description}
          </p>
        )}

        {/* Post body */}
        <div
          className="prose-knoli"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Post navigation */}
        {(previous || next) && (
          <nav className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {previous && (
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
                  Previous post
                </p>
                <Link
                  to={previous.fields.slug}
                  className="text-gray-900 font-semibold hover:text-purple-700 transition-colors leading-snug"
                >
                  {previous.frontmatter.title}
                </Link>
              </div>
            )}
            {next && (
              <div className={previous ? "sm:text-right" : "sm:col-start-2 sm:text-right"}>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
                  Next post
                </p>
                <Link
                  to={next.fields.slug}
                  className="text-gray-900 font-semibold hover:text-purple-700 transition-colors leading-snug"
                >
                  {next.frontmatter.title}
                </Link>
              </div>
            )}
          </nav>
        )}
      </article>
    </Layout>
  );
}

export function Head({ data }) {
  const { title, description, date } = data.markdownRemark.frontmatter;
  const slug = data.markdownRemark.fields.slug;
  return (
    <Seo title={title} description={description} pathname={slug}>
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
    </Seo>
  );
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        tags
        author
      }
    }
  }
`;

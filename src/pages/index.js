import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";
import { Seo } from "../components/Seo";

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto w-full px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Knoli Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-4">
            Thoughts, updates &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              insights
            </span>
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-xl leading-relaxed">
            Product updates, perspectives on polling, and ideas on how
            crowd-sourced opinions shape the world.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg font-light">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.fields.slug}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                description={post.frontmatter.description}
                tags={post.frontmatter.tags}
                timeToRead={post.timeToRead}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export function Head() {
  return <Seo pathname="/" />;
}

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          date
          description
          tags
        }
      }
    }
  }
`;

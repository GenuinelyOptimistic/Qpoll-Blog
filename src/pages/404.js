import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          404
        </p>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-gray-500 font-light text-lg mb-8 max-w-sm leading-relaxed">
          This post may have moved or been deleted.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Back to blog
        </Link>
      </div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="404 Not Found" />;
}

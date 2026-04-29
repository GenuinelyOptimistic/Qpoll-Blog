import React from "react";
import { Link } from "gatsby";

export function PostCard({ slug, title, date, description, tags, timeToRead }) {
  return (
    <article className="group border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow">
      <Link to={slug} className="block">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
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

        <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-snug mb-3 group-hover:text-purple-700 transition-colors">
          {title}
        </h2>

        {description && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 font-light line-clamp-3">
            {description}
          </p>
        )}

        <div className="flex items-center gap-4 text-[11px] font-medium tracking-wide text-gray-400 uppercase">
          <time dateTime={date}>{formatDate(date)}</time>
          {timeToRead && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{timeToRead} min read</span>
            </>
          )}
        </div>
      </Link>
    </article>
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

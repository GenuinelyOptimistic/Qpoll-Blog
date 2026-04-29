import React from "react";
import { Link } from "gatsby";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "https://knoli.app/about" },
  { label: "PRIVACY POLICY", href: "https://knoli.app/privacy" },
  { label: "TERMS OF USE", href: "https://knoli.app/terms" },
  { label: "TWITTER", href: "https://twitter.com/knoliapp" },
];

export function Footer() {
  return (
    <footer className="w-full py-8 px-6 mt-auto border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-gray-500 font-medium uppercase">
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
          {links.map((link) => {
            if (link.href.startsWith("/")) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <span>&copy; Knoli</span>
        </div>
      </div>
    </footer>
  );
}

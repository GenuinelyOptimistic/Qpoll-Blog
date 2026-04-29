import React from "react";
import { Link } from "gatsby";

export function Header() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
				<div className="flex items-center gap-6">
					<a
						href="/"
						className="hover:opacity-70 transition-opacity"
						rel="noopener noreferrer"
					>
						<img
							src="/knoli-logo.svg"
							alt="Knoli blog logo"
							className="h-5 w-auto"
						/>
					</a>
				</div>

				<div className="flex items-center gap-4">
					<a
						href="https://knoli.app"
						className="group hidden sm:inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
					>
						Back to App
						<svg
							className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="7" y1="17" x2="17" y2="7" />
							<polyline points="7 7 17 7 17 17" />
						</svg>
					</a>
				</div>
			</div>
		</nav>
	);
}

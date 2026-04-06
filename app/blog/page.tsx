import type { Metadata } from "next";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/lib/blog-posts";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog — Daniel Babalola",
    description: "Notes on design, accessibility, and shipping software.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen px-6 bg-dark-background font-[family-name:var(--font-darker-grotesque)]">
            <ResponsiveHeader />
            <div
                className={cn(
                    "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
                    "flex flex-row items-center w-full justify-between"
                )}
            >
                <h1 className="text-lg font-medium text-secondary-text">BLOG</h1>
            </div>
            <div
                className={cn(
                    "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5 md:p-8",
                    "flex flex-col gap-10"
                )}
            >
                <p className="text-primary-text text-xl leading-relaxed max-w-2xl">
                    Short notes on building products—design, accessibility, and shipping in real environments.
                </p>
                <ul className="flex flex-col gap-8 list-none p-0 m-0">
                    {blogPosts.map((post) => (
                        <li
                            key={post.title}
                            className="border-b-[1.5px] border-dark-border pb-8 last:border-b-0 last:pb-0"
                        >
                            <p className="text-secondary-text text-sm font-medium mb-2">
                                {new Date(post.date).toLocaleDateString("en-CA", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                            <h2 className="text-2xl font-semibold text-primary-text mb-3">
                                {post.href ? (
                                    <Link
                                        href={post.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline underline-offset-4 decoration-2 hover:text-secondary-text transition-colors duration-200 ease-out"
                                    >
                                        {post.title}
                                    </Link>
                                ) : (
                                    post.title
                                )}
                            </h2>
                            <p className="text-primary-text text-xl leading-relaxed">{post.excerpt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

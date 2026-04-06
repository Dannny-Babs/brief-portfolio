export type BlogPost = {
    title: string;
    date: string;
    excerpt: string;
    href?: string;
};

/** Static posts — swap for CMS later if needed */
export const blogPosts: BlogPost[] = [
    {
        title: "Shipping forward-deployed",
        date: "2026-03-12",
        excerpt:
            "Notes on staying close to customers when you’re also the one wiring features in production.",
        href: "https://github.com/Dannny-Babs",
    },
    {
        title: "Contrast before polish",
        date: "2026-02-02",
        excerpt: "Why I check readable text and focus states before animation or micro-interactions.",
    },
];

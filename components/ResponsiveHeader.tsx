"use client";
import Image from "next/image";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function ResponsiveHeader() {
    const [open, setOpen] = React.useState(false);
    return (
        <header className="max-w-5xl w-full sticky top-0 z-10 border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-4 flex items-center justify-between bg-dark-background">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="logo" width={50} height={50} />
               
            </div>
            {/* Socials and Nav Toggle (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="/">
                    <div className="flex items-center justify-center p-2 rounded-full border-[1.5px] border-dark-border">
                        <GithubIcon className="w-4 h-4 text-nav-link" />
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex items-center justify-center p-2 rounded-full border-[1.5px] border-dark-border">
                        <TwitterIcon className="w-4 h-4 text-nav-link" />
                    </div>
                </Link>
                {/* Nav Toggle (for future expansion) */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-nav-link/10 ml-2">
                            <span className="sr-only">Open navigation</span>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nav-link"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-dark-background border-none max-w-xs w-full">
                        <nav className="flex flex-col gap-4 p-6">
                            <Link href="/" className="text-nav-link text-lg font-semibold">About</Link>
                            <Link href="/" className="text-nav-link text-lg font-semibold">Blog</Link>
                            <Link href="/" className="text-nav-link text-lg font-semibold">Gallery</Link>
                            <div className="flex gap-4 mt-4">
                                <Link href="/">
                                    <div className="flex items-center justify-center p-2 rounded-full border-[1.5px] border-dark-border">
                                        <GithubIcon className="w-5 h-5 text-nav-link" />
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className="flex items-center justify-center p-2 rounded-full border-[1.5px] border-dark-border">
                                        <TwitterIcon className="w-5 h-5 text-nav-link" />
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </DialogContent>
                </Dialog>
            </div>
            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild className="text-nav-link">
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-nav-link/10">
                            <span className="sr-only">Open navigation</span>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nav-link"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-dark-background border-none max-w-xs w-full">
                        <nav className="flex flex-col gap-4 p-6">
                            <Link href="/" className="text-nav-link text-lg font-semibold">About</Link>
                            <Link href="/" className="text-nav-link text-lg font-semibold">Blog</Link>
                            <Link href="/" className="text-nav-link text-lg font-semibold">Gallery</Link>
                            <div className="flex gap-4 mt-4">
                                <Link href="/">
                                    <div className="flex items-center justify-center p-2 rounded-full border-[1.5px] border-dark-border">
                                        <GithubIcon className="w-5 h-5 text-nav-link" />
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className="flex items-center justify-center p-2 rounded-full border-[1.5px] border-dark-border">
                                        <TwitterIcon className="w-5 h-5 text-nav-link" />
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    );
} 
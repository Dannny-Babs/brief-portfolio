"use client";

import { useEffect, useState } from "react";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

/**
 * Extend or shrink this list at will.  Only ASCII-friendly
 * transliterations are included so FIGlet doesn’t choke.
 */
const GREETINGS = [
    "Welcome",          // English
    "Bienvenido",       // Spanish
    "Bienvenue",        // French
    "Willkommen",       // German
    "Benvenuto",        // Italian
    "Bem-vindo",        // Portuguese
    "Välkommen",        // Swedish
    "Welkom",           // Dutch
    "Tervetuloa",       // Finnish
    "Hosgeldiniz",      // Turkish
    "Aloha",            // Hawaiian
    "Karibu",           // Swahili
    "Shalom",           // Hebrew (romanised)
    "Salaam",           // Persian / Arabic (romanised)
    "Namaste",          // Hindi (romanised)
    "Selamat datang",   // Indonesian

];

export default function AsciiWelcome({ interval = 4000 }: { interval?: number }) {
    const [ascii, setAscii] = useState("Loading…");

    useEffect(() => {
        let isMounted = true;
        // Preload the Standard font for browser compatibility
        figlet.parseFont("Standard", standard);
        const renderGreeting = () => {
            const word = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];

            figlet.text(
                word,
                { font: "Standard", horizontalLayout: "default" },
                (err: Error | null, data: string) => {
                    if (!err && data && isMounted) {
                        setAscii(data);
                    }
                }
            );
        };

        renderGreeting();
        const id = setInterval(renderGreeting, interval);
        return () => {
            isMounted = false;
            clearInterval(id);
        };
    }, [interval]);

    return (
        <pre
            aria-label="ASCII welcome"
            className=" whitespace-pre leading-none text-xs sm:text-sm  font-mono"
        >
            {ascii}
        </pre>
    );
}
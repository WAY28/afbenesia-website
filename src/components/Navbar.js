"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "Tentang Kami" },
        { href: "/services", label: "Layanan" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Kontak" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white border-b border-[#E2E8F0] shadow-sm"
                    : "bg-white border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                            <Image
                                src="/afbenesia.jpg"
                                alt="Afbenesia Logo"
                                width={36}
                                height={36}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="font-bold text-lg text-dark tracking-tight">Afbenesia</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-mid hover:text-dark hover:bg-cream px-3 py-2 rounded-lg font-medium text-sm transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-accent text-dark px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-amber-400 transition-colors shadow-sm"
                        >
                            Konsultasi Gratis
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-cream transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-dark transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 border-t border-[#E2E8F0]" : "max-h-0"
                    }`}
            >
                <div className="bg-white px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 px-3 text-dark font-medium rounded-lg hover:bg-cream transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="block bg-accent text-dark text-center px-4 py-3 rounded-xl font-bold transition-colors hover:bg-amber-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Konsultasi Gratis
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
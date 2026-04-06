"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Tutup menu saat pindah halaman
    useEffect(() => { setIsOpen(false); }, [pathname]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "Tentang Kami" },
        { href: "/services", label: "Layanan" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Kontak" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0] shadow-sm" : "bg-white"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                        <div className="w-9 h-9 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Image src="/afbenesia.jpg" alt="Afbenesia" width={36} height={36} className="object-cover w-full h-full" />
                        </div>
                        <span className="font-bold text-lg text-dark tracking-tight">Afbenesia</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                className={`relative px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                                    pathname === link.href
                                        ? "text-primary bg-primary/5"
                                        : "text-gray-mid hover:text-dark hover:bg-cream"
                                }`}>
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block flex-shrink-0">
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                            className="bg-accent text-dark px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-amber-400 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 btn-press inline-block">
                            💬 Konsultasi Gratis
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button type="button" onClick={() => setIsOpen(p => !p)}
                        aria-label="Toggle menu" aria-expanded={isOpen}
                        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-cream transition-colors gap-[5px]">
                        <span className="block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 origin-center"
                            style={isOpen ? { transform: "rotate(45deg) translateY(7px)" } : {}} />
                        <span className="block w-5 h-0.5 bg-dark rounded-full transition-all duration-300"
                            style={isOpen ? { opacity: 0, transform: "scaleX(0)" } : {}} />
                        <span className="block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 origin-center"
                            style={isOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {}} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-white border-t border-[#E2E8F0] px-4 py-4 space-y-1 shadow-lg">
                    {navLinks.map((link, i) => (
                        <Link key={link.href} href={link.href}
                            className={`block py-2.5 px-3 rounded-lg font-medium transition-all duration-200 ${
                                pathname === link.href ? "bg-primary/5 text-primary" : "text-dark hover:bg-cream"
                            }`}
                            style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}>
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                            className="block bg-accent text-dark text-center px-4 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                            💬 Konsultasi Gratis via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
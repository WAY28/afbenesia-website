import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { href: "/about", label: "Tentang Kami" },
        { href: "/services", label: "Layanan" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Kontak" },
    ];

    const serviceList = [
        "AI Digital Strategy",
        "Business Coaching",
        "Virtual Assistant",
        "Digital Marketing",
        "Custom AI Solutions",
    ];

    return (
        <footer className="bg-dark text-white">
            {/* Top CTA strip */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white font-bold text-xl tracking-tight">
                        Siap memulai perjalanan bisnis Anda?
                    </p>
                    <Link
                        href="/contact"
                        className="bg-accent text-dark px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors whitespace-nowrap"
                    >
                        Konsultasi Gratis →
                    </Link>
                </div>
            </div>

            {/* Main footer grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-2">
                    <Link href="/" className="flex items-center gap-2.5 mb-5">
                        <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AF</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight">Afbenesia</span>
                    </Link>
                    <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
                        Humanized AI for Everlasting Business Growth. Mitra terpercaya Anda untuk transformasi digital yang berkelanjutan.
                    </p>
                    <div className="space-y-2">
                        <p className="text-white/45 text-sm flex items-start gap-2">
                            <span className="text-primary mt-0.5">📍</span>
                            Jl. Raya 64 Blimbing, Gudo, Jombang, Indonesia
                        </p>
                        <p className="text-white/45 text-sm flex items-center gap-2">
                            <span className="text-primary">📞</span>
                            +62 858 2012 2323
                        </p>
                        <p className="text-white/45 text-sm flex items-center gap-2">
                            <span className="text-primary">✉️</span>
                            admin@afbenesia.com
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Navigasi</h4>
                    <ul className="space-y-2.5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-white/60 hover:text-white text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Layanan</h4>
                    <ul className="space-y-2.5">
                        {serviceList.map((service) => (
                            <li key={service}>
                                <span className="text-white/60 text-sm">{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-white/35 text-xs">
                        © 2026 PT. Afbe Cahaya Kreatif. All Rights Reserved.
                    </p>
                    <p className="text-white/25 text-xs">
                        Humanized AI · Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
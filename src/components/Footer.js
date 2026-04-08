"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

export default function Footer() {
    const { t } = useLang();

    const navLinks = [
        { href: "/", key: "nav_home" },
        { href: "/about", key: "nav_about" },
        { href: "/services", key: "nav_services" },
        { href: "/training", key: "nav_training" },
        { href: "/portfolio", key: "nav_portfolio" },
        { href: "/blog", key: "nav_blog" },
        { href: "/contact", key: "nav_contact" },
    ];

    const serviceList = [
        { label: "AI Digital Strategy", href: "/services/ai-digital-strategy" },
        { label: "Business Coaching", href: "/services/business-coaching" },
        { label: "Virtual Assistant", href: "/services/virtual-assistant" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Custom AI Solutions", href: "/services/custom-ai" },
    ];

    return (
        <footer className="bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-2">
                    <Link href="/" className="flex items-center gap-3 mb-5 group">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20 group-hover:border-primary transition-colors">
                            <Image src="/afbenesia.jpg" alt="Afbenesia Logo" width={40} height={40} className="object-cover w-full h-full" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Afbenesia</span>
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{t("footer_tagline")}</p>
                    <div className="space-y-2 mb-6">
                        <p className="text-white/45 text-sm flex items-start gap-2">
                            <span className="mt-0.5 flex-shrink-0">📍</span>
                            Jl. Raya 64 Blimbing, Gudo, Jombang, Indonesia
                        </p>
                        <a href="tel:+6285820122323" className="text-white/45 hover:text-white text-sm flex items-center gap-2 transition-colors">
                            <span>📞</span>+62 858 2012 2323
                        </a>
                        <a href="mailto:admin@afbenesia.com" className="text-white/45 hover:text-white text-sm flex items-center gap-2 transition-colors">
                            <span>✉️</span>admin@afbenesia.com
                        </a>
                    </div>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#22c55e] transition-all hover:-translate-y-0.5">
                        <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        {t("footer_chat")}
                    </a>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">{t("footer_nav")}</h4>
                    <ul className="space-y-2.5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                                    {t(link.key)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">{t("services")}</h4>
                    <ul className="space-y-2.5">
                        {serviceList.map((service) => (
                            <li key={service.label}>
                                <Link href={service.href} className="text-white/60 hover:text-white text-sm transition-colors">
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-white/35 text-xs">{t("footer_copy")}</p>
                    <p className="text-white/25 text-xs">{t("footer_sub")}</p>
                </div>
            </div>
        </footer>
    );
}

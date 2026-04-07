"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const partners = [
    { name: "KemenkopUKM", abbr: "KemenKop\nUKM" },
    { name: "PT Maju Bersama", abbr: "PT Maju\nBersama" },
    { name: "Dinas Perindustrian Jombang", abbr: "Dinas\nJombang" },
    { name: "Startup X", abbr: "Startup X" },
    { name: "CoffeeHouse", abbr: "Coffee\nHouse" },
    { name: "Toko Nusantara", abbr: "Toko\nNusantara" },
];

const testimonialsId = [
    {
        name: "Budi Santoso",
        role: "CEO PT Maju Jaya",
        text: "Afbenesia membantu kami meraih peningkatan penjualan hingga 200% dalam 6 bulan. Pendekatan humanized AI-nya sangat efektif dan terasa personal.",
        avatar: "BS",
        rating: 5,
    },
    {
        name: "Sarah Wijaya",
        role: "Founder Kreatif Indah",
        text: "Layanan coaching dari Afbenesia benar-benar mengubah cara kami menjalankan bisnis. Strategi yang diberikan sangat jelas dan actionable.",
        avatar: "SW",
        rating: 5,
    },
    {
        name: "Diana",
        role: "COO Startup X",
        text: "Layanan virtual assistant mereka adalah game-changer untuk bisnis kami. Efisiensi operasional kami meningkat drastis sejak bekerja sama.",
        avatar: "DI",
        rating: 5,
    },
];

const testimonialsEn = [
    {
        name: "Budi Santoso",
        role: "CEO PT Maju Jaya",
        text: "Afbenesia helped us achieve a 200% sales increase in 6 months. Their humanized AI approach is highly effective and feels truly personal.",
        avatar: "BS",
        rating: 5,
    },
    {
        name: "Sarah Wijaya",
        role: "Founder Kreatif Indah",
        text: "The coaching services from Afbenesia completely changed how we run our business. The strategies given are very clear and actionable.",
        avatar: "SW",
        rating: 5,
    },
    {
        name: "Diana",
        role: "COO Startup X",
        text: "Their virtual assistant service is a game-changer for our business. Our operational efficiency has increased dramatically since we started working together.",
        avatar: "DI",
        rating: 5,
    },
];

export default function HomePage() {
    const { lang, t } = useLang();

    const services = t("services_list").slice(0, 4).map((s) => ({
        icon: s.icon,
        title: s.title,
        desc: s.desc,
        href: `/services/${s.id}`,
        tag: s.tag,
    }));

    const statsData = [
        { value: "100+", label: t("stat_clients") },
        { value: "98%", label: t("stat_satisfaction") },
        { value: "3+", label: t("stat_experience") },
        { value: "200%", label: t("stat_growth") },
    ];

    const whyUs = t("why_points");
    const testimonials = lang === "en" ? testimonialsEn : testimonialsId;

    const aboutCardsId = [
        { num: "100+", sub: "Klien Aktif", bg: "bg-primary", text: "text-white" },
        { num: "3+", sub: "Tahun Berpengalaman", bg: "bg-accent", text: "text-dark" },
        { num: "200%", sub: "Avg. Kenaikan Omset", bg: "bg-dark", text: "text-white" },
        { num: "98%", sub: "Tingkat Kepuasan", bg: "bg-white border border-[#E2E8F0]", text: "text-dark" },
    ];

    const aboutCardsEn = [
        { num: "100+", sub: "Active Clients", bg: "bg-primary", text: "text-white" },
        { num: "3+", sub: "Years of Experience", bg: "bg-accent", text: "text-dark" },
        { num: "200%", sub: "Avg. Revenue Growth", bg: "bg-dark", text: "text-white" },
        { num: "98%", sub: "Satisfaction Rate", bg: "bg-white border border-[#E2E8F0]", text: "text-dark" },
    ];

    const aboutCards = lang === "en" ? aboutCardsEn : aboutCardsId;

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/background.jpg" alt="Afbenesia Background" fill className="object-cover object-center" priority />
                    <div className="absolute inset-0 bg-dark/75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.07] skew-x-[-8deg] translate-x-16 pointer-events-none z-10" />
                <div className="absolute bottom-12 left-10 w-20 h-20 border-2 border-accent opacity-30 rotate-12 pointer-events-none rounded-sm z-10" />

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {t("hero_badge")}
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white">
                            {t("hero_title")}
                            <span className="block text-primary mt-1">{t("hero_title2")}</span>
                        </h1>
                        <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
                            {t("hero_desc")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                className="bg-accent text-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-amber-400 transition-colors text-center">
                                {t("hero_cta1")}
                            </a>
                            <Link href="/services"
                                className="border border-white/25 text-white/80 hover:bg-white/10 hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all text-center">
                                {t("hero_cta2")}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-cream z-20" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
            </section>

            {/* ===== STATS ===== */}
            <section className="bg-cream py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-dark/10">
                        {statsData.map((stat) => (
                            <div key={stat.label} className="text-center px-6 py-4">
                                <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-1 tracking-tight">{stat.value}</p>
                                <p className="text-dark/60 text-sm font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PARTNERS ===== */}
            <section className="py-16 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("partners_badge")}</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">{t("partners_title")}</h2>
                        <p className="text-dark/55 text-sm mt-3 max-w-xl mx-auto">{t("partners_desc")}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {partners.map((p) => (
                            <div key={p.name} className="flex items-center justify-center w-28 h-16 bg-cream rounded-xl border border-[#E2E8F0] px-3">
                                <span className="text-dark/50 text-xs font-semibold text-center whitespace-pre-line leading-tight">{p.abbr}</span>
                            </div>
                        ))}
                        <div className="flex items-center justify-center w-28 h-16 bg-primary/5 rounded-xl border border-primary/20 px-3">
                            <span className="text-primary text-xs font-bold text-center">🏆 {t("award1_title")}</span>
                        </div>
                        <div className="flex items-center justify-center w-28 h-16 bg-accent/20 rounded-xl border border-accent/30 px-3">
                            <span className="text-dark text-xs font-bold text-center">{t("award2_title")}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("services_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                            {t("services_title")}<br /><span className="text-primary">{t("services_title2")}</span>
                        </h2>
                        <p className="text-dark/55 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
                            {t("services_desc")}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((service, i) => (
                            <Link key={service.title} href={service.href}
                                className={`group relative p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                                    i === 0
                                        ? "bg-primary text-white border-primary hover:bg-primary-dark"
                                        : "bg-white text-dark border-[#E2E8F0] hover:border-primary/40 hover:shadow-card-hover"
                                }`}>
                                {service.tag && (
                                    <span className="absolute top-5 right-5 bg-accent text-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        {service.tag}
                                    </span>
                                )}
                                <div className="text-3xl mb-5">{service.icon}</div>
                                <h3 className={`font-bold text-lg mb-2 leading-snug ${i === 0 ? "text-white" : "text-dark group-hover:text-primary"} transition-colors`}>
                                    {service.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-dark/50"}`}>
                                    {service.desc}
                                </p>
                                <div className={`mt-6 text-sm font-semibold flex items-center gap-1 ${i === 0 ? "text-accent" : "text-primary"}`}>
                                    {t("btn_learn_more")}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="/services" className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all">
                            {t("btn_all_services")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT STRIP ===== */}
            <section className="bg-cream py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("why_badge")}</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark leading-tight tracking-tight mb-5">
                                {t("why_title")}<br />{t("why_title2")}
                            </h2>
                            <p className="text-dark/55 leading-relaxed mb-6 text-sm sm:text-base">
                                {t("why_desc")}
                            </p>
                            <ul className="space-y-3">
                                {whyUs.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-dark/70">
                                        <span className="w-5 h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full flex-shrink-0 mt-0.5 font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <Link href="/about" className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors">
                                    {t("why_know_more")}
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                {aboutCards.map((card) => (
                                    <div key={card.num} className={`${card.bg} ${card.text} p-6 rounded-2xl`}>
                                        <p className="text-3xl font-extrabold tracking-tight">{card.num}</p>
                                        <p className={`text-xs font-medium mt-1 ${card.text === "text-white" ? "opacity-60" : "opacity-50"}`}>{card.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("testi_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("testi_title")}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testi, i) => (
                            <div key={testi.name} className={`p-7 rounded-2xl border transition-all ${i === 1 ? "bg-dark text-white border-dark" : "bg-cream border-cream"}`}>
                                <div className="flex gap-0.5 mb-5">
                                    {Array.from({ length: testi.rating }).map((_, j) => (
                                        <span key={j} className="text-accent text-sm">★</span>
                                    ))}
                                </div>
                                <p className={`text-sm leading-relaxed mb-7 ${i === 1 ? "text-white/70" : "text-dark/65"}`}>"{testi.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">{testi.avatar}</div>
                                    <div>
                                        <p className={`font-bold text-sm ${i === 1 ? "text-white" : "text-dark"}`}>{testi.name}</p>
                                        <p className={`text-xs ${i === 1 ? "text-white/50" : "text-dark/45"}`}>{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="bg-primary py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] block mb-4">{t("cta_badge")}</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                        {t("cta_title")}<br />{t("cta_title2")}
                    </h2>
                    <p className="text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                        {t("cta_desc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                            className="bg-accent text-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-amber-400 transition-colors">
                            {t("cta_btn1")}
                        </a>
                        <Link href="/services"
                            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-base transition-all">
                            {t("cta_btn2")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
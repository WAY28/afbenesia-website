"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const postsId = [
    {
        slug: "humanized-ai-bisnis-indonesia",
        category: "AI & Teknologi",
        title: "Humanized AI: Masa Depan Bisnis Digital di Indonesia",
        excerpt: "Bagaimana AI yang terasa manusiawi dapat mengubah cara bisnis Indonesia berinteraksi dengan pelanggan dan menciptakan pertumbuhan berkelanjutan.",
        date: "15 Maret 2026",
        readTime: "5",
        featured: true,
    },
    {
        slug: "strategi-digital-umkm-2026",
        category: "Strategi Digital",
        title: "5 Strategi Digital yang Wajib Dicoba UMKM di 2026",
        excerpt: "Di era persaingan digital yang semakin ketat, UMKM perlu strategi tepat untuk bertahan dan berkembang. Berikut 5 strategi yang terbukti efektif.",
        date: "8 Maret 2026",
        readTime: "7",
        featured: false,
    },
    {
        slug: "coaching-bisnis-vs-konsultan",
        category: "Business Coaching",
        title: "Perbedaan Business Coaching dan Konsultan Bisnis: Mana yang Tepat?",
        excerpt: "Banyak pemilik bisnis bingung antara memilih coach bisnis atau konsultan. Artikel ini menjelaskan perbedaan dan kapan waktu yang tepat untuk masing-masing.",
        date: "1 Maret 2026",
        readTime: "6",
        featured: false,
    },
    {
        slug: "meningkatkan-omset-digital-marketing",
        category: "Digital Marketing",
        title: "Cara Meningkatkan Omset 200% dengan Digital Marketing yang Tepat",
        excerpt: "Bukan sekadar teori — ini adalah strategi nyata yang sudah kami terapkan bersama klien kami dan berhasil meningkatkan omset secara drastis.",
        date: "22 Februari 2026",
        readTime: "8",
        featured: false,
    },
    {
        slug: "virtual-assistant-produktivitas",
        category: "Virtual Assistant",
        title: "Bagaimana Virtual Assistant Meningkatkan Produktivitas Bisnis Anda",
        excerpt: "Delegasi tugas administratif ke virtual assistant profesional bisa membebaskan waktu berharga Anda untuk fokus pada pertumbuhan bisnis.",
        date: "14 Februari 2026",
        readTime: "4",
        featured: false,
    },
    {
        slug: "ai-chatbot-customer-service",
        category: "AI & Teknologi",
        title: "Implementasi AI Chatbot untuk Customer Service yang Efektif",
        excerpt: "AI chatbot bukan sekadar robot penjawab. Dengan pendekatan humanized, chatbot bisa menjadi aset penting dalam membangun loyalitas pelanggan.",
        date: "5 Februari 2026",
        readTime: "6",
        featured: false,
    },
];

const postsEn = [
    {
        slug: "humanized-ai-bisnis-indonesia",
        category: "AI & Technology",
        title: "Humanized AI: The Future of Digital Business in Indonesia",
        excerpt: "How human-feeling AI can transform the way Indonesian businesses interact with customers and create sustainable growth.",
        date: "March 15, 2026",
        readTime: "5",
        featured: true,
    },
    {
        slug: "strategi-digital-umkm-2026",
        category: "Digital Strategy",
        title: "5 Digital Strategies Every SME Must Try in 2026",
        excerpt: "In an increasingly competitive digital era, SMEs need the right strategy to survive and grow. Here are 5 proven effective strategies.",
        date: "March 8, 2026",
        readTime: "7",
        featured: false,
    },
    {
        slug: "coaching-bisnis-vs-konsultan",
        category: "Business Coaching",
        title: "Business Coaching vs. Business Consultant: Which is Right for You?",
        excerpt: "Many business owners are confused about choosing a business coach or consultant. This article explains the differences and the right time for each.",
        date: "March 1, 2026",
        readTime: "6",
        featured: false,
    },
    {
        slug: "meningkatkan-omset-digital-marketing",
        category: "Digital Marketing",
        title: "How to Increase Revenue by 200% with the Right Digital Marketing",
        excerpt: "Not just theory — these are real strategies we have applied with our clients that have dramatically increased revenue.",
        date: "February 22, 2026",
        readTime: "8",
        featured: false,
    },
    {
        slug: "virtual-assistant-produktivitas",
        category: "Virtual Assistant",
        title: "How a Virtual Assistant Boosts Your Business Productivity",
        excerpt: "Delegating administrative tasks to a professional virtual assistant can free up your valuable time to focus on business growth.",
        date: "February 14, 2026",
        readTime: "4",
        featured: false,
    },
    {
        slug: "ai-chatbot-customer-service",
        category: "AI & Technology",
        title: "Implementing an AI Chatbot for Effective Customer Service",
        excerpt: "AI chatbots are more than just answering robots. With a humanized approach, chatbots can become an important asset in building customer loyalty.",
        date: "February 5, 2026",
        readTime: "6",
        featured: false,
    },
];

export default function BlogPage() {
    const { lang, t } = useLang();
    const posts = lang === "en" ? postsEn : postsId;
    const categories = t("blog_categories");
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // Reset active category when language changes to avoid mismatch
    const handleCategoryClick = (cat) => setActiveCategory(cat);

    const featured = posts[0];
    const filtered = posts.slice(1).filter(p => activeCategory === categories[0] || p.category === activeCategory);

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">{t("blog_badge")}</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        {t("blog_title")}
                        <span className="block text-primary">{t("blog_title2")}</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                        {t("blog_desc")}
                    </p>
                </div>
            </section>

            {/* ===== CATEGORIES ===== */}
            <section className="bg-white border-b border-[#E2E8F0] sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 py-3 overflow-x-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                                    activeCategory === cat
                                        ? "bg-primary text-white"
                                        : "bg-cream text-dark/60 hover:bg-primary/10 hover:text-primary"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED POST ===== */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl p-8 sm:p-10 text-white">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="lg:w-2/3">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-accent text-dark text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Featured</span>
                                    <span className="text-white/50 text-xs">{featured.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">{featured.title}</h2>
                                <p className="text-white/70 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-white/50 text-xs">{featured.date}</span>
                                    <span className="text-white/30">•</span>
                                    <span className="text-white/50 text-xs">{featured.readTime} {t("blog_min_read")}</span>
                                </div>
                                <Link href={`/blog/${featured.slug}`}
                                    className="inline-block bg-accent text-dark px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors">
                                    {lang === "en" ? "Read More →" : "Baca Selengkapnya →"}
                                </Link>
                            </div>
                            <div className="lg:w-1/3 flex justify-center">
                                <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center text-6xl">🤖</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ALL POSTS ===== */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-dark mb-8">{t("blog_featured")}</h2>
                    {filtered.length === 0 ? (
                        <div className="text-center py-16 text-dark/40">
                            <p className="text-4xl mb-3">📭</p>
                            <p className="font-semibold">{lang === "en" ? "No articles in this category yet." : "Belum ada artikel di kategori ini."}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group p-6 rounded-2xl border border-[#E2E8F0] bg-cream hover:border-primary/30 hover:shadow-card-hover transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{post.category}</span>
                                        <span className="text-dark/40 text-xs">{post.readTime} {t("blog_min_read")}</span>
                                    </div>
                                    <h3 className="font-bold text-dark text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-dark/55 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-dark/40 text-xs">{post.date}</span>
                                        <span className="text-primary text-sm font-semibold">{t("read_more")}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ===== NEWSLETTER ===== */}
            <section className="bg-primary py-16">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">{t("blog_newsletter_title")}</h2>
                    <p className="text-white/60 text-sm mb-8">
                        {t("blog_newsletter_desc")}
                    </p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        {t("btn_wa")}
                    </a>
                </div>
            </section>
        </div>
    );
}
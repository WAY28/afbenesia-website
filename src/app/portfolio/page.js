import Link from "next/link";

const projects = [
    {
        title: "Transformasi Digital PT Maju Bersama",
        category: "AI Digital Strategy",
        result: "+200% Konversi",
        desc: "Merancang strategi digital yang didukung oleh AI, menghasilkan peningkatan 200% dalam konversi pemasaran digital dalam waktu 6 bulan.",
        tags: ["AI Strategy", "Digital Marketing", "SEO"],
        color: "bg-primary",
        textColor: "text-white",
    },
    {
        title: "Virtual Assistant untuk Startup X",
        category: "Virtual Assistant",
        result: "+50% Efisiensi",
        desc: "Mengembangkan sistem virtual assistant yang memungkinkan Startup X meningkatkan efisiensi operasional hingga 50%, dengan fokus pada manajemen waktu.",
        tags: ["Virtual Assistant", "Automation", "Operations"],
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        title: "Kampanye Digital CoffeeHouse",
        category: "Digital Marketing",
        result: "+300% Engagement",
        desc: "Meningkatkan engagement media sosial sebesar 300% dan penjualan online sebesar 150% melalui kampanye digital yang tertarget dan terukur.",
        tags: ["Social Media", "Content Marketing", "Ads"],
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        title: "Coaching Bisnis Toko Nusantara",
        category: "Business Coaching",
        result: "+25% Revenue",
        desc: "Melalui program coaching intensif, Toko Nusantara berhasil menavigasi tantangan pasar dan meningkatkan pendapatan bulanan hingga 25%.",
        tags: ["Business Coaching", "Mentorship", "Strategy"],
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        title: "Email Marketing Kreatif Indah",
        category: "Email Marketing",
        result: "+40% Open Rate",
        desc: "Strategi email marketing yang personal dan tersegmentasi meningkatkan open rate 40% dan konversi penjualan 30% dalam 3 bulan.",
        tags: ["Email Marketing", "CRM", "Segmentation"],
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        title: "Custom AI Chatbot Retailindo",
        category: "Custom AI Solutions",
        result: "-60% Response Time",
        desc: "Implementasi chatbot AI untuk customer service yang memangkas waktu respons 60% dan meningkatkan kepuasan pelanggan secara signifikan.",
        tags: ["AI Chatbot", "Customer Service", "Automation"],
        color: "bg-dark",
        textColor: "text-white",
    },
];

const caseStudies = [
    {
        client: "CoffeeHouse",
        before: "Engagement media sosial rendah dan penjualan online stagnan.",
        after: "Engagement meningkat 300% dan penjualan online naik 150% setelah kampanye digital.",
        metric: "300%",
        metricLabel: "Kenaikan Engagement",
    },
    {
        client: "Startup X",
        before: "Kesulitan mengelola tugas administratif yang mengganggu fokus tim pada pengembangan produk.",
        after: "Efisiensi operasional meningkat 50% dengan bantuan virtual assistant yang dikembangkan.",
        metric: "50%",
        metricLabel: "Peningkatan Efisiensi",
    },
    {
        client: "PT Maju Bersama",
        before: "Strategi digital yang tidak terstruktur dan ROI yang rendah.",
        after: "Peningkatan konversi 200% dalam 6 bulan dengan strategi AI yang terukur.",
        metric: "200%",
        metricLabel: "Kenaikan Konversi",
    },
];

const testimonials = [
    { name: "Budi Santoso", role: "CEO PT Maju Jaya", avatar: "BS", text: "Afbenesia membawa perspektif baru dalam strategi digital kami. Hasilnya luar biasa dan melebihi ekspektasi!" },
    { name: "Diana", role: "COO Startup X", avatar: "DI", text: "Layanan virtual assistant mereka adalah game-changer untuk bisnis kami. Sangat membantu efisiensi operasional." },
    { name: "Andi Pratama", role: "Direktur Usaha Mandiri", avatar: "AP", text: "Tim Afbenesia sangat profesional dan responsif. ROI yang kami dapatkan jauh melebihi ekspektasi awal." },
];

export default function PortfolioPage() {
    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Portofolio Kami</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        Hasil yang
                        <span className="block text-primary">Berbicara Sendiri</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Keberhasilan klien kami adalah keberhasilan kami. Lihat bagaimana kami membantu berbagai bisnis mencapai pertumbuhan nyata.
                    </p>
                </div>
            </section>

            {/* ===== PROJECTS ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.title} className={`p-7 rounded-2xl border border-[#E2E8F0] ${project.color} hover:shadow-card-hover transition-all hover:-translate-y-1`}>
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${project.textColor === "text-white" ? "text-white/50" : "text-primary"}`}>
                                        {project.category}
                                    </span>
                                    <span className={`font-extrabold text-lg ${project.textColor === "text-white" ? "text-accent" : "text-primary"}`}>
                                        {project.result}
                                    </span>
                                </div>
                                <h3 className={`font-bold text-xl mb-3 leading-snug ${project.textColor}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm leading-relaxed mb-5 ${project.textColor === "text-white" ? "text-white/60" : "text-dark/55"}`}>
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${project.textColor === "text-white"
                                                ? "bg-white/10 text-white/70"
                                                : "bg-primary/10 text-primary"
                                            }`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-5">
                                    <Link href="/contact" className={`text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all ${project.textColor === "text-white" ? "text-accent" : "text-primary"
                                        }`}>
                                        Diskusikan Proyek Serupa →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CASE STUDIES ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Studi Kasus</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Perubahan Nyata yang Kami Bawa</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {caseStudies.map((cs) => (
                            <div key={cs.client} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
                                <div className="bg-primary p-5 text-center">
                                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">{cs.client}</p>
                                    <p className="text-5xl font-extrabold text-white">{cs.metric}</p>
                                    <p className="text-white/70 text-xs mt-1">{cs.metricLabel}</p>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">Sebelum</p>
                                        <p className="text-dark/65 text-sm leading-relaxed">{cs.before}</p>
                                    </div>
                                    <div className="border-t border-[#E2E8F0] pt-4">
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Sesudah</p>
                                        <p className="text-dark/65 text-sm leading-relaxed">{cs.after}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Testimoni</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Apa Kata Klien Kami?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={t.name} className={`p-7 rounded-2xl ${i === 1 ? "bg-dark text-white" : "bg-cream"}`}>
                                <div className="flex gap-0.5 mb-4">
                                    {[1, 2, 3, 4, 5].map(j => <span key={j} className="text-accent text-sm">★</span>)}
                                </div>
                                <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? "text-white/70" : "text-dark/65"}`}>"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">{t.avatar}</div>
                                    <div>
                                        <p className={`font-bold text-sm ${i === 1 ? "text-white" : "text-dark"}`}>{t.name}</p>
                                        <p className={`text-xs ${i === 1 ? "text-white/50" : "text-dark/45"}`}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Punya Proyek Serupa?</h2>
                    <p className="text-white/60 mb-8">Kami ingin mendengar tentang tantangan Anda. Hubungi kami untuk diskusi tanpa komitmen.</p>
                    <Link href="/contact" className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        Hubungi Kami Sekarang
                    </Link>
                </div>
            </section>
        </div>
    );
}
import Link from "next/link";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const services = [
    {
        id: "ai-digital-strategy",
        icon: "🤖",
        title: "AI Digital Strategy Consulting",
        desc: "Kami menganalisis kebutuhan bisnis Anda secara mendalam dan mengembangkan strategi digital yang didukung oleh AI.",
        features: [
            "Analisis pasar & kompetitor berbasis data",
            "Strategi SEO & SEM yang teroptimasi AI",
            "Perencanaan kampanye iklan digital",
            "Dashboard monitoring & reporting real-time",
            "Optimasi konversi berbasis AI",
        ],
        tag: "Terpopuler",
    },
    {
        id: "business-coaching",
        icon: "🎯",
        title: "Business Coaching & Mentorship",
        desc: "Program coaching intensif untuk menghadapi tantangan bisnis dengan lebih percaya diri.",
        features: [
            "Sesi coaching 1-on-1 dengan mentor berpengalaman",
            "Analisis kinerja bisnis berkala",
            "Perumusan strategi jangka pendek & panjang",
            "Identifikasi peluang & mitigasi risiko",
            "Mindset & leadership development",
        ],
        tag: null,
    },
    {
        id: "virtual-assistant",
        icon: "🖥️",
        title: "Virtual Assistant Services",
        desc: "Dukungan administrasi yang efisien dan profesional agar Anda fokus pada hal terpenting.",
        features: [
            "Manajemen email & komunikasi bisnis",
            "Pengaturan jadwal & kalender",
            "Pengelolaan media sosial",
            "Riset & pengumpulan data",
            "Pembuatan laporan & presentasi",
        ],
        tag: null,
    },
    {
        id: "digital-marketing",
        icon: "📢",
        title: "Digital Marketing Campaigns",
        desc: "Kampanye pemasaran digital yang efektif untuk meningkatkan konversi dan penjualan bisnis.",
        features: [
            "Google Ads & Meta Ads management",
            "Konten marketing & copywriting",
            "Email marketing campaigns",
            "Social media management",
            "Analitik & optimasi kampanye",
        ],
        tag: null,
    },
    {
        id: "custom-ai",
        icon: "⚙️",
        title: "Custom AI Solutions",
        desc: "Pengembangan solusi AI kustom seperti chatbot, sistem rekomendasi, dan analitik prediktif.",
        features: [
            "Chatbot AI untuk customer service",
            "Sistem rekomendasi produk",
            "Analitik prediktif & forecasting",
            "Otomasi proses bisnis berbasis AI",
            "Integrasi dengan sistem existing",
        ],
        tag: "Baru",
    },
    {
        id: "email-marketing",
        icon: "✉️",
        title: "Email Marketing Strategy",
        desc: "Strategi kampanye email yang personal dan tertarget untuk membangun loyalitas pelanggan.",
        features: [
            "Segmentasi audiens yang tepat",
            "Desain email yang menarik & responsif",
            "Automation & drip campaign",
            "A/B testing & optimasi",
            "Laporan performa komprehensif",
        ],
        tag: null,
    },
];

const process = [
    { step: "01", title: "Konsultasi Gratis", desc: "Kami memahami kebutuhan dan tujuan bisnis Anda melalui sesi konsultasi awal." },
    { step: "02", title: "Analisis & Strategi", desc: "Tim kami menganalisis situasi bisnis dan merancang strategi yang tepat sasaran." },
    { step: "03", title: "Implementasi", desc: "Eksekusi strategi dengan monitoring ketat dan penyesuaian berkala." },
    { step: "04", title: "Evaluasi & Optimasi", desc: "Pengukuran hasil, pelaporan, dan optimasi berkelanjutan untuk hasil terbaik." },
];

export default function ServicesPage() {
    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Layanan Kami</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        Solusi Digital
                        <span className="block text-primary">Inovatif & Terukur</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Layanan terintegrasi yang dirancang untuk pertumbuhan bisnis Anda yang berkelanjutan di era digital.
                    </p>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`relative p-7 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-card-hover ${
                                    i === 0 ? "bg-primary border-primary" : "bg-cream border-[#E2E8F0] hover:border-primary/30"
                                }`}
                            >
                                {service.tag && (
                                    <span className="absolute top-5 right-5 bg-accent text-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        {service.tag}
                                    </span>
                                )}
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h2 className={`font-extrabold text-xl mb-2 leading-snug ${i === 0 ? "text-white" : "text-dark"}`}>
                                    {service.title}
                                </h2>
                                <p className={`text-sm leading-relaxed mb-5 ${i === 0 ? "text-white/70" : "text-dark/60"}`}>
                                    {service.desc}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                                                i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                                            }`}>✓</span>
                                            <span className={`text-xs ${i === 0 ? "text-white/80" : "text-dark/65"}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-3 flex-wrap">
                                    <Link
                                        href={`/services/${service.id}`}
                                        className={`inline-block px-4 py-2 rounded-xl font-bold text-xs transition-colors ${
                                            i === 0
                                                ? "bg-white/20 text-white hover:bg-white/30"
                                                : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                                        }`}
                                    >
                                        Detail Layanan →
                                    </Link>
                                    <a
                                        href={`${WA_URL.replace("layanan Anda", `layanan ${service.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-block px-4 py-2 rounded-xl font-bold text-xs transition-colors ${
                                            i === 0
                                                ? "bg-accent text-dark hover:bg-amber-400"
                                                : "bg-dark text-white hover:bg-dark/80"
                                        }`}
                                    >
                                        💬 Diskusikan Kebutuhan
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Cara Kerja Kami</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Proses yang Sederhana & Efektif</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((p) => (
                            <div key={p.step} className="text-center p-6">
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4">
                                    {p.step}
                                </div>
                                <h3 className="font-bold text-dark text-lg mb-2">{p.title}</h3>
                                <p className="text-dark/55 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Siap Mengembangkan Bisnis Anda?</h2>
                    <p className="text-white/60 mb-8">Hubungi kami hari ini untuk konsultasi gratis — langsung via WhatsApp!</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        💬 Hubungi Kami via WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
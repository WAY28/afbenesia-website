import Link from "next/link";

const services = [
    {
        id: "ai-strategy",
        icon: "🤖",
        title: "AI Digital Strategy Consulting",
        shortTitle: "AI Digital Strategy",
        desc: "Kami menganalisis kebutuhan bisnis Anda secara mendalam dan mengembangkan strategi digital yang didukung oleh AI, mencakup analisis pasar, SEO, dan kampanye iklan yang terukur.",
        features: [
            "Analisis pasar & kompetitor berbasis data",
            "Strategi SEO & SEM yang teroptimasi AI",
            "Perencanaan kampanye iklan digital",
            "Dashboard monitoring & reporting real-time",
            "Optimasi konversi berbasis AI",
        ],
        tag: "Terpopuler",
        color: "bg-primary",
        textColor: "text-white",
    },
    {
        id: "coaching",
        icon: "🎯",
        title: "Business Coaching & Mentorship",
        shortTitle: "Business Coaching",
        desc: "Program coaching intensif yang dirancang untuk membantu Anda menghadapi tantangan bisnis dengan lebih percaya diri, mencakup bimbingan reguler dan analisis kinerja.",
        features: [
            "Sesi coaching 1-on-1 dengan mentor berpengalaman",
            "Analisis kinerja bisnis berkala",
            "Perumusan strategi jangka pendek & panjang",
            "Identifikasi peluang & mitigasi risiko",
            "Mindset & leadership development",
        ],
        tag: null,
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        id: "va",
        icon: "🖥️",
        title: "Virtual Assistant Services",
        shortTitle: "Virtual Assistant",
        desc: "Dukungan administrasi yang efisien dan profesional, mencakup manajemen email, pengaturan jadwal, dan pengelolaan media sosial agar Anda fokus pada hal terpenting.",
        features: [
            "Manajemen email & komunikasi bisnis",
            "Pengaturan jadwal & kalender",
            "Pengelolaan media sosial",
            "Riset & pengumpulan data",
            "Pembuatan laporan & presentasi",
        ],
        tag: null,
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        id: "marketing",
        icon: "📢",
        title: "Digital Marketing Campaigns",
        shortTitle: "Digital Marketing",
        desc: "Kampanye pemasaran digital yang efektif dan terukur, termasuk iklan Google, iklan media sosial, dan kampanye email untuk meningkatkan konversi dan penjualan bisnis.",
        features: [
            "Google Ads & Meta Ads management",
            "Konten marketing & copywriting",
            "Email marketing campaigns",
            "Social media management",
            "Analitik & optimasi kampanye",
        ],
        tag: null,
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        id: "ai-solutions",
        icon: "⚙️",
        title: "Custom AI Solutions",
        shortTitle: "Custom AI",
        desc: "Pengembangan solusi AI kustom seperti chatbot pintar, sistem rekomendasi produk, dan analitik prediktif yang disesuaikan dengan kebutuhan unik bisnis Anda.",
        features: [
            "Chatbot AI untuk customer service",
            "Sistem rekomendasi produk",
            "Analitik prediktif & forecasting",
            "Otomasi proses bisnis berbasis AI",
            "Integrasi dengan sistem existing",
        ],
        tag: "Baru",
        color: "bg-cream",
        textColor: "text-dark",
    },
    {
        id: "email-marketing",
        icon: "✉️",
        title: "Email Marketing Strategy",
        shortTitle: "Email Marketing",
        desc: "Strategi kampanye email yang personal dan tertarget untuk membangun loyalitas pelanggan, meningkatkan repeat order, dan mendorong pertumbuhan penjualan.",
        features: [
            "Segmentasi audiens yang tepat",
            "Desain email yang menarik & responsif",
            "Automation & drip campaign",
            "A/B testing & optimasi",
            "Laporan performa komprehensif",
        ],
        tag: null,
        color: "bg-cream",
        textColor: "text-dark",
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
                        Layanan terintegrasi yang dirancang untuk pertumbuhan bisnis Anda yang berkelanjutan di era digital — dari strategi AI hingga pendampingan penuh.
                    </p>
                </div>
            </section>

            {/* ===== SERVICES LIST ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {services.map((service, i) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`p-8 rounded-2xl border border-[#E2E8F0] ${service.color} transition-all hover:shadow-card-hover`}
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-1/2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-3xl">{service.icon}</span>
                                            {service.tag && (
                                                <span className="bg-accent text-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                    {service.tag}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className={`text-2xl font-extrabold mb-3 ${i === 0 ? "text-white" : "text-dark"}`}>
                                            {service.title}
                                        </h2>
                                        <p className={`leading-relaxed text-sm mb-6 ${i === 0 ? "text-white/70" : "text-dark/60"}`}>
                                            {service.desc}
                                        </p>
                                        <Link
                                            href="/contact"
                                            className={`inline-block px-6 py-3 rounded-xl font-bold text-sm transition-colors ${i === 0
                                                    ? "bg-accent text-dark hover:bg-amber-400"
                                                    : "bg-primary text-white hover:bg-primary-dark"
                                                }`}
                                        >
                                            Diskusikan Kebutuhan →
                                        </Link>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <h3 className={`font-bold text-sm uppercase tracking-widest mb-4 ${i === 0 ? "text-white/50" : "text-dark/40"}`}>
                                            Yang Anda Dapatkan
                                        </h3>
                                        <ul className="space-y-2.5">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                                                        }`}>✓</span>
                                                    <span className={`text-sm ${i === 0 ? "text-white/80" : "text-dark/65"}`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                        Siap Mengembangkan Bisnis Anda?
                    </h2>
                    <p className="text-white/60 mb-8">Hubungi kami hari ini untuk konsultasi gratis dan temukan layanan yang tepat untuk Anda.</p>
                    <Link href="/contact" className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        Hubungi Kami Sekarang
                    </Link>
                </div>
            </section>
        </div>
    );
}
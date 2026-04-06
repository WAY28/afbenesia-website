import Link from "next/link";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const projects = [
    {
        slug: "pt-maju-bersama",
        title: "Transformasi Digital PT Maju Bersama",
        category: "AI Digital Strategy",
        result: "+200% Konversi",
        desc: "Merancang strategi digital berbasis AI yang menghasilkan peningkatan 200% dalam konversi pemasaran digital dalam waktu 6 bulan.",
        tags: ["AI Strategy", "Digital Marketing", "SEO"],
        color: "bg-primary border-primary",
        textColor: "text-white",
    },
    {
        slug: "startup-x-virtual-assistant",
        title: "Virtual Assistant untuk Startup X",
        category: "Virtual Assistant",
        result: "+50% Efisiensi",
        desc: "Mengembangkan sistem virtual assistant yang meningkatkan efisiensi operasional 50%, membebaskan tim untuk fokus pada pengembangan produk.",
        tags: ["Virtual Assistant", "Automation", "Operations"],
        color: "bg-cream border-[#E2E8F0]",
        textColor: "text-dark",
    },
    {
        slug: "coffeehouse-digital-campaign",
        title: "Kampanye Digital CoffeeHouse",
        category: "Digital Marketing",
        result: "+300% Engagement",
        desc: "Meningkatkan engagement media sosial 300% dan penjualan online 150% melalui kampanye digital yang tertarget dan kreatif.",
        tags: ["Social Media", "Content Marketing", "Ads"],
        color: "bg-cream border-[#E2E8F0]",
        textColor: "text-dark",
    },
    {
        slug: "toko-nusantara-coaching",
        title: "Coaching Bisnis Toko Nusantara",
        category: "Business Coaching",
        result: "+25% Revenue",
        desc: "Melalui program coaching intensif, Toko Nusantara berhasil menavigasi tantangan pasar dan meningkatkan pendapatan bulanan 25%.",
        tags: ["Business Coaching", "Mentorship", "Strategy"],
        color: "bg-cream border-[#E2E8F0]",
        textColor: "text-dark",
    },
    {
        slug: "kreatif-indah-email-marketing",
        title: "Email Marketing Kreatif Indah",
        category: "Email Marketing",
        result: "+40% Open Rate",
        desc: "Strategi email marketing yang personal meningkatkan open rate 40% dan konversi penjualan 30% dalam 3 bulan pertama.",
        tags: ["Email Marketing", "CRM", "Segmentation"],
        color: "bg-cream border-[#E2E8F0]",
        textColor: "text-dark",
    },
    {
        slug: "retailindo-ai-chatbot",
        title: "AI Chatbot Retailindo",
        category: "Custom AI Solutions",
        result: "-60% Response Time",
        desc: "Implementasi chatbot AI untuk customer service yang memangkas waktu respons 60% dan meningkatkan kepuasan pelanggan secara signifikan.",
        tags: ["AI Chatbot", "Customer Service", "Automation"],
        color: "bg-dark border-dark",
        textColor: "text-white",
    },
];

const stats = [
    { value: "100+", label: "Proyek Selesai" },
    { value: "98%", label: "Klien Puas" },
    { value: "200%", label: "Avg. Kenaikan Omset" },
    { value: "3+", label: "Tahun Pengalaman" },
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

            {/* ===== STATS ===== */}
            <section className="bg-accent py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <p className="text-dark font-extrabold text-4xl tracking-tight">{s.value}</p>
                                <p className="text-dark/60 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS GRID ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Proyek Terpilih</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Karya Terbaik Kami</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link key={project.slug} href={`/portfolio/${project.slug}`}
                                className={`group p-7 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-card-hover ${project.color}`}>
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${project.textColor === "text-white" ? "text-white/50" : "text-primary"}`}>
                                        {project.category}
                                    </span>
                                    <span className={`font-extrabold text-lg ${project.textColor === "text-white" ? "text-accent" : "text-primary"}`}>
                                        {project.result}
                                    </span>
                                </div>
                                <h3 className={`font-bold text-xl mb-3 leading-snug group-hover:opacity-80 transition-opacity ${project.textColor}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm leading-relaxed mb-5 ${project.textColor === "text-white" ? "text-white/60" : "text-dark/55"}`}>
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                                            project.textColor === "text-white" ? "bg-white/10 text-white/70" : "bg-primary/10 text-primary"
                                        }`}>{tag}</span>
                                    ))}
                                </div>
                                <span className={`text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${
                                    project.textColor === "text-white" ? "text-accent" : "text-primary"
                                }`}>
                                    Lihat Detail →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Punya Proyek Serupa?</h2>
                    <p className="text-white/60 mb-8">Kami ingin mendengar tentang tantangan bisnis Anda. Hubungi kami untuk diskusi tanpa komitmen!</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        💬 Diskusikan Proyek Anda
                    </a>
                </div>
            </section>
        </div>
    );
}
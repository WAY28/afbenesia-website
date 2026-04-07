"use client";
import Link from "next/link";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20info%20program%20pelatihan.";

const programs = [
    {
        slug: "ai-digital-marketing-reguler",
        badge: "Pelatihan Intensif Berbasis AI",
        badgeEn: "AI-Based Intensive Training",
        title: "AI Digital Marketing Reguler",
        desc: "Pelatihan 3 bulan (160 JP) untuk menguasai keterampilan digital marketing fundamental, dari Sosmed Manager hingga Magang/Freelance.",
        descEn: "3-month training (160 hours) to master fundamental digital marketing skills, from Social Media Manager to Internship/Freelance.",
        duration: "3 Bulan", durationEn: "3 Months",
        level: "Pemula – Menengah", levelEn: "Beginner – Intermediate",
        price: "Hubungi untuk harga", priceEn: "Contact for pricing",
        cert: "Sertifikasi BNSP",
        highlights: ["Profesional Digital Marketer AI", "Sosmed Manager & Live Streaming", "Sertifikasi BNSP (Uji Kompetensi)"],
        highlightsEn: ["AI Digital Marketing Professional", "Social Media Manager & Live Streaming", "BNSP Certification (Competency Test)"],
        emoji: "📱",
        color: "bg-primary",
    },
    {
        slug: "manajemen-usaha-terapan",
        badge: "Program 1 Tahun: Jalur Wirausaha Sukses",
        badgeEn: "1-Year Program: Entrepreneurship Track",
        title: "Manajemen Usaha Terapan",
        desc: "Pelatihan komprehensif dalam Business Planning, Operasional, Keuangan, dan Digitalisasi Bisnis untuk menjadi Manajer Operasional atau Wirausahawan.",
        descEn: "Comprehensive training in Business Planning, Operations, Finance, and Business Digitalization to become an Operations Manager or Entrepreneur.",
        duration: "12 Bulan", durationEn: "12 Months",
        level: "Menengah – Lanjutan", levelEn: "Intermediate – Advanced",
        price: "Hubungi untuk harga", priceEn: "Contact for pricing",
        cert: "Sertifikasi Profesi",
        highlights: ["Business Planning & Development", "Leadership & Keuangan", "Digitalisasi Bisnis (Aplikasi POS)"],
        highlightsEn: ["Business Planning & Development", "Leadership & Finance", "Business Digitalization (POS Apps)"],
        emoji: "🏢",
        color: "bg-cream border border-[#E2E8F0]",
    },
    {
        slug: "digital-business-ai-driven",
        badge: "Program 1 Tahun: Jalur Karir Profesional",
        badgeEn: "1-Year Program: Professional Career Track",
        title: "Digital Business (AI-Driven Track)",
        desc: "Fokus pada penguasaan pemasaran digital, konten, SEO, dan strategi AI untuk menjadi Digital Marketer hingga Agency Founder.",
        descEn: "Focused on mastering digital marketing, content, SEO, and AI strategy to become a Digital Marketer or Agency Founder.",
        duration: "12 Bulan", durationEn: "12 Months",
        level: "Pemula – Profesional", levelEn: "Beginner – Professional",
        price: "Hubungi untuk harga", priceEn: "Contact for pricing",
        cert: "Sertifikasi Profesi",
        highlights: ["Strategi AI & Riset Pasar", "Konten Kreatif (Video & Desain)", "Performance Marketing (Meta Ads)"],
        highlightsEn: ["AI Strategy & Market Research", "Creative Content (Video & Design)", "Performance Marketing (Meta Ads)"],
        emoji: "🚀",
        color: "bg-cream border border-[#E2E8F0]",
    },
];

const mentors = [
    {
        title: "Mentor Human Resource",
        desc: "Bagikan pengalaman Anda di bidang HR untuk membimbing talenta muda dalam manajemen SDM dan budaya kerja.",
        descEn: "Share your HR expertise to guide young talent in human resource management and work culture.",
        type: "Remote · Fee Professional",
        initials: "HR",
    },
    {
        title: "Coming Soon",
        desc: "Pantau terus untuk posisi mentor selanjutnya.",
        descEn: "Stay tuned for the next mentor positions.",
        type: "Coming Soon",
        initials: "?",
    },
];

export default function TrainingPage() {
    const { lang, t } = useLang();

    return (
        <div className="font-sans">

            {/* HERO */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="absolute bottom-12 left-10 w-20 h-20 border-2 border-accent opacity-20 rotate-12 rounded-sm pointer-events-none animate-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4 animate-fade-in">
                        {t("training_badge")}
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl animate-fade-up delay-100">
                        {t("training_title")}
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8 animate-fade-up delay-200">
                        {t("training_desc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
                        <a href="https://linktr.ee/lpk.afbenesia" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            🎓 {t("register_now")}
                        </a>
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center border border-white/25 text-white/80 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
                            💬 {lang === "id" ? "Tanya Info Program" : "Ask About Programs"}
                        </a>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-accent py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { val: "3", label: lang === "id" ? "Program Unggulan" : "Featured Programs" },
                            { val: "160+", label: lang === "id" ? "Jam Pelatihan" : "Training Hours" },
                            { val: "BNSP", label: lang === "id" ? "Sertifikasi Resmi" : "Official Certification" },
                            { val: "100%", label: lang === "id" ? "Berbasis Praktik" : "Practice-Based" },
                        ].map((s, i) => (
                            <div key={i} className="reveal">
                                <p className="text-dark font-extrabold text-3xl sm:text-4xl">{s.val}</p>
                                <p className="text-dark/60 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            {lang === "id" ? "Program Kami" : "Our Programs"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                            {t("training_programs")}
                        </h2>
                        <p className="text-dark/50 text-sm mt-3 max-w-xl mx-auto">{t("training_programs_desc")}</p>
                    </div>

                    <div className="space-y-8">
                        {programs.map((prog, i) => (
                            <div key={prog.slug}
                                className={`rounded-2xl overflow-hidden border border-[#E2E8F0] reveal delay-${i * 100}`}>
                                <div className={`${i === 0 ? "bg-primary" : "bg-white"} p-8`}>
                                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                                        {/* Left */}
                                        <div className="lg:w-2/3">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-4xl">{prog.emoji}</span>
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                                                    {lang === "id" ? prog.badge : prog.badgeEn}
                                                </span>
                                            </div>
                                            <h3 className={`text-2xl font-extrabold mb-3 ${i === 0 ? "text-white" : "text-dark"}`}>
                                                {prog.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed mb-5 ${i === 0 ? "text-white/70" : "text-dark/60"}`}>
                                                {lang === "id" ? prog.desc : prog.descEn}
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                {(lang === "id" ? prog.highlights : prog.highlightsEn).map((h) => (
                                                    <li key={h} className="flex items-center gap-2">
                                                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>✓</span>
                                                        <span className={`text-sm ${i === 0 ? "text-white/80" : "text-dark/70"}`}>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <Link href={`/training/${prog.slug}`}
                                                    className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 btn-press ${i === 0 ? "bg-accent text-dark hover:bg-amber-400" : "bg-primary text-white hover:bg-primary-dark"}`}>
                                                    {t("see_detail")} →
                                                </Link>
                                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                                    className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-all ${i === 0 ? "border border-white/30 text-white hover:bg-white/10" : "border border-[#E2E8F0] text-dark hover:bg-cream"}`}>
                                                    💬 {lang === "id" ? "Tanya Info" : "Ask Info"}
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right: info card */}
                                        <div className="lg:w-1/3 w-full">
                                            <div className={`rounded-2xl p-5 space-y-4 ${i === 0 ? "bg-white/10" : "bg-cream border border-[#E2E8F0]"}`}>
                                                {[
                                                    { label: t("training_duration"), val: lang === "id" ? prog.duration : prog.durationEn },
                                                    { label: t("detail_level_label"), val: lang === "id" ? prog.level : prog.levelEn },
                                                    { label: t("detail_cert_label"), val: prog.cert },
                                                    { label: t("detail_method_label"), val: t("detail_online") },
                                                    { label: t("training_price"), val: lang === "id" ? prog.price : prog.priceEn },
                                                ].map(item => (
                                                    <div key={item.label} className={`flex justify-between items-center text-sm pb-3 border-b last:border-0 last:pb-0 ${i === 0 ? "border-white/10" : "border-[#E2E8F0]"}`}>
                                                        <span className={i === 0 ? "text-white/60" : "text-dark/50"}>{item.label}</span>
                                                        <span className={`font-bold ${i === 0 ? "text-white" : "text-dark"}`}>{item.val}</span>
                                                    </div>
                                                ))}
                                                <a href="https://linktr.ee/lpk.afbenesia" target="_blank" rel="noopener noreferrer"
                                                    className={`block text-center py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 ${i === 0 ? "bg-accent text-dark hover:bg-amber-400" : "bg-primary text-white hover:bg-primary-dark"}`}>
                                                    🎓 {t("register_now")}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MENTOR */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            {lang === "id" ? "Karir di Afbenesia" : "Career at Afbenesia"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("training_mentor_title")}</h2>
                        <p className="text-dark/50 text-sm mt-3 max-w-lg mx-auto">{t("training_mentor_desc")}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {mentors.map((m, i) => (
                            <div key={m.title} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] card-hover reveal">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center font-extrabold text-xl">
                                        {m.initials}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold bg-accent/20 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-wider">BARU</span>
                                        <p className="font-bold text-dark mt-1">{m.title}</p>
                                        <p className="text-primary text-xs">{m.type}</p>
                                    </div>
                                </div>
                                <p className="text-dark/60 text-sm leading-relaxed mb-4">
                                    {lang === "id" ? m.desc : m.descEn}
                                </p>
                                <a href="mailto:admin@afbenesia.com"
                                    className="inline-block text-primary text-sm font-bold hover:underline">
                                    {t("register_now")} →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t("training_cta_title")}</h2>
                    <p className="text-white/60 mb-8">{t("training_cta_desc")}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="https://linktr.ee/lpk.afbenesia" target="_blank" rel="noopener noreferrer"
                            className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            🎓 {t("register_now")}
                        </a>
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                            className="inline-block border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
                            💬 {lang === "id" ? "Tanya via WhatsApp" : "Ask via WhatsApp"}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
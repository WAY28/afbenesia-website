import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const timeline = [
    { year: "2018", desc: "Afbenesia didirikan dengan misi untuk membantu bisnis kecil menengah di Indonesia berkembang melalui teknologi digital." },
    { year: "2019", desc: "Peluncuran program coaching pertama yang berfokus pada strategi digital untuk UMKM." },
    { year: "2020", desc: "Mengembangkan layanan konsultasi dan pendampingan bisnis yang holistik dan berkelanjutan." },
    { year: "2021", desc: "Meraih penghargaan Top 6 program Entrepreneur Development oleh KemenkopUKM bidang Jasa & Teknologi." },
    { year: "2023", desc: "Meluncurkan layanan Humanized AI — menggabungkan kecerdasan buatan dengan sentuhan manusiawi." },
    { year: "2024", desc: "Ekspansi layanan ke seluruh Indonesia dengan 100+ klien aktif dan tingkat kepuasan 98%." },
];

const values = [
    { icon: "💡", title: "Inovasi", desc: "Kami selalu mencari cara baru dan lebih baik untuk melayani klien, memanfaatkan teknologi terdepan seperti AI." },
    { icon: "🤝", title: "Integritas", desc: "Kejujuran dan transparansi dalam setiap interaksi dengan klien dan mitra adalah komitmen kami." },
    { icon: "🌱", title: "Keberlanjutan", desc: "Kami fokus pada solusi jangka panjang yang membawa manfaat berkelanjutan, bukan sekadar hasil instan." },
    { icon: "❤️", title: "Humanized", desc: "Teknologi harus terasa manusiawi. Kami memastikan setiap solusi AI tetap memiliki sentuhan personal." },
];

const team = [
    { name: "Johan Cahyadi", role: "Founder & CEO", initials: "JC", desc: "Visioner di balik konsep Humanized AI untuk bisnis Indonesia." },
    { name: "Lidya Meliana", role: "Chief Marketing Officer", initials: "LM", desc: "Ahli strategi pemasaran digital dengan pengalaman 5+ tahun." },
    { name: "Melisa Kristi", role: "Chief Financial Officer", initials: "MK", desc: "Pakar keuangan yang memastikan pertumbuhan bisnis yang sehat." },
    { name: "Akmal Andriadi", role: "Head of Digital Strategy", initials: "AA", desc: "Spesialis strategi digital dan implementasi solusi AI." },
];

const achievements = [
    { icon: "🏆", title: "Top 6 KemenkopUKM", desc: "Masuk dalam 6 besar program Pendampingan Usaha bidang Jasa dan Teknologi." },
    { icon: "👥", title: "100+ Klien Sukses", desc: "Membantu lebih dari 100 bisnis mencapai tujuan mereka di seluruh Indonesia." },
    { icon: "📈", title: "Kenaikan Omset 200%", desc: "Rata-rata klien melaporkan kenaikan omset signifikan setelah menggunakan layanan kami." },
    { icon: "⭐", title: "98% Tingkat Kepuasan", desc: "Hampir seluruh klien kami menyatakan puas dan merekomendasikan Afbenesia." },
];

const clients = [
    { name: "KemenkopUKM", category: "Pemerintah", initials: "KU", color: "bg-blue-100 text-blue-700" },
    { name: "PT Maju Bersama", category: "Korporasi", initials: "MB", color: "bg-green-100 text-green-700" },
    { name: "Dinas Perindustrian Jombang", category: "Pemerintah Daerah", initials: "DJ", color: "bg-purple-100 text-purple-700" },
    { name: "Startup X", category: "Startup", initials: "SX", color: "bg-orange-100 text-orange-700" },
    { name: "CoffeeHouse", category: "F&B", initials: "CH", color: "bg-amber-100 text-amber-700" },
    { name: "Toko Nusantara", category: "Retail", initials: "TN", color: "bg-rose-100 text-rose-700" },
    { name: "Kreatif Indah", category: "Kreatif", initials: "KI", color: "bg-pink-100 text-pink-700" },
    { name: "Usaha Mandiri", category: "UMKM", initials: "UM", color: "bg-teal-100 text-teal-700" },
];

export default function AboutPage() {
    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Tentang Afbenesia</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        Kenali Tim di Balik<br />
                        <span className="text-primary">Kesuksesan Anda</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Misi kami adalah membantu bisnis Anda bertumbuh secara berkelanjutan melalui strategi digital cerdas, bimbingan mendalam, dan teknologi AI yang terasa manusiawi.
                    </p>
                </div>
            </section>

            {/* ===== VISI MISI ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/2">
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Arah Kami</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight mb-6">Visi & Misi Kami</h2>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">V</div>
                                        <h3 className="font-bold text-dark text-lg">Visi</h3>
                                    </div>
                                    <p className="text-dark/60 text-sm leading-relaxed">
                                        Menjadi mitra terpercaya bagi bisnis di seluruh Indonesia dalam mencapai kesuksesan melalui penerapan teknologi terbaru dan bimbingan yang holistik.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-dark text-sm font-bold">M</div>
                                        <h3 className="font-bold text-dark text-lg">Misi</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {[
                                            "Memberikan solusi strategi digital dan coaching bisnis yang inovatif.",
                                            "Memungkinkan setiap bisnis untuk berkembang dengan cara yang paling efektif dan berkelanjutan.",
                                            "Menghadirkan teknologi AI yang terasa humanized — personal dan relevan.",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-dark/60">
                                                <span className="text-primary mt-0.5 font-bold">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="relative rounded-2xl overflow-hidden aspect-video bg-dark/10">
                                <Image src="/background.jpg" alt="Tim Afbenesia" fill className="object-cover" />
                                <div className="absolute inset-0 bg-primary/20" />
                                <div className="absolute bottom-4 left-4 right-4 bg-dark/70 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-white font-bold text-sm">Tim Afbenesia</p>
                                    <p className="text-white/60 text-xs">Berdedikasi untuk pertumbuhan bisnis Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VALUES ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Nilai-Nilai Kami</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Fondasi Kerja Kami</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <div key={v.title} className={`p-7 rounded-2xl ${i === 0 ? "bg-primary text-white" : "bg-cream border border-[#E2E8F0]"}`}>
                                <div className="text-3xl mb-4">{v.icon}</div>
                                <h3 className={`font-bold text-lg mb-2 ${i === 0 ? "text-white" : "text-dark"}`}>{v.title}</h3>
                                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-dark/55"}`}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CLIENTS ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Klien Kami</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Yang Telah Bekerja Sama</h2>
                        <p className="text-dark/50 text-sm mt-3 max-w-lg mx-auto">
                            Kami telah dipercaya oleh berbagai instansi pemerintah, korporasi, UMKM, dan startup di seluruh Indonesia.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
                        {clients.map((client) => (
                            <div key={client.name} className="bg-white p-5 rounded-2xl border border-[#E2E8F0] hover:border-primary/30 hover:shadow-card-hover transition-all text-center group">
                                <div className={`w-12 h-12 ${client.color} rounded-xl flex items-center justify-center font-bold text-sm mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                                    {client.initials}
                                </div>
                                <p className="font-bold text-dark text-sm leading-snug">{client.name}</p>
                                <p className="text-dark/45 text-xs mt-1">{client.category}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-6 py-3 rounded-xl">
                            <span className="text-xl">🤝</span>
                            <p className="text-dark/70 text-sm font-medium">dan masih banyak lagi klien di seluruh Indonesia</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Perjalanan Kami</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Jejak Langkah Afbenesia</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {timeline.map((item) => (
                            <div key={item.year} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-extrabold text-sm text-center leading-tight">
                                    {item.year}
                                </div>
                                <div className="bg-cream p-5 rounded-2xl border border-[#E2E8F0] flex-1">
                                    <p className="text-dark/65 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ACHIEVEMENTS ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Pencapaian</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Kebanggaan Kami</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {achievements.map((a) => (
                            <div key={a.title} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-primary/30 hover:shadow-card-hover transition-all">
                                <div className="text-3xl mb-3">{a.icon}</div>
                                <h3 className="font-bold text-dark mb-1">{a.title}</h3>
                                <p className="text-dark/55 text-sm leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TEAM ===== */}
            <section className="py-20 bg-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Tim Kami</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tim Profesional Kami</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member) => (
                            <div key={member.name} className="text-center p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all group">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-105 transition-transform">
                                    {member.initials}
                                </div>
                                <h3 className="font-bold text-white text-base">{member.name}</h3>
                                <p className="text-primary text-xs font-semibold mb-2">{member.role}</p>
                                <p className="text-white/50 text-xs leading-relaxed">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Mulai Transformasi Bisnis Anda?</h2>
                    <p className="text-white/60 mb-8">Hubungi kami sekarang untuk konsultasi gratis — langsung via WhatsApp!</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        💬 Hubungi Kami via WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

export default function AboutPage() {
    const { lang, t } = useLang();

    const timeline = t("about_timeline");
    const values = t("about_values");
    const achievements = t("about_achievements");
    const teamMembers = t("about_team_members");
    const missions = t("about_missions");

    const valueIcons = ["💡", "🤝", "🌱", "❤️"];

    const clients = [
        { name: "KemenkopUKM", category: { id: "Pemerintah", en: "Government" }, initials: "KU", color: "bg-blue-100 text-blue-700" },
        { name: "PT Maju Bersama", category: { id: "Korporasi", en: "Corporation" }, initials: "MB", color: "bg-green-100 text-green-700" },
        { name: "Dinas Perindustrian Jombang", category: { id: "Pemerintah Daerah", en: "Local Government" }, initials: "DJ", color: "bg-purple-100 text-purple-700" },
        { name: "Startup X", category: { id: "Startup", en: "Startup" }, initials: "SX", color: "bg-orange-100 text-orange-700" },
        { name: "CoffeeHouse", category: { id: "F&B", en: "F&B" }, initials: "CH", color: "bg-amber-100 text-amber-700" },
        { name: "Toko Nusantara", category: { id: "Retail", en: "Retail" }, initials: "TN", color: "bg-rose-100 text-rose-700" },
        { name: "Kreatif Indah", category: { id: "Kreatif", en: "Creative" }, initials: "KI", color: "bg-pink-100 text-pink-700" },
        { name: "Usaha Mandiri", category: { id: "UMKM", en: "SME" }, initials: "UM", color: "bg-teal-100 text-teal-700" },
    ];

    const L = (obj) => (typeof obj === "object" && obj !== null && (obj.id || obj.en)) ? (obj[lang] ?? obj.id) : obj;

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">{t("about_badge")}</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        {t("about_title")}<br />
                        <span className="text-primary">{t("about_title2")}</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        {t("about_desc")}
                    </p>
                </div>
            </section>

            {/* ===== VISION & MISSION ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/2">
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("about_direction")}</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight mb-6">{t("about_vision_mission")}</h2>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">V</div>
                                        <h3 className="font-bold text-dark text-lg">{t("about_vision_label")}</h3>
                                    </div>
                                    <p className="text-dark/60 text-sm leading-relaxed">{t("about_vision_text")}</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-dark text-sm font-bold">M</div>
                                        <h3 className="font-bold text-dark text-lg">{t("about_mission_label")}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {Array.isArray(missions) && missions.map((item, i) => (
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
                                <Image src="/background.jpg" alt={t("about_team_photo")} fill className="object-cover" />
                                <div className="absolute inset-0 bg-primary/20" />
                                <div className="absolute bottom-4 left-4 right-4 bg-dark/70 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-white font-bold text-sm">{t("about_team_photo")}</p>
                                    <p className="text-white/60 text-xs">{t("about_team_photo_sub")}</p>
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("about_values_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("about_values_title")}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.isArray(values) && values.map((v, i) => (
                            <div key={i} className={`p-7 rounded-2xl ${i === 0 ? "bg-primary text-white" : "bg-cream border border-[#E2E8F0]"}`}>
                                <div className="text-3xl mb-4">{valueIcons[i]}</div>
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("about_clients_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("about_clients_title")}</h2>
                        <p className="text-dark/50 text-sm mt-3 max-w-lg mx-auto">{t("about_clients_desc")}</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
                        {clients.map((client) => (
                            <div key={client.name} className="bg-white p-5 rounded-2xl border border-[#E2E8F0] hover:border-primary/30 hover:shadow-card-hover transition-all text-center group">
                                <div className={`w-12 h-12 ${client.color} rounded-xl flex items-center justify-center font-bold text-sm mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                                    {client.initials}
                                </div>
                                <p className="font-bold text-dark text-sm leading-snug">{client.name}</p>
                                <p className="text-dark/45 text-xs mt-1">{L(client.category)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-6 py-3 rounded-xl">
                            <span className="text-xl">🤝</span>
                            <p className="text-dark/70 text-sm font-medium">{t("about_clients_more")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("about_timeline_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("about_timeline_title")}</h2>
                    </div>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {Array.isArray(timeline) && timeline.map((item) => (
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("about_achieve_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("about_achieve_title")}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {Array.isArray(achievements) && achievements.map((a, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-primary/30 hover:shadow-card-hover transition-all">
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("about_team_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t("about_team_title")}</h2>
                        <p className="text-white/50 text-sm mt-3">{t("about_team_sub")}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.isArray(teamMembers) && teamMembers.map((member, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all group">
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
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">{t("about_cta_title")}</h2>
                    <p className="text-white/60 mb-8">{t("about_cta_desc")}</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        {t("btn_wa")}
                    </a>
                </div>
            </section>
        </div>
    );
}
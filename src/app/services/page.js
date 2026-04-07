"use client";
import Link from "next/link";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

export default function ServicesPage() {
    const { t } = useLang();

    const services = t("services_list");

    const process = t("services_process_steps");

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">{t("services_page_badge")}</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        {t("services_page_title")}
                        <span className="block text-primary">{t("services_page_title2")}</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        {t("services_page_desc")}
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
                                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${i === 0 ? "text-white/50" : "text-primary"}`}>
                                    {t("services_what_you_get")}
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
                                        {t("services_detail_btn")}
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
                                        {t("services_discuss_btn")}
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("services_process_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("services_process_title")}</h2>
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
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">{t("services_cta_title")}</h2>
                    <p className="text-white/60 mb-8">{t("services_cta_desc")}</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        {t("btn_wa")}
                    </a>
                </div>
            </section>
        </div>
    );
}
"use client";
import { useState } from "react";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

export default function ContactPage() {
    const { lang, t } = useLang();
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 1200));
        setLoading(false);
        setSent(true);
    };

    const contactInfo = [
        { icon: "📍", labelKey: "contact_address_label", value: "Jl. Raya 64 Blimbing, Gudo, Jombang, Indonesia" },
        { icon: "✉️", labelKey: "contact_email_label", value: "admin@afbenesia.com", href: "mailto:admin@afbenesia.com" },
        { icon: "📞", labelKey: "contact_phone_label", value: "+62 858 2012 2323", href: "tel:+6285820122323" },
        { icon: "💬", labelKey: "contact_wa_label", valueKey: "contact_wa_value", href: WA_URL, external: true },
    ];

    const faqs = lang === "id" ? [
        { q: "Berapa lama proses konsultasi awal?", a: "Konsultasi awal berlangsung sekitar 30–60 menit. Gratis, tanpa komitmen, dan bisa dilakukan via WhatsApp atau video call." },
        { q: "Apakah layanan Afbenesia cocok untuk UMKM?", a: "Sangat cocok! Kami spesialis membantu UMKM Indonesia bertumbuh melalui strategi digital yang terjangkau namun efektif." },
        { q: "Berapa lama untuk melihat hasil nyata?", a: "Untuk digital marketing, biasanya 1–3 bulan. Coaching dan strategi bisa terlihat dalam 3–6 bulan." },
        { q: "Apakah ada kontrak jangka panjang?", a: "Kami fleksibel — ada paket bulanan maupun project-based. Hasil yang baik akan membuat klien kembali dengan sendirinya." },
    ] : [
        { q: "How long does the initial consultation take?", a: "The initial consultation lasts about 30–60 minutes. It's free, no commitment, and can be done via WhatsApp or video call." },
        { q: "Is Afbenesia suitable for small businesses?", a: "Absolutely! We specialize in helping Indonesian SMEs grow through affordable yet effective digital strategies." },
        { q: "How long to see real results?", a: "For digital marketing, usually 1–3 months. Coaching and strategy can be seen within 3–6 months." },
        { q: "Are there long-term contracts?", a: "We're flexible — there are monthly and project-based packages. Good results will bring clients back naturally." },
    ];

    return (
        <div className="font-sans">

            {/* HERO */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="absolute bottom-12 left-10 w-16 h-16 border-2 border-accent opacity-20 rotate-12 rounded-sm pointer-events-none animate-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4 animate-fade-in">
                        {t("contact_badge")}
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl animate-fade-up delay-100">
                        {t("contact_title")}
                        <span className="block text-primary">{t("contact_title2")}</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8 animate-fade-up delay-200">
                        {t("contact_desc")}
                    </p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press animate-fade-up delay-300">
                        💬 {lang === "id" ? "Chat WhatsApp Sekarang" : "Chat on WhatsApp Now"}
                    </a>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* LEFT: Info + Maps */}
                        <div className="lg:w-2/5 space-y-6">
                            <div className="reveal">
                                <h2 className="text-2xl font-extrabold text-dark mb-2">{t("contact_info_title")}</h2>
                                <p className="text-dark/55 text-sm">{t("contact_info_desc")}</p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-3">
                                {contactInfo.map((info) => (
                                    <div key={info.labelKey} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#E2E8F0] hover:border-primary/30 transition-all card-hover reveal">
                                        <span className="text-2xl flex-shrink-0">{info.icon}</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">{t(info.labelKey)}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-dark font-semibold text-sm hover:text-primary transition-colors"
                                                    target={info.external ? "_blank" : undefined} rel={info.external ? "noopener noreferrer" : undefined}>
                                                    {info.valueKey ? t(info.valueKey) : info.value}
                                                </a>
                                            ) : (
                                                <p className="text-dark font-semibold text-sm">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WA Button */}
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#22c55e] transition-all hover:-translate-y-0.5 w-full justify-center reveal btn-press">
                                <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                {lang === "id" ? "Chat WhatsApp Sekarang" : "Chat on WhatsApp Now"}
                            </a>

                            {/* GOOGLE MAPS */}
                            <div className="reveal">
                                <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                                    <span>📍</span> {t("contact_maps_title")}
                                </h3>
                                <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-card" style={{ height: "280px" }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2!2d112.2!3d-7.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780f5a9a2f0001%3A0x1!2sJl.+Raya+64+Blimbing%2C+Gudo%2C+Jombang!5e0!3m2!1sid!2sid!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Lokasi Afbenesia"
                                    />
                                </div>
                                <a href="https://maps.google.com/?q=Jl.+Raya+64+Blimbing,+Gudo,+Jombang,+Indonesia"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 hover:underline">
                                    {t("contact_maps_open")}
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: Form */}
                        <div className="lg:w-3/5 reveal-right">
                            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-card">
                                <h2 className="text-2xl font-extrabold text-dark mb-2">{t("contact_form_title")}</h2>
                                <p className="text-dark/55 text-sm mb-8">{t("contact_form_desc")}</p>

                                {sent ? (
                                    <div className="text-center py-12">
                                        <div className="text-6xl mb-4 animate-bounce-soft">✅</div>
                                        <h3 className="text-xl font-extrabold text-dark mb-2">{t("contact_sent_title")}</h3>
                                        <p className="text-dark/55 text-sm mb-6">{t("contact_sent_desc")}</p>
                                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#22c55e] transition-all hover:-translate-y-0.5">
                                            💬 {lang === "id" ? "Chat WhatsApp Langsung" : "Chat on WhatsApp"}
                                        </a>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">{t("contact_name")}</label>
                                                <input type="text" name="name" value={form.name} onChange={handleChange} required
                                                    placeholder={t("contact_name_ph")}
                                                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-all bg-cream/50 hover:border-dark/20" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">{t("contact_email")}</label>
                                                <input type="email" name="email" value={form.email} onChange={handleChange} required
                                                    placeholder={t("contact_email_ph")}
                                                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-all bg-cream/50 hover:border-dark/20" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">{t("contact_subject")}</label>
                                            <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                                                placeholder={t("contact_subject_ph")}
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-all bg-cream/50 hover:border-dark/20" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">{t("contact_message")}</label>
                                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                                                placeholder={t("contact_message_ph")}
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-all bg-cream/50 hover:border-dark/20 resize-none" />
                                        </div>
                                        <button type="submit" disabled={loading}
                                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed btn-press">
                                            {loading ? t("contact_sending") : t("contact_send")}
                                        </button>
                                        <p className="text-center text-xs text-dark/40">
                                            {t("contact_faster")}{" "}
                                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">WhatsApp</a>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("contact_faq_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("contact_faq_title")}</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`p-6 rounded-2xl border border-[#E2E8F0] bg-cream hover:border-primary/30 transition-all card-hover reveal delay-${i * 100}`}>
                                <h3 className="font-bold text-dark mb-2 flex items-start gap-2">
                                    <span className="text-primary font-extrabold flex-shrink-0">Q.</span> {faq.q}
                                </h3>
                                <p className="text-dark/60 text-sm leading-relaxed pl-5">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
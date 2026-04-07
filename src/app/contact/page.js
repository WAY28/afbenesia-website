"use client";
import { useState } from "react";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const contactInfo = {
    address: "Jl. Raya Jombang–Mojokerto No.123, Jombang, Jawa Timur",
    email: "hello@afbenesia.com",
    phone: "+62 858-2012-2323",
    wa: WA_URL,
};

export default function ContactPage() {
    const { lang, t } = useLang();
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = t("contact_faqs");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 1200));
        setSending(false);
        setSent(true);
    };

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">{t("contact_badge")}</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        {t("contact_title")}
                        <span className="block text-primary">{t("contact_title2")}</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl leading-relaxed">{t("contact_desc")}</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="mt-8 inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        💬 {t("contact_wa_now")}
                    </a>
                </div>
            </section>

            {/* ===== CONTACT GRID ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                        {/* Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
                                <h2 className="font-extrabold text-dark text-xl mb-1">{t("contact_info_title")}</h2>
                                <p className="text-dark/50 text-sm mb-6">{t("contact_info_desc")}</p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 items-start">
                                        <span className="text-primary text-lg mt-0.5">📍</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-0.5">{t("contact_address_label")}</p>
                                            <p className="text-dark text-sm">{contactInfo.address}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-primary text-lg mt-0.5">✉️</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-0.5">{t("contact_email_label")}</p>
                                            <a href={`mailto:${contactInfo.email}`} className="text-dark text-sm hover:text-primary transition-colors">{contactInfo.email}</a>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-primary text-lg mt-0.5">📞</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-0.5">{t("contact_phone_label")}</p>
                                            <p className="text-dark text-sm">{contactInfo.phone}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-primary text-lg mt-0.5">💬</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-0.5">{t("contact_wa_label")}</p>
                                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">
                                                {t("contact_wa_value")}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-primary rounded-2xl p-7 text-white">
                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{t("contact_faster")}</p>
                                <p className="text-2xl font-extrabold mb-4">WhatsApp</p>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="inline-block bg-accent text-dark px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors">
                                    💬 {t("contact_wa_direct")}
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#E2E8F0]">
                            <h2 className="font-extrabold text-dark text-xl mb-1">{t("contact_form_title")}</h2>
                            <p className="text-dark/50 text-sm mb-7">{t("contact_form_desc")}</p>

                            {sent ? (
                                <div className="text-center py-16">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="font-extrabold text-dark text-xl mb-2">{t("contact_sent_title")}</h3>
                                    <p className="text-dark/55 text-sm">{t("contact_sent_desc")}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-dark/60 mb-1.5">{t("contact_name")}</label>
                                            <input
                                                name="name" value={form.name} onChange={handleChange} required
                                                placeholder={t("contact_name_ph")}
                                                className="w-full bg-cream border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/60 mb-1.5">{t("contact_email")}</label>
                                            <input
                                                name="email" type="email" value={form.email} onChange={handleChange} required
                                                placeholder={t("contact_email_ph")}
                                                className="w-full bg-cream border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-dark/60 mb-1.5">{t("contact_subject")}</label>
                                        <input
                                            name="subject" value={form.subject} onChange={handleChange} required
                                            placeholder={t("contact_subject_ph")}
                                            className="w-full bg-cream border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-dark/60 mb-1.5">{t("contact_message")}</label>
                                        <textarea
                                            name="message" value={form.message} onChange={handleChange} required rows={5}
                                            placeholder={t("contact_message_ph")}
                                            className="w-full bg-cream border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary transition-colors resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit" disabled={sending}
                                        className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors disabled:opacity-70"
                                    >
                                        {sending ? t("contact_sending") : t("contact_send")}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MAP ===== */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-extrabold text-dark">{t("contact_maps_title")}</h2>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.3947881105178!2d112.22883297443093!3d-7.640624375575043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78433f9593663d%3A0xc65ffb97ac2416e4!2sPT%20Afbe%20Cahaya%20Kreatif%20-%20LPK%20Afbenesia%20%231%20Lembaga%20Pelatihan%20AI%20Marketing%20IT%20Office%20by%20Johan%20Cahyadi%20-%20Toko%20Digital%20Komputer!5e0!3m2!1sen!2sid!4v1775547073822!5m2!1sen!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Afbenesia Location"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <a
                            href="https://maps.google.com/?q=PT+Afbe+Cahaya+Kreatif+LPK+Afbenesia"
                            target="_blank" rel="noopener noreferrer"
                            className="text-primary text-sm font-semibold hover:underline"
                        >
                            {t("contact_maps_open")}
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-16 bg-cream">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("contact_faq_badge")}</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark">{t("contact_faq_title")}</h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                >
                                    <span className="font-bold text-dark text-sm">{faq.q}</span>
                                    <span className={`text-primary text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5">
                                        <p className="text-dark/60 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
"use client";
import { useState } from "react";

const contactInfo = [
    { icon: "📍", label: "Alamat", value: "Jl. Raya 64 Blimbing, Gudo, Jombang, Indonesia" },
    { icon: "✉️", label: "Email", value: "admin@afbenesia.com", href: "mailto:admin@afbenesia.com" },
    { icon: "📞", label: "Telepon", value: "+62 858 2012 2323", href: "tel:+6285820122323" },
    { icon: "💬", label: "WhatsApp", value: "+62 858 2012 2323", href: "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda." },
];

const faqs = [
    {
        q: "Berapa lama proses konsultasi awal?",
        a: "Konsultasi awal berlangsung sekitar 30–60 menit. Gratis, tanpa komitmen, dan bisa dilakukan via video call atau langsung.",
    },
    {
        q: "Apakah layanan Afbenesia cocok untuk UMKM?",
        a: "Sangat cocok! Kami spesialis membantu UMKM Indonesia bertumbuh melalui strategi digital yang terjangkau namun efektif.",
    },
    {
        q: "Berapa lama untuk melihat hasil nyata?",
        a: "Tergantung layanan yang dipilih. Untuk digital marketing, biasanya 1–3 bulan. Coaching dan strategi bisa terlihat dalam 3–6 bulan.",
    },
    {
        q: "Apakah ada kontrak jangka panjang?",
        a: "Kami fleksibel. Ada paket bulanan maupun project-based. Kami percaya hasil yang baik akan membuat klien kembali dengan sendirinya.",
    },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulasi pengiriman
        await new Promise(r => setTimeout(r, 1200));
        setLoading(false);
        setSent(true);
    };

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Hubungi Kami</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                        Kami Siap
                        <span className="block text-primary">Membantu Anda</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                        Ada pertanyaan atau ingin memulai proyek? Isi form di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam kerja.
                    </p>
                </div>
            </section>

            {/* ===== CONTACT CONTENT ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Contact Info */}
                        <div className="lg:w-2/5">
                            <h2 className="text-2xl font-extrabold text-dark mb-2">Informasi Kontak</h2>
                            <p className="text-dark/55 text-sm mb-8">Hubungi kami langsung melalui channel berikut. Kami senang mendengar dari Anda!</p>

                            <div className="space-y-4 mb-10">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#E2E8F0]">
                                        <span className="text-2xl flex-shrink-0">{info.icon}</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-dark font-semibold text-sm hover:text-primary transition-colors" target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-dark font-semibold text-sm">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white aspect-video flex items-center justify-center">
                                <div className="text-center p-6">
                                    <span className="text-4xl block mb-2">📍</span>
                                    <p className="font-bold text-dark text-sm">Jl. Raya 64 Blimbing</p>
                                    <p className="text-dark/50 text-xs">Gudo, Jombang, Indonesia</p>
                                    <a
                                        href="https://maps.google.com/?q=Gudo,Jombang,Indonesia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-primary text-xs font-semibold hover:underline"
                                    >
                                        Buka di Google Maps →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-3/5">
                            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-card">
                                <h2 className="text-2xl font-extrabold text-dark mb-2">Kirim Pesan Langsung</h2>
                                <p className="text-dark/55 text-sm mb-8">Kami akan merespon dalam 1×24 jam kerja.</p>

                                {sent ? (
                                    <div className="text-center py-12">
                                        <div className="text-5xl mb-4">✅</div>
                                        <h3 className="text-xl font-extrabold text-dark mb-2">Pesan Terkirim!</h3>
                                        <p className="text-dark/55 text-sm">Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Nama Anda</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Nama lengkap"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Email Anda</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="email@anda.com"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Subjek</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="Subjek pesan"
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Pesan</label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                placeholder="Ceritakan kebutuhan bisnis Anda..."
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50 resize-none"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {loading ? "Mengirim..." : "Kirim Pesan →"}
                                        </button>
                                        <p className="text-center text-xs text-dark/40">
                                            Atau hubungi langsung via{" "}
                                            <a href="https://wa.me/6285820122323" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                                                WhatsApp
                                            </a>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Pertanyaan yang Sering Diajukan</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="p-6 rounded-2xl border border-[#E2E8F0] bg-cream hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                                <p className="text-dark/60 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
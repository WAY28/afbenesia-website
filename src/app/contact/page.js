"use client";
import { useState } from "react";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const contactInfo = [
    { icon: "📍", label: "Alamat", value: "Jl. Raya 64 Blimbing, Gudo, Jombang, Indonesia" },
    { icon: "✉️", label: "Email", value: "admin@afbenesia.com", href: "mailto:admin@afbenesia.com" },
    { icon: "📞", label: "Telepon", value: "+62 858 2012 2323", href: "tel:+6285820122323" },
    { icon: "💬", label: "WhatsApp", value: "Chat langsung sekarang", href: WA_URL, external: true },
];

const faqs = [
    { q: "Berapa lama proses konsultasi awal?", a: "Konsultasi awal berlangsung sekitar 30–60 menit. Gratis, tanpa komitmen, dan bisa dilakukan via WhatsApp, video call, atau langsung." },
    { q: "Apakah layanan Afbenesia cocok untuk UMKM?", a: "Sangat cocok! Kami spesialis membantu UMKM Indonesia bertumbuh melalui strategi digital yang terjangkau namun efektif." },
    { q: "Berapa lama untuk melihat hasil nyata?", a: "Tergantung layanan yang dipilih. Untuk digital marketing, biasanya 1–3 bulan. Coaching dan strategi bisa terlihat dalam 3–6 bulan." },
    { q: "Apakah ada kontrak jangka panjang?", a: "Kami fleksibel. Ada paket bulanan maupun project-based. Kami percaya hasil yang baik akan membuat klien kembali dengan sendirinya." },
];

export default function ContactPage() {
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
                    <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
                        Ada pertanyaan atau ingin memulai proyek? Hubungi kami via WhatsApp untuk respons tercepat!
                    </p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                        💬 Chat WhatsApp Sekarang
                    </a>
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
                                    <div key={info.label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#E2E8F0] hover:border-primary/30 transition-colors">
                                        <span className="text-2xl flex-shrink-0">{info.icon}</span>
                                        <div>
                                            <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-dark font-semibold text-sm hover:text-primary transition-colors"
                                                    target={info.external ? "_blank" : undefined} rel={info.external ? "noopener noreferrer" : undefined}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-dark font-semibold text-sm">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WA CTA */}
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#22c55e] transition-colors w-full justify-center">
                                <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Chat WhatsApp Sekarang
                            </a>
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
                                        <p className="text-dark/55 text-sm mb-6">Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.</p>
                                        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#22c55e] transition-colors">
                                            💬 Atau Chat WhatsApp Langsung
                                        </a>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Nama Anda</label>
                                                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Nama lengkap"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Email Anda</label>
                                                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@anda.com"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Subjek</label>
                                            <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Subjek pesan"
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-dark/50 uppercase tracking-widest mb-2">Pesan</label>
                                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Ceritakan kebutuhan bisnis Anda..."
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-colors bg-cream/50 resize-none" />
                                        </div>
                                        <button type="submit" disabled={loading}
                                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors disabled:opacity-60">
                                            {loading ? "Mengirim..." : "Kirim Pesan →"}
                                        </button>
                                        <p className="text-center text-xs text-dark/40">
                                            Respons lebih cepat via{" "}
                                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">WhatsApp</a>
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
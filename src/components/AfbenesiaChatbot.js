"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Admin%20Afbenesia%2C%20saya%20butuh%20bantuan%20lebih%20lanjut.";

const SYSTEM_PROMPT = `Kamu adalah asisten virtual resmi Afbenesia bernama "Afbi". Kamu ramah, profesional, dan memahami konteks bisnis Indonesia.

=== TENTANG AFBENESIA ===
Nama Perusahaan: PT. Afbe Cahaya Kreatif - LPK Afbenesia
Slogan: "Humanized AI for Everlasting Business Growth"
Alamat: Jl. Raya 64 Blimbing, Gudo, Jombang, Indonesia
Telepon: +62 858 2012 2323
Email: admin@afbenesia.com
WhatsApp: +62 858 2012 2323
Website: afbenesia.com

=== LAYANAN AFBENESIA ===

1. AI Digital Strategy Consulting (TERPOPULER)
- Strategi digital berbasis AI yang disesuaikan dengan kebutuhan unik bisnis klien
- Analisis pasar & kompetitor berbasis data
- Strategi SEO & SEM yang teroptimasi AI
- Perencanaan kampanye iklan digital
- Dashboard monitoring & reporting real-time
- Optimasi konversi (CRO)
- Hasil rata-rata: +200% konversi, ROI 3x, 50% efisiensi biaya iklan

2. Business Coaching & Mentorship
- Program coaching intensif 1-on-1 dengan mentor berpengalaman
- Analisis kinerja bisnis berkala
- Perumusan strategi jangka pendek & panjang
- Mindset & leadership development
- Accountability system
- Hasil rata-rata: +25% kenaikan revenue, durasi 6 bulan, 98% tingkat kepuasan

3. Virtual Assistant Services
- Manajemen email & komunikasi bisnis
- Pengaturan jadwal & kalender
- Pengelolaan media sosial
- Riset & pengumpulan data
- Pembuatan laporan & presentasi
- Koordinasi vendor & klien
- Hasil rata-rata: +50% produktivitas, hemat 20 jam/minggu, layanan 24/7

4. Digital Marketing Campaigns
- Google Ads & Meta Ads management
- Konten marketing & copywriting
- Email marketing campaigns
- Social media management
- Analitik & optimasi kampanye
- Retargeting & remarketing
- Hasil rata-rata: +150% penjualan, +300% engagement, -40% cost per lead

5. Custom AI Solutions (BARU)
- AI Chatbot untuk customer service (24/7)
- Sistem rekomendasi produk
- Analitik prediktif & forecasting
- Otomasi proses bisnis berbasis AI
- Integrasi dengan sistem existing
- Hasil rata-rata: -60% response time, +40% efisiensi operasional

6. Email Marketing Strategy
- Segmentasi audiens yang tepat
- Desain email responsif
- Automation & drip campaign
- A/B testing & optimasi
- Laporan performa komprehensif
- Re-engagement campaign
- Hasil rata-rata: +40% open rate, +30% konversi, ROI 4200%

=== PROGRAM PELATIHAN (LPK AFBENESIA) ===

1. AI Digital Marketing Reguler
- Durasi: 3 Bulan (160 Jam Pelajaran)
- Level: Pemula – Menengah
- Sertifikasi: BNSP (diakui nasional)
- Metode: Online & Offline (Hybrid)
- Materi: AI tools, social media management, live streaming, konten kreatif
- Prospek karir: Digital Marketer, Sosmed Manager, Freelancer
- Harga: Hubungi admin untuk info harga
- Pendaftaran: linktr.ee/lpk.afbenesia

2. Manajemen Usaha Terapan
- Durasi: 12 Bulan (1 Tahun)
- Level: Menengah – Lanjutan
- Sertifikasi: Sertifikasi Profesi
- Metode: Online & Offline (Hybrid)
- Materi: Business Planning, Operasional, Keuangan, Digitalisasi Bisnis, Aplikasi POS
- Prospek karir: Manajer Operasional, Wirausahawan
- Harga: Hubungi admin untuk info harga
- Pendaftaran: linktr.ee/lpk.afbenesia

3. Digital Business (AI-Driven Track)
- Durasi: 12 Bulan (1 Tahun)
- Level: Pemula – Profesional
- Sertifikasi: Sertifikasi Profesi
- Metode: Online & Offline (Hybrid)
- Materi: Strategi AI, Riset Pasar, Konten Kreatif (Video & Desain), Meta Ads, Google Ads, SEO, Agency Management
- Prospek karir: Digital Marketer, Content Strategist, Agency Founder
- Harga: Hubungi admin untuk info harga
- Pendaftaran: linktr.ee/lpk.afbenesia

=== PENCAPAIAN & KEPERCAYAAN ===
- Top 6 KemenkopUKM (Program Pendampingan Usaha Bidang Jasa & Teknologi)
- 100+ Klien Puas dari seluruh Indonesia
- 98% Tingkat Kepuasan Klien
- 3+ Tahun Pengalaman
- Rata-rata kenaikan omset klien: 200%

=== TIM ===
- Johan Cahyadi - Founder & CEO
- Lidya Meliana - Chief Marketing Officer
- Melisa Kristi - Chief Financial Officer
- Akmal Andriadi - Head of Digital Strategy

=== KLIEN & MITRA ===
KemenkopUKM, PT Maju Bersama, Dinas Perindustrian Jombang, Startup X, CoffeeHouse, Toko Nusantara, Kreatif Indah, Usaha Mandiri, dll.

=== CARA KERJA / PROSES ===
1. Konsultasi Gratis (30-60 menit, via WhatsApp atau video call)
2. Analisis & Strategi
3. Implementasi
4. Evaluasi & Optimasi

=== FAQ UMUM ===
- Konsultasi gratis: Ya, tersedia konsultasi gratis tanpa komitmen
- Cocok untuk UMKM: Ya, sangat cocok, harga disesuaikan kemampuan bisnis
- Kontrak: Fleksibel, ada paket bulanan dan project-based
- Lokasi: Jombang, tapi melayani seluruh Indonesia secara online

=== INSTRUKSI PENTING ===
- Jawab dalam bahasa yang sama dengan pengguna (Indonesia atau Inggris)
- Jawaban singkat, jelas, dan ramah — maksimal 3-4 kalimat per respons
- Jika ditanya harga spesifik, arahkan untuk menghubungi admin via WhatsApp
- Jika pertanyaan di luar topik Afbenesia, tetap bantu semampu mungkin tapi arahkan ke layanan yang relevan
- Gunakan emoji secukupnya untuk terasa lebih friendly
- Selalu tawarkan bantuan lebih lanjut atau koneksi ke admin jika diperlukan
- Jangan membuat janji atau komitmen harga yang spesifik tanpa konfirmasi admin
- Panggil dirimu "Afbi" jika ditanya nama`;

const quickReplies = {
    id: [
        "Apa saja layanan Afbenesia?",
        "Info program pelatihan",
        "Berapa biaya konsultasi?",
        "Cara daftar pelatihan",
        "Hubungi admin",
    ],
    en: [
        "What services does Afbenesia offer?",
        "Training program info",
        "How much does consultation cost?",
        "How to register for training",
        "Contact admin",
    ],
};

export default function AfbenesiaChatbot() {
    const { lang } = useLang();
    const id = lang === "id";
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: id
                ? "Halo! 👋 Saya **Afbi**, asisten virtual Afbenesia. Saya siap membantu Anda dengan informasi seputar layanan dan program pelatihan kami. Ada yang bisa saya bantu? 😊"
                : "Hello! 👋 I'm **Afbi**, Afbenesia's virtual assistant. I'm ready to help you with information about our services and training programs. How can I help you? 😊",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen, isMinimized]);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, isMinimized]);

    const sendMessage = async (text) => {
        if (!text.trim() || loading) return;

        // Jika user pilih "Hubungi admin"
        if (text.toLowerCase().includes("hubungi admin") || text.toLowerCase().includes("contact admin")) {
            window.open(WA_URL, "_blank");
            return;
        }

        setShowQuickReplies(false);
        const userMsg = { role: "user", content: text };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            // Build conversation history untuk API (exclude system)
            const apiMessages = newMessages.map(m => ({
                role: m.role,
                content: m.content,
            }));

            const response = await fetch("https://api.anthropic.com/v1/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "claude-sonnet-4-20250514",
                    max_tokens: 1000,
                    system: SYSTEM_PROMPT,
                    messages: apiMessages,
                }),
            });

            const data = await response.json();
            const reply = data.content?.[0]?.text || (id ? "Maaf, terjadi kesalahan. Silakan coba lagi." : "Sorry, an error occurred. Please try again.");

            setMessages(prev => [...prev, { role: "assistant", content: reply }]);
        } catch (err) {
            setMessages(prev => [...prev, {
                role: "assistant",
                content: id
                    ? "Maaf, saya sedang mengalami gangguan. Silakan hubungi admin kami langsung via WhatsApp ya! 😊"
                    : "Sorry, I'm experiencing an issue. Please contact our admin directly via WhatsApp! 😊",
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    const renderMessage = (content) => {
        // Simple markdown: **bold**, *italic*, bullet
        return content
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/\n- /g, "<br/>• ")
            .replace(/\n/g, "<br/>");
    };

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className={`fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] flex flex-col overflow-hidden transition-all duration-300 ${isMinimized ? "h-14" : "h-[520px]"}`}
                    style={{ maxHeight: "calc(100vh - 120px)" }}>

                    {/* Header */}
                    <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    🤖
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-primary" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">Afbi</p>
                                <p className="text-white/70 text-[10px]">{id ? "Asisten Virtual Afbenesia" : "Afbenesia Virtual Assistant"}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button onClick={() => setIsMinimized(p => !p)}
                                className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm">
                                {isMinimized ? "▲" : "▼"}
                            </button>
                            <button onClick={() => setIsOpen(false)}
                                className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                                ✕
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                        {msg.role === "assistant" && (
                                            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-sm flex-shrink-0 mr-2 mt-0.5">🤖</div>
                                        )}
                                        <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                                            msg.role === "user"
                                                ? "bg-primary text-white rounded-tr-sm"
                                                : "bg-white text-dark shadow-sm border border-[#E2E8F0] rounded-tl-sm"
                                        }`}>
                                            <span dangerouslySetInnerHTML={{ __html: renderMessage(msg.content) }} />
                                        </div>
                                    </div>
                                ))}

                                {/* Loading */}
                                {loading && (
                                    <div className="flex justify-start">
                                        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-sm flex-shrink-0 mr-2">🤖</div>
                                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-[#E2E8F0]">
                                            <div className="flex gap-1 items-center">
                                                <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Quick Replies */}
                                {showQuickReplies && !loading && (
                                    <div className="space-y-2 pt-1">
                                        <p className="text-[10px] text-dark/40 font-semibold uppercase tracking-widest px-1">
                                            {id ? "Pertanyaan populer:" : "Popular questions:"}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {quickReplies[lang].map((q, i) => (
                                                <button key={i} onClick={() => sendMessage(q)}
                                                    className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all font-medium bg-white">
                                                    {q}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* WA Escalation Bar */}
                            <div className="px-4 py-2 bg-white border-t border-[#E2E8F0] flex-shrink-0">
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold text-xs hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20">
                                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    {id ? "Terhubung ke Admin via WhatsApp" : "Connect to Admin via WhatsApp"}
                                </a>
                            </div>

                            {/* Input */}
                            <div className="px-3 py-3 bg-white border-t border-[#E2E8F0] flex gap-2 items-end flex-shrink-0">
                                <textarea
                                    ref={inputRef}
                                    rows={1}
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={id ? "Ketik pertanyaan Anda..." : "Type your question..."}
                                    className="flex-1 resize-none px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-all bg-gray-50 max-h-24"
                                    style={{ lineHeight: "1.4" }}
                                    disabled={loading}
                                />
                                <button
                                    onClick={() => sendMessage(input)}
                                    disabled={!input.trim() || loading}
                                    className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 btn-press">
                                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => { setIsOpen(p => !p); setIsMinimized(false); }}
                className="fixed bottom-6 left-6 z-[60] group flex items-center gap-0 hover:gap-3 bg-primary hover:bg-primary-dark text-white pl-3.5 pr-3.5 hover:pr-5 py-3.5 rounded-full shadow-lg transition-all duration-300 overflow-hidden btn-press"
                aria-label="Open Chatbot"
            >
                {/* Icon */}
                {isOpen ? (
                    <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                ) : (
                    <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                )}
                {/* Label hover */}
                <span className="max-w-0 group-hover:max-w-[8rem] overflow-hidden transition-all duration-300 text-sm font-bold whitespace-nowrap">
                    {isOpen ? (id ? "Tutup" : "Close") : (id ? "Tanya Afbi" : "Ask Afbi")}
                </span>

                {/* Unread dot (saat closed) */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-[8px] font-bold text-dark animate-bounce-soft">
                        1
                    </span>
                )}
            </button>
        </>
    );
}
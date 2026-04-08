"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Admin%20Afbenesia%2C%20saya%20butuh%20bantuan%20lebih%20lanjut.";

const quickReplies = {
    id: [
        "Apa saja layanan Afbenesia?",
        "Ceritakan program pelatihan",
        "Berapa harga konsultasi?",
        "Cara daftar pelatihan?",
        "Apa itu AI Digital Marketing?",
    ],
    en: [
        "What services does Afbenesia offer?",
        "Tell me about the training programs",
        "How much does consultation cost?",
        "How to register for training?",
        "What is AI Digital Marketing?",
    ],
};

function TypingDots() {
    return (
        <div className="flex gap-1 items-center h-5">
            {[0, 150, 300].map((delay, i) => (
                <span key={i} className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"
                    style={{ animationDelay: `${delay}ms` }} />
            ))}
        </div>
    );
}

export default function AfbenesiaChatbot() {
    const { lang } = useLang();
    const id = lang === "id";

    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const [hasOpened, setHasOpened] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: id
                ? "Halo! 👋 Saya **Afbi**, asisten virtual Afbenesia.\n\nSaya siap membantu Anda dengan informasi seputar **layanan** dan **program pelatihan** kami. Ada yang ingin Anda tanyakan? 😊"
                : "Hello! 👋 I'm **Afbi**, Afbenesia's virtual assistant.\n\nI'm ready to help you with information about our **services** and **training programs**. What would you like to know? 😊",
        },
    ]);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const textareaRef = useRef(null);

    // Scroll to bottom when new messages
    useEffect(() => {
        if (isOpen && !isMinimized) {
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        }
    }, [messages, loading, isOpen, isMinimized]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && !isMinimized) {
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [isOpen, isMinimized]);

    // Auto-resize textarea
    const handleInputChange = (e) => {
        setInput(e.target.value);
        const ta = textareaRef.current;
        if (ta) {
            ta.style.height = "auto";
            ta.style.height = Math.min(ta.scrollHeight, 96) + "px";
        }
    };

    const sendMessage = async (text) => {
        const trimmed = text.trim();
        if (!trimmed || loading) return;

        setShowQuickReplies(false);
        setInput("");
        if (textareaRef.current) textareaRef.current.style.height = "auto";

        const userMsg = { role: "user", content: trimmed };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({ role: m.role, content: m.content })),
                }),
            });

            // Coba parse response JSON dulu (ada detail error dari server)
            let data = {};
            try {
                data = await res.json();
            } catch {
                // Response bukan JSON
            }

            if (!res.ok) {
                // Log detail error dari server untuk debugging
                console.error("[Chatbot] Server error:", res.status, data?.detail ?? data?.error ?? "Unknown");
                throw new Error(`HTTP ${res.status}: ${data?.detail ?? data?.error ?? "Server error"}`);
            }

            const reply = data.reply || (id
                ? "Maaf, terjadi kesalahan. Silakan coba lagi."
                : "Sorry, an error occurred. Please try again.");

            setMessages(prev => [...prev, { role: "assistant", content: reply }]);

        } catch (err) {
            console.error("[Chatbot] Chat error:", err.message);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: id
                    ? "Maaf, saya sedang mengalami gangguan teknis 🙏\n\nSilakan hubungi admin kami langsung via WhatsApp untuk bantuan segera!"
                    : "Sorry, I'm experiencing technical issues 🙏\n\nPlease contact our admin directly via WhatsApp for immediate assistance!",
                isError: true,
            }]);
        } finally {
            setLoading(false);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        setIsMinimized(false);
        setHasOpened(true);
    };

    // Render markdown-like formatting
    const renderContent = (content) => {
        const lines = content.split("\n");
        return lines.map((line, i) => {
            const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            if (line.startsWith("- ") || line.startsWith("• ")) {
                return (
                    <div key={i} className="flex items-start gap-1.5 ml-1">
                        <span className="text-primary mt-1.5 flex-shrink-0 text-xs">•</span>
                        <span dangerouslySetInnerHTML={{ __html: formatted.replace(/^[-•]\s/, "") }} />
                    </div>
                );
            }
            if (line === "") return <div key={i} className="h-1.5" />;
            return <div key={i} dangerouslySetInnerHTML={{ __html: formatted }} />;
        });
    };

    return (
        <>
            {/* ── Chat Window ── */}
            {isOpen && (
                <div
                    className="fixed bottom-24 left-4 sm:left-6 z-[60] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
                    style={{
                        width: "min(360px, calc(100vw - 2rem))",
                        height: isMinimized ? "56px" : "min(520px, calc(100vh - 120px))",
                        transition: "height 0.25s ease",
                    }}
                >
                    {/* Header */}
                    <div className="bg-primary flex items-center justify-between px-4 py-3 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg">🤖</div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-primary" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">Afbi</p>
                                <p className="text-white/65 text-[10px]">
                                    {id ? "Asisten Virtual Afbenesia" : "Afbenesia Virtual Assistant"}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={() => setIsMinimized(p => !p)}
                                className="w-7 h-7 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/15 transition-all text-xs"
                                title={isMinimized ? "Expand" : "Minimize"}
                            >
                                {isMinimized ? "▲" : "▼"}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/15 transition-all text-sm"
                                title="Close"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
                                        {msg.role === "assistant" && (
                                            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-sm flex-shrink-0 mb-0.5">🤖</div>
                                        )}
                                        <div
                                            className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed space-y-0.5 ${
                                                msg.role === "user"
                                                    ? "bg-primary text-white rounded-br-sm"
                                                    : msg.isError
                                                        ? "bg-red-50 text-dark border border-red-200 rounded-bl-sm"
                                                        : "bg-white text-dark shadow-sm border border-[#E2E8F0] rounded-bl-sm"
                                            }`}
                                        >
                                            {msg.role === "user"
                                                ? msg.content
                                                : renderContent(msg.content)
                                            }
                                            {msg.isError && (
                                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 mt-2 text-[#25D366] font-semibold text-xs hover:underline">
                                                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                                    {id ? "Chat WhatsApp Sekarang →" : "Chat WhatsApp Now →"}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Loading */}
                                {loading && (
                                    <div className="flex items-end gap-2">
                                        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                                        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-[#E2E8F0]">
                                            <TypingDots />
                                        </div>
                                    </div>
                                )}

                                {/* Quick Replies */}
                                {showQuickReplies && !loading && messages.length === 1 && (
                                    <div className="pt-1 space-y-2">
                                        <p className="text-[10px] text-dark/40 font-bold uppercase tracking-widest">
                                            {id ? "Pilih pertanyaan:" : "Choose a question:"}
                                        </p>
                                        <div className="flex flex-col gap-1.5">
                                            {quickReplies[lang].map((q, i) => (
                                                <button key={i} onClick={() => sendMessage(q)}
                                                    className="text-left text-xs px-3 py-2 rounded-xl border border-primary/25 text-primary bg-white hover:bg-primary hover:text-white transition-all font-medium">
                                                    {q}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* WA escalation bar */}
                            <div className="px-3 py-2 bg-white border-t border-[#E2E8F0] flex-shrink-0">
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-bold text-xs hover:bg-[#25D366]/20 transition-all">
                                    <svg className="w-3.5 h-3.5 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    {id ? "Hubungi Admin via WhatsApp" : "Contact Admin via WhatsApp"}
                                </a>
                            </div>

                            {/* Input area */}
                            <div className="px-3 py-3 bg-white border-t border-[#E2E8F0] flex gap-2 items-end flex-shrink-0">
                                <textarea
                                    ref={(el) => { inputRef.current = el; textareaRef.current = el; }}
                                    rows={1}
                                    value={input}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    disabled={loading}
                                    placeholder={id ? "Ketik pertanyaan Anda..." : "Type your question..."}
                                    className="flex-1 resize-none px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-dark text-sm focus:outline-none focus:border-primary transition-all bg-slate-50 disabled:opacity-50 overflow-y-auto"
                                    style={{ lineHeight: "1.45", minHeight: "40px", maxHeight: "96px" }}
                                />
                                <button
                                    onClick={() => sendMessage(input)}
                                    disabled={!input.trim() || loading}
                                    className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                                    title="Send"
                                >
                                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* ── Toggle Button ── */}
            <button
                onClick={isOpen ? () => setIsOpen(false) : handleOpen}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                className="fixed bottom-6 left-4 sm:left-6 z-[60] group flex items-center gap-0 hover:gap-2.5 bg-primary hover:bg-primary-dark text-white px-4 py-3.5 rounded-full shadow-lg transition-all duration-300 overflow-hidden"
            >
                {isOpen ? (
                    <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                )}
                <span className="max-w-0 group-hover:max-w-[6rem] overflow-hidden transition-all duration-300 text-sm font-bold whitespace-nowrap">
                    {isOpen ? (id ? "Tutup" : "Close") : (id ? "Tanya Afbi" : "Ask Afbi")}
                </span>
                {!isOpen && !hasOpened && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white animate-bounce-soft" />
                )}
            </button>
        </>
    );
}
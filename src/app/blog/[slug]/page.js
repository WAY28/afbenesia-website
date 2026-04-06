import Link from "next/link";
import { notFound } from "next/navigation";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const articles = {
    "humanized-ai-bisnis-indonesia": {
        category: "AI & Teknologi", emoji: "🤖",
        title: "Humanized AI: Masa Depan Bisnis Digital di Indonesia",
        date: "15 Maret 2026", readTime: "5 menit",
        excerpt: "Bagaimana AI yang terasa manusiawi dapat mengubah cara bisnis Indonesia berinteraksi dengan pelanggan.",
        related: ["strategi-digital-umkm-2026", "ai-chatbot-customer-service"],
        content: [
            { type: "intro", text: "Kecerdasan buatan (AI) bukan lagi sekadar teknologi masa depan — ia sudah hadir di setiap sudut bisnis modern. Namun, ada satu pertanyaan penting yang sering terlewat: apakah AI yang Anda gunakan terasa manusiawi?" },
            { type: "heading", text: "Apa itu Humanized AI?" },
            { type: "paragraph", text: "Humanized AI adalah pendekatan penggunaan kecerdasan buatan yang mengutamakan pengalaman manusia. Bukan sekadar otomasi, melainkan bagaimana teknologi bisa berinteraksi dengan cara yang terasa alami, empatik, dan relevan." },
            { type: "paragraph", text: "Bayangkan perbedaan antara chatbot yang menjawab 'Maaf, saya tidak mengerti pertanyaan Anda' versus chatbot yang merespons 'Sepertinya Anda ingin mengetahui harga ya? Boleh saya jelaskan lebih detail?' — itulah esensi Humanized AI." },
            { type: "heading", text: "Mengapa Penting untuk Bisnis Indonesia?" },
            { type: "paragraph", text: "Konsumen Indonesia sangat mengutamakan hubungan personal. Pendekatan yang terlalu dingin dan robotik justru bisa mengurangi kepercayaan pelanggan dan merusak brand Anda." },
            { type: "list", title: "Humanized AI menjembatani gap ini dengan:", items: ["AI yang memahami konteks budaya lokal Indonesia", "Respons yang terasa personal, bukan generik", "Interaksi yang membangun kepercayaan jangka panjang", "Efisiensi operasional tanpa mengorbankan customer experience"] },
            { type: "heading", text: "Implementasi Nyata" },
            { type: "paragraph", text: "Mulai dari chatbot customer service yang responsif dan empatik, sistem rekomendasi produk yang personal, hingga email marketing yang terasa seperti ditulis manusia — semua ini adalah wujud nyata humanized AI." },
            { type: "conclusion", text: "Di Afbenesia, kami percaya bahwa AI terbaik adalah yang membuat pelanggan Anda merasa didengar dan dipahami. Teknologi seharusnya mempererat hubungan manusia, bukan memperjauhnya." },
        ],
    },
    "strategi-digital-umkm-2026": {
        category: "Strategi Digital", emoji: "📈",
        title: "5 Strategi Digital yang Wajib Dicoba UMKM di 2026",
        date: "8 Maret 2026", readTime: "7 menit",
        excerpt: "Strategi digital terbukti untuk UMKM agar bisa bersaing di era digital yang semakin kompetitif.",
        related: ["humanized-ai-bisnis-indonesia", "meningkatkan-omset-digital-marketing"],
        content: [
            { type: "intro", text: "Tahun 2026 membawa peluang besar bagi UMKM yang siap memanfaatkan transformasi digital. Berikut 5 strategi yang sudah terbukti efektif dari pengalaman mendampingi 100+ klien di seluruh Indonesia." },
            { type: "heading", text: "1. Optimalkan Kehadiran di Google" },
            { type: "paragraph", text: "Google My Business, SEO lokal, dan Google Ads adalah tiga pilar utama UMKM. 97% konsumen mencari bisnis lokal secara online sebelum mengunjungi atau menghubungi — pastikan Anda mudah ditemukan." },
            { type: "heading", text: "2. Manfaatkan Social Commerce" },
            { type: "paragraph", text: "TikTok Shop, Instagram Shopping, dan WhatsApp Business bukan sekadar tren — ini adalah saluran penjualan nyata. UMKM yang memanfaatkannya lebih awal akan menikmati keuntungan kompetitif signifikan." },
            { type: "list", title: "Platform wajib:", items: ["WhatsApp Business — komunikasi dan penjualan langsung", "Instagram & TikTok — brand awareness dan engagement", "Tokopedia/Shopee — penjualan e-commerce", "Google My Business — kehadiran lokal"] },
            { type: "heading", text: "3. Bangun Email List dari Sekarang" },
            { type: "paragraph", text: "Email marketing memiliki ROI tertinggi di antara semua channel digital — rata-rata Rp 42 pendapatan untuk setiap Rp 1 yang diinvestasikan. Mulai kumpulkan email pelanggan Anda sekarang." },
            { type: "heading", text: "4. Gunakan AI untuk Efisiensi" },
            { type: "paragraph", text: "AI bisa membantu UMKM beroperasi seperti perusahaan besar dengan anggaran terjangkau — dari pembuatan konten, analisis data, hingga customer service otomatis." },
            { type: "heading", text: "5. Fokus pada Retensi Pelanggan" },
            { type: "paragraph", text: "Mendapatkan pelanggan baru 5-7x lebih mahal daripada mempertahankan yang lama. Investasikan pada program loyalitas dan after-sales service yang baik." },
            { type: "conclusion", text: "Implementasikan strategi ini secara bertahap dan konsisten. Ingat: konsistensi mengalahkan intensitas. Lebih baik 3 hal konsisten daripada 10 hal sporadis." },
        ],
    },
    "coaching-bisnis-vs-konsultan": {
        category: "Business Coaching", emoji: "🎯",
        title: "Perbedaan Business Coaching dan Konsultan Bisnis",
        date: "1 Maret 2026", readTime: "6 menit",
        excerpt: "Panduan lengkap memilih antara business coach dan konsultan bisnis sesuai kebutuhan.",
        related: ["strategi-digital-umkm-2026", "virtual-assistant-produktivitas"],
        content: [
            { type: "intro", text: "Banyak pemilik bisnis yang masih bingung: butuh coach atau konsultan? Keduanya bisa membantu, tapi dengan cara yang sangat berbeda. Memilih yang tepat bisa menentukan keberhasilan investasi Anda." },
            { type: "heading", text: "Business Coach: Memaksimalkan Potensi dari Dalam" },
            { type: "paragraph", text: "Coach bekerja dengan Anda — bukan untuk Anda. Coach membantu Anda menggali potensi sendiri dan menemukan jawaban dari dalam diri Anda. Analogi: instruktur yang duduk di samping — Anda tetap pegang setir." },
            { type: "heading", text: "Konsultan Bisnis: Solusi dari Luar" },
            { type: "paragraph", text: "Konsultan datang dengan keahlian spesifik dan memberikan rekomendasi langsung. Analogi: mekanik yang memperbaiki mesin mobil Anda dengan keahlian teknis spesifik." },
            { type: "heading", text: "Kapan Butuh Coach?" },
            { type: "list", title: "", items: ["Ingin kembangkan kepemimpinan dan mindset", "Merasa stuck dan butuh perspektif baru", "Ingin bangun sistem bisnis yang sustainable", "Butuh accountability partner"] },
            { type: "heading", text: "Kapan Butuh Konsultan?" },
            { type: "list", title: "", items: ["Butuh keahlian teknis spesifik", "Ada masalah bisnis yang butuh solusi cepat", "Ingin masuk pasar atau segmen baru", "Perlu audit dan analisis mendalam"] },
            { type: "conclusion", text: "Di Afbenesia, kami menawarkan pendekatan hybrid — coaching yang didukung keahlian konsultansi digital mendalam. Kami membantu Anda tumbuh dari dalam, sekaligus memberikan solusi teknis konkret." },
        ],
    },
    "meningkatkan-omset-digital-marketing": {
        category: "Digital Marketing", emoji: "💰",
        title: "Cara Meningkatkan Omset 200% dengan Digital Marketing",
        date: "22 Februari 2026", readTime: "8 menit",
        excerpt: "Strategi nyata yang terbukti meningkatkan omset klien Afbenesia hingga 200%.",
        related: ["strategi-digital-umkm-2026", "humanized-ai-bisnis-indonesia"],
        content: [
            { type: "intro", text: "Angka 200% bukan mimpi. Ini adalah hasil nyata yang kami capai bersama klien kami. Kuncinya bukan sekadar beriklan banyak — tapi strategi yang tepat, di platform yang tepat, untuk audiens yang tepat." },
            { type: "heading", text: "Pilar 1: Kenali Audiens Lebih Dalam dari Kompetitor" },
            { type: "paragraph", text: "Pahami pelanggan ideal Anda secara mendalam — bukan hanya demografi, tapi psikografi: apa yang mereka takutkan? Apa yang mereka impikan? Bisnis yang menguasai pemahaman audiens selalu mengungguli kompetitor meski dengan anggaran lebih kecil." },
            { type: "heading", text: "Pilar 2: Pilih Channel Berdasarkan Data" },
            { type: "list", title: "Panduan umum:", items: ["Google Search Ads — untuk audiens yang sudah tahu kebutuhan mereka", "Meta Ads — untuk membangun awareness dan desire", "TikTok Ads — untuk menjangkau generasi muda secara kreatif", "Email Marketing — untuk nurturing dan retensi pelanggan"] },
            { type: "heading", text: "Pilar 3: Konten yang Menjual, Bukan Hanya Mempromosikan" },
            { type: "paragraph", text: "80% konten harus memberikan nilai — mengedukasi, menghibur, atau menginspirasi. Hanya 20% yang boleh eksplisit mempromosikan produk. Audiens yang merasa mendapat nilai akan jauh lebih mudah dikonversi." },
            { type: "heading", text: "Pilar 4: Sistem Tracking dan Optimasi" },
            { type: "paragraph", text: "Digital marketing tanpa tracking yang baik seperti memancing tapi tidak tahu ikan apa yang ada. Pastikan setiap campaign memiliki tracking yang jelas — biaya per lead, per konversi, dan revenue dari setiap channel." },
            { type: "conclusion", text: "Peningkatan 200% membutuhkan waktu, konsistensi, dan kemauan belajar dari data. Tapi dengan strategi yang tepat dan eksekusi disiplin, ini adalah target yang sangat realistis untuk bisnis Anda." },
        ],
    },
    "virtual-assistant-produktivitas": {
        category: "Virtual Assistant", emoji: "🖥️",
        title: "Bagaimana VA Meningkatkan Produktivitas Bisnis Anda",
        date: "14 Februari 2026", readTime: "4 menit",
        excerpt: "Panduan delegasi tugas administratif untuk memaksimalkan fokus dan produktivitas.",
        related: ["coaching-bisnis-vs-konsultan", "strategi-digital-umkm-2026"],
        content: [
            { type: "intro", text: "Sebagai pemilik bisnis, waktu adalah aset paling berharga Anda. Namun tugas-tugas administratif seringkali menyita 30-40% waktu kerja — waktu yang seharusnya untuk strategi dan pertumbuhan." },
            { type: "heading", text: "Apa yang Bisa Didelegasikan?" },
            { type: "list", title: "Tugas ideal untuk VA:", items: ["Manajemen email dan komunikasi harian", "Pengaturan jadwal, meeting, dan appointment", "Pengelolaan media sosial dan konten", "Riset kompetitor, produk, atau informasi", "Pembuatan laporan, proposal, dan presentasi", "Koordinasi dengan vendor, supplier, dan klien"] },
            { type: "heading", text: "Dampak Nyata pada Produktivitas" },
            { type: "paragraph", text: "Klien kami yang menggunakan VA rata-rata mendapatkan kembali 15-20 jam per minggu — setara hampir 3 hari kerja penuh! Waktu itu dialihkan untuk hal-hal yang benar-benar menggerakkan bisnis." },
            { type: "heading", text: "Cara Memulai Delegasi yang Efektif" },
            { type: "paragraph", text: "Kunci sukses delegasi adalah dokumentasi yang baik. Sebelum menyerahkan tugas ke VA, buat panduan langkah-demi-langkah. Investasi waktu di awal ini akan menghemat waktu berlipat ganda ke depannya." },
            { type: "conclusion", text: "Berinvestasi dalam VA profesional bukan pengeluaran biasa — ini adalah investasi dalam produktivitas, kewarasan, dan pertumbuhan bisnis Anda. Ketika Anda bisa fokus pada hal terpenting, hasilnya akan berbicara sendiri." },
        ],
    },
    "ai-chatbot-customer-service": {
        category: "AI & Teknologi", emoji: "💬",
        title: "Implementasi AI Chatbot untuk Customer Service Efektif",
        date: "5 Februari 2026", readTime: "6 menit",
        excerpt: "Panduan implementasi AI chatbot humanized untuk meningkatkan kepuasan pelanggan.",
        related: ["humanized-ai-bisnis-indonesia", "strategi-digital-umkm-2026"],
        content: [
            { type: "intro", text: "AI chatbot yang buruk bisa membuat pelanggan frustrasi dan merusak reputasi brand. Sebaliknya, chatbot yang dirancang dengan baik bisa menjadi aset customer service terbesar — melayani 24/7 dan semakin pintar dari waktu ke waktu." },
            { type: "heading", text: "Mengapa Banyak Chatbot Gagal?" },
            { type: "paragraph", text: "Kesalahan terbesar adalah terlalu fokus pada efisiensi dan mengabaikan pengalaman pengguna. Chatbot yang kaku, tidak bisa memahami variasi bahasa, dan tidak tahu kapan harus menyerahkan ke manusia — itulah resep kegagalan." },
            { type: "heading", text: "5 Prinsip Humanized Chatbot" },
            { type: "list", title: "", items: ["Empati dulu, efisiensi kedua — chatbot harus 'merasakan' kebutuhan pelanggan", "Tahu batas kemampuan — tahu kapan harus eskalasi ke manusia", "Bahasa yang natural — terasa seperti manusia, bukan robot", "Personalisasi — gunakan nama pelanggan dan referensi interaksi sebelumnya", "Feedback loop — selalu beri opsi menghubungi manusia"] },
            { type: "heading", text: "Langkah Implementasi yang Benar" },
            { type: "paragraph", text: "Mulai dengan mengumpulkan dan menganalisis 100-200 percakapan nyata dengan pelanggan. Apa pertanyaan yang paling sering muncul? Data inilah fondasi chatbot yang efektif." },
            { type: "heading", text: "Studi Kasus: Retailindo" },
            { type: "paragraph", text: "Klien kami Retailindo mengimplementasikan AI chatbot di WhatsApp Business. Hasilnya: waktu respons turun dari 4-6 jam menjadi rata-rata 2 menit, 80% pertanyaan dijawab otomatis, dan CSAT meningkat 35%." },
            { type: "conclusion", text: "AI chatbot yang humanized bukan pengganti CS manusia — ia adalah augmentation yang membebaskan tim Anda dari tugas repetitif agar bisa fokus pada kasus yang benar-benar butuh sentuhan manusia." },
        ],
    },
};

const allPosts = Object.entries(articles).map(([slug, a]) => ({ slug, ...a }));

// ✅ FIX: await params
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const a = articles[slug];
    if (!a) return {};
    return { title: a.title, description: a.excerpt };
}

export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }) {
    // ✅ FIX: await params
    const { slug } = await params;
    const article = articles[slug];
    if (!article) notFound();

    const related = allPosts.filter(p => article.related?.includes(p.slug));

    return (
        <div className="font-sans">

            {/* HERO */}
            <section className="bg-dark text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6 animate-fade-in">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-white/70">{article.category}</span>
                    </div>
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in delay-100">{article.category}</span>
                    <div className="text-6xl mb-5 animate-bounce-soft">{article.emoji}</div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-up delay-200">
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm animate-fade-up delay-300">
                        <span>📅 {article.date}</span>
                        <span>•</span>
                        <span>⏱ {article.readTime} baca</span>
                    </div>
                </div>
            </section>

            {/* CONTENT + SIDEBAR */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Article */}
                        <article className="lg:w-2/3 animate-fade-up delay-100">
                            <div className="space-y-0">
                                {article.content.map((block, i) => {
                                    if (block.type === "intro") return (
                                        <p key={i} className="text-xl text-dark/70 leading-relaxed mb-8 font-medium border-l-4 border-primary pl-5 py-1">
                                            {block.text}
                                        </p>
                                    );
                                    if (block.type === "heading") return (
                                        <h2 key={i} className="text-2xl font-extrabold text-dark mt-10 mb-4 tracking-tight">{block.text}</h2>
                                    );
                                    if (block.type === "paragraph") return (
                                        <p key={i} className="text-dark/70 leading-relaxed mb-5 text-base">{block.text}</p>
                                    );
                                    if (block.type === "list") return (
                                        <div key={i} className="mb-6">
                                            {block.title && <p className="font-semibold text-dark mb-3">{block.title}</p>}
                                            <ul className="space-y-2.5">
                                                {block.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-dark/70">
                                                        <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                                                        <span className="text-sm leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                    if (block.type === "conclusion") return (
                                        <div key={i} className="mt-10 p-7 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
                                            <p className="font-bold text-dark mb-1 text-sm uppercase tracking-wider">Kesimpulan</p>
                                            <p className="text-dark/70 leading-relaxed">{block.text}</p>
                                        </div>
                                    );
                                    return null;
                                })}
                            </div>

                            {/* CTA inline */}
                            <div className="mt-12 p-8 bg-dark rounded-2xl text-white text-center reveal">
                                <p className="font-extrabold text-xl mb-2">Siap menerapkan strategi ini?</p>
                                <p className="text-white/60 text-sm mb-6">Konsultasikan dengan tim Afbenesia — gratis, tanpa komitmen!</p>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="inline-block bg-accent text-dark px-7 py-3.5 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                                    💬 Konsultasi via WhatsApp
                                </a>
                            </div>

                            <div className="mt-8 text-center">
                                <Link href="/blog" className="text-primary font-semibold text-sm hover:underline">
                                    ← Kembali ke Semua Artikel
                                </Link>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-6 animate-slide-right delay-300">
                            <div className="p-6 bg-cream rounded-2xl border border-[#E2E8F0] sticky top-24">
                                <h3 className="font-bold text-dark mb-3">Tentang Afbenesia</h3>
                                <p className="text-dark/60 text-sm leading-relaxed mb-4">
                                    Mitra pertumbuhan bisnis digital Anda. Dengan pengalaman 3+ tahun dan 100+ klien, kami siap membantu bisnis Anda berkembang.
                                </p>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="block bg-primary text-white text-center px-4 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 mb-3 btn-press">
                                    💬 Konsultasi Gratis
                                </a>
                                <Link href="/services" className="block border border-[#E2E8F0] text-dark text-center px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-white transition-colors">
                                    Lihat Layanan Kami
                                </Link>
                            </div>

                            {related.length > 0 && (
                                <div className="p-6 bg-cream rounded-2xl border border-[#E2E8F0]">
                                    <h3 className="font-bold text-dark mb-4">Artikel Terkait</h3>
                                    <div className="space-y-4">
                                        {related.map((post) => (
                                            <Link key={post.slug} href={`/blog/${post.slug}`}
                                                className="flex items-start gap-3 group p-3 rounded-xl hover:bg-white transition-colors">
                                                <span className="text-2xl flex-shrink-0">{post.emoji}</span>
                                                <div>
                                                    <p className="text-primary text-[10px] font-bold uppercase tracking-wider mb-0.5">{post.category}</p>
                                                    <p className="text-dark text-sm font-semibold group-hover:text-primary transition-colors leading-snug">{post.title}</p>
                                                    <p className="text-dark/40 text-xs mt-0.5">{post.readTime} baca</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
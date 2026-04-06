import Link from "next/link";
import { notFound } from "next/navigation";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const articles = {
    "humanized-ai-bisnis-indonesia": {
        category: "AI & Teknologi",
        title: "Humanized AI: Masa Depan Bisnis Digital di Indonesia",
        date: "15 Maret 2026",
        readTime: "5 menit",
        emoji: "🤖",
        excerpt: "Bagaimana AI yang terasa manusiawi dapat mengubah cara bisnis Indonesia berinteraksi dengan pelanggan.",
        content: [
            { type: "intro", text: "Kecerdasan buatan (AI) bukan lagi sekadar teknologi masa depan — ia sudah hadir di setiap sudut bisnis modern. Namun, ada satu pertanyaan penting yang sering terlewat: apakah AI yang Anda gunakan terasa manusiawi?" },
            { type: "heading", text: "Apa itu Humanized AI?" },
            { type: "paragraph", text: "Humanized AI adalah pendekatan penggunaan kecerdasan buatan yang mengutamakan pengalaman manusia. Bukan sekadar otomasi, melainkan bagaimana teknologi bisa berinteraksi dengan pelanggan dan mitra bisnis dengan cara yang terasa alami, empatik, dan relevan." },
            { type: "paragraph", text: "Bayangkan perbedaan antara chatbot yang menjawab 'Maaf, saya tidak mengerti pertanyaan Anda' versus chatbot yang merespons 'Sepertinya Anda ingin mengetahui tentang harga ya? Boleh saya jelaskan lebih detail?' — itulah esensi dari Humanized AI." },
            { type: "heading", text: "Mengapa Ini Penting untuk Bisnis Indonesia?" },
            { type: "paragraph", text: "Konsumen Indonesia dikenal sangat mengutamakan hubungan personal dalam berbisnis. Budaya gotong royong dan kepercayaan personal masih sangat kuat. Pendekatan yang terlalu dingin dan robotik justru bisa mengurangi kepercayaan pelanggan dan merusak brand Anda." },
            { type: "list", title: "Humanized AI menjembatani gap ini dengan:", items: [
                "AI yang memahami konteks budaya dan bahasa lokal Indonesia",
                "Respons yang terasa personal, bukan copy-paste generik",
                "Interaksi yang membangun kepercayaan jangka panjang",
                "Efisiensi operasional tanpa mengorbankan customer experience",
                "Kemampuan berempati dan memahami konteks percakapan",
            ]},
            { type: "heading", text: "Implementasi Nyata di Bisnis Anda" },
            { type: "paragraph", text: "Penerapan humanized AI tidak harus rumit atau mahal. Mulai dari chatbot customer service yang responsif dan empatik, sistem rekomendasi produk yang personal, hingga email marketing yang terasa seperti ditulis oleh manusia — semua ini adalah wujud nyata humanized AI yang bisa diimplementasikan hari ini." },
            { type: "paragraph", text: "Kuncinya adalah desain yang berpusat pada manusia (human-centered design). Setiap touchpoint AI dengan pelanggan Anda harus dirancang dengan mempertanyakan: 'Apakah respons ini terasa seperti dari seseorang yang peduli dengan kebutuhan pelanggan?'" },
            { type: "heading", text: "Studi Kasus: Dampak Nyata" },
            { type: "paragraph", text: "Salah satu klien kami, sebuah toko online di Jawa Timur, mengimplementasikan chatbot AI dengan pendekatan humanized. Hasilnya? Waktu respons turun dari 4 jam menjadi 2 menit, kepuasan pelanggan naik 35%, dan penjualan meningkat 25% dalam 3 bulan pertama." },
            { type: "conclusion", text: "Di Afbenesia, kami percaya bahwa AI terbaik adalah yang membuat pelanggan Anda merasa didengar dan dipahami. Itulah inti dari setiap layanan yang kami bangun untuk bisnis Anda. Teknologi seharusnya mempererat hubungan manusia, bukan memperjauhnya." },
        ],
        relatedPosts: ["strategi-digital-umkm-2026", "ai-chatbot-customer-service"],
    },
    "strategi-digital-umkm-2026": {
        category: "Strategi Digital",
        title: "5 Strategi Digital yang Wajib Dicoba UMKM di 2026",
        date: "8 Maret 2026",
        readTime: "7 menit",
        emoji: "📈",
        excerpt: "Strategi digital terbukti untuk UMKM agar bisa bersaing di era digital yang semakin kompetitif.",
        content: [
            { type: "intro", text: "Tahun 2026 membawa peluang besar bagi UMKM yang siap memanfaatkan transformasi digital. Berikut 5 strategi yang sudah terbukti efektif dari pengalaman kami mendampingi 100+ klien di seluruh Indonesia." },
            { type: "heading", text: "1. Optimalkan Kehadiran di Google" },
            { type: "paragraph", text: "Google My Business, SEO lokal, dan iklan Google Ads adalah tiga pilar utama yang harus dikuasai UMKM. Ketika pelanggan mencari produk atau jasa Anda, pastikan bisnis Anda mudah ditemukan di halaman pertama hasil pencarian." },
            { type: "paragraph", text: "Fakta menarik: 97% konsumen mencari bisnis lokal secara online sebelum mengunjungi atau menghubungi. Jika bisnis Anda tidak muncul di Google, Anda kehilangan hampir semua calon pelanggan potensial." },
            { type: "heading", text: "2. Manfaatkan Social Commerce" },
            { type: "paragraph", text: "TikTok Shop, Instagram Shopping, dan WhatsApp Business bukan sekadar tren — ini adalah saluran penjualan yang nyata dengan miliaran pengguna aktif. UMKM yang memanfaatkannya lebih awal akan menikmati keuntungan kompetitif yang signifikan." },
            { type: "list", title: "Platform yang wajib ada:", items: [
                "WhatsApp Business — untuk komunikasi dan penjualan langsung",
                "Instagram & TikTok — untuk brand awareness dan engagement",
                "Tokopedia/Shopee — untuk penjualan e-commerce",
                "Google My Business — untuk kehadiran lokal",
            ]},
            { type: "heading", text: "3. Bangun Email List dari Sekarang" },
            { type: "paragraph", text: "Email marketing memiliki ROI tertinggi di antara semua channel digital — rata-rata Rp 42 pendapatan untuk setiap Rp 1 yang diinvestasikan. Mulai kumpulkan email pelanggan Anda sekarang dan bangun hubungan yang lebih dalam melalui konten yang bernilai." },
            { type: "heading", text: "4. Gunakan AI untuk Efisiensi" },
            { type: "paragraph", text: "Dari pembuatan konten, analisis data, hingga customer service — AI bisa membantu UMKM beroperasi seperti perusahaan besar dengan anggaran yang sangat terjangkau. Tools seperti ChatGPT untuk konten, Canva AI untuk desain, dan chatbot untuk CS sudah bisa diakses gratis atau dengan biaya minimal." },
            { type: "heading", text: "5. Fokus pada Retensi, Bukan Hanya Akuisisi" },
            { type: "paragraph", text: "Mendapatkan pelanggan baru 5-7x lebih mahal daripada mempertahankan yang lama. Namun 80% bisnis masih mengalokasikan mayoritas budget marketing mereka untuk akuisisi pelanggan baru." },
            { type: "paragraph", text: "Investasikan waktu dan sumber daya untuk program loyalitas, after-sales service yang baik, dan komunikasi yang konsisten dengan pelanggan existing Anda." },
            { type: "conclusion", text: "Implementasikan strategi-strategi ini secara bertahap dan konsisten. Mulai dari yang paling mudah dan paling relevan dengan bisnis Anda. Ingat: konsistensi mengalahkan intensitas. Lebih baik melakukan 3 hal dengan konsisten daripada 10 hal dengan sporadis." },
        ],
        relatedPosts: ["humanized-ai-bisnis-indonesia", "meningkatkan-omset-digital-marketing"],
    },
    "coaching-bisnis-vs-konsultan": {
        category: "Business Coaching",
        title: "Perbedaan Business Coaching dan Konsultan Bisnis: Mana yang Tepat?",
        date: "1 Maret 2026",
        readTime: "6 menit",
        emoji: "🎯",
        excerpt: "Panduan lengkap memilih antara business coach dan konsultan bisnis sesuai kebutuhan Anda.",
        content: [
            { type: "intro", text: "Banyak pemilik bisnis yang masih bingung: butuh coach atau konsultan? Keduanya sama-sama bisa membantu, tapi dengan cara dan pendekatan yang sangat berbeda. Memilih yang tepat bisa menentukan keberhasilan investasi Anda." },
            { type: "heading", text: "Business Coach: Memaksimalkan Potensi dari Dalam" },
            { type: "paragraph", text: "Seorang business coach bekerja dengan Anda — bukan untuk Anda. Coach membantu Anda menggali potensi sendiri, membangun mindset yang tepat, dan menemukan jawaban atas tantangan bisnis dari dalam diri Anda sendiri melalui pertanyaan-pertanyaan yang powerful." },
            { type: "paragraph", text: "Analogi yang tepat: jika bisnis Anda adalah mobil, coach adalah instruktur yang duduk di samping dan memandu Anda — Anda tetap yang memegang setir. Coach tidak akan mengambil alih kemudi dari Anda." },
            { type: "heading", text: "Konsultan Bisnis: Solusi dan Keahlian dari Luar" },
            { type: "paragraph", text: "Konsultan datang dengan keahlian spesifik dan memberikan rekomendasi atau solusi langsung. Mereka menganalisis situasi bisnis Anda, mengidentifikasi masalah, dan menyajikan action plan yang bisa langsung diimplementasikan." },
            { type: "paragraph", text: "Menggunakan analogi yang sama: konsultan adalah mekanik yang akan memperbaiki mesin mobil Anda. Mereka punya keahlian teknis untuk mendiagnosis dan memperbaiki masalah spesifik." },
            { type: "heading", text: "Kapan Anda Membutuhkan Business Coach?" },
            { type: "list", title: "Pilih coach jika Anda:", items: [
                "Ingin mengembangkan kemampuan kepemimpinan dan mindset",
                "Merasa stuck dan butuh perspektif baru dari luar",
                "Ingin membangun sistem bisnis yang sustainable jangka panjang",
                "Butuh accountability partner untuk tetap on-track",
                "Ingin pertumbuhan personal yang berdampak pada pertumbuhan bisnis",
            ]},
            { type: "heading", text: "Kapan Anda Membutuhkan Konsultan?" },
            { type: "list", title: "Pilih konsultan jika Anda:", items: [
                "Butuh keahlian teknis spesifik (digital marketing, keuangan, dll)",
                "Ada masalah bisnis yang membutuhkan solusi cepat dan konkret",
                "Ingin masuk ke pasar atau segmen baru yang tidak familiar",
                "Perlu audit dan analisis mendalam dari perspektif eksternal",
                "Butuh implementation support yang spesifik",
            ]},
            { type: "heading", text: "Pendekatan Hybrid: Yang Terbaik dari Keduanya" },
            { type: "paragraph", text: "Idealnya, keduanya saling melengkapi. Seorang entrepreneur yang sedang berkembang membutuhkan coaching untuk membangun fondasi mindset dan leadership, sekaligus konsultansi untuk keahlian teknis spesifik." },
            { type: "conclusion", text: "Di Afbenesia, kami menawarkan pendekatan hybrid — coaching yang didukung oleh keahlian konsultansi digital yang mendalam. Kami membantu Anda tumbuh dari dalam, sekaligus memberikan solusi teknis konkret yang bisa diimplementasikan segera." },
        ],
        relatedPosts: ["strategi-digital-umkm-2026", "virtual-assistant-produktivitas"],
    },
    "meningkatkan-omset-digital-marketing": {
        category: "Digital Marketing",
        title: "Cara Meningkatkan Omset 200% dengan Digital Marketing yang Tepat",
        date: "22 Februari 2026",
        readTime: "8 menit",
        emoji: "💰",
        excerpt: "Strategi nyata yang terbukti meningkatkan omset klien Afbenesia hingga 200%.",
        content: [
            { type: "intro", text: "Angka 200% bukan mimpi. Ini adalah hasil nyata yang kami capai bersama klien kami. Kuncinya bukan sekadar beriklan banyak — tapi strategi yang tepat, di platform yang tepat, untuk audiens yang tepat, di waktu yang tepat." },
            { type: "heading", text: "Pilar 1: Kenali Audiens Anda Lebih Dalam dari Kompetitor" },
            { type: "paragraph", text: "Sebelum beriklan, pahami dulu siapa pelanggan ideal Anda secara mendalam. Bukan sekadar demografi (usia, jenis kelamin, lokasi) — tapi psikografi: apa yang mereka takutkan? Apa yang mereka impikan? Apa yang menghalangi mereka untuk membeli produk Anda?" },
            { type: "paragraph", text: "Bisnis yang menguasai pemahaman audiens ini akan selalu mengalahkan kompetitor dalam efisiensi iklan, meski dengan anggaran lebih kecil." },
            { type: "heading", text: "Pilar 2: Pilih Channel Berdasarkan Data, Bukan Asumsi" },
            { type: "paragraph", text: "Tidak semua bisnis cocok dengan semua platform. Bisnis B2B yang menjual jasa profesional mungkin lebih efektif di LinkedIn dan email marketing. Bisnis consumer goods yang menyasar anak muda mungkin lebih tepat di TikTok dan Instagram." },
            { type: "list", title: "Panduan umum pemilihan channel:", items: [
                "Google Search Ads — untuk audiens yang sudah tahu kebutuhan mereka",
                "Meta Ads (Facebook/Instagram) — untuk membangun awareness dan desire",
                "TikTok Ads — untuk menjangkau generasi muda dengan konten kreatif",
                "Email Marketing — untuk nurturing dan retensi pelanggan existing",
                "SEO — untuk traffic organik jangka panjang yang sustainable",
            ]},
            { type: "heading", text: "Pilar 3: Konten yang Menjual, Bukan Hanya Mempromosikan" },
            { type: "paragraph", text: "80% konten Anda harus memberikan nilai — mengedukasi, menghibur, atau menginspirasi. Hanya 20% yang boleh secara eksplisit mempromosikan produk/jasa Anda. Audiens yang merasa mendapat nilai dari konten Anda akan jauh lebih mudah dikonversi menjadi pelanggan." },
            { type: "heading", text: "Pilar 4: Sistem Tracking dan Optimasi" },
            { type: "paragraph", text: "Digital marketing tanpa tracking yang baik seperti memancing di laut tapi tidak tahu ikan apa yang ada di sana. Pastikan setiap campaign memiliki tracking yang jelas — berapa biaya per lead, per konversi, dan berapa revenue yang dihasilkan dari setiap channel." },
            { type: "heading", text: "Studi Kasus: PT Maju Bersama" },
            { type: "paragraph", text: "Klien kami PT Maju Bersama memulai dengan anggaran digital marketing yang minimal dan hasil yang hampir nol. Setelah implementasi strategi di atas selama 6 bulan, konversi meningkat 200%, ROI mencapai 3x, dan mereka sekarang memiliki sistem marketing yang bisa berjalan semi-otomatis." },
            { type: "conclusion", text: "Peningkatan 200% memang membutuhkan waktu, konsistensi, dan kemauan untuk belajar dari data. Tapi dengan strategi yang tepat dan eksekusi yang disiplin, ini adalah target yang sangat realistis untuk bisnis Anda. Kami siap mendampingi Anda dalam perjalanan ini." },
        ],
        relatedPosts: ["strategi-digital-umkm-2026", "humanized-ai-bisnis-indonesia"],
    },
    "virtual-assistant-produktivitas": {
        category: "Virtual Assistant",
        title: "Bagaimana Virtual Assistant Meningkatkan Produktivitas Bisnis Anda",
        date: "14 Februari 2026",
        readTime: "4 menit",
        emoji: "🖥️",
        excerpt: "Panduan delegasi tugas administratif untuk memaksimalkan fokus dan produktivitas Anda.",
        content: [
            { type: "intro", text: "Sebagai pemilik bisnis, waktu adalah aset paling berharga Anda. Namun seringkali, tugas-tugas administratif menyita 30-40% waktu kerja Anda — waktu yang seharusnya bisa digunakan untuk strategi, inovasi, dan pertumbuhan bisnis." },
            { type: "heading", text: "Apa Saja yang Bisa Didelegasikan?" },
            { type: "paragraph", text: "Banyak pemilik bisnis merasa tidak yakin tugas apa yang 'aman' untuk didelegasikan. Jawabannya sederhana: delegasikan semua tugas yang tidak memerlukan judgment strategis dari Anda." },
            { type: "list", title: "Daftar tugas yang ideal untuk VA:", items: [
                "Manajemen email dan komunikasi harian (baca, sortir, balas email rutin)",
                "Pengaturan jadwal, meeting, dan appointment",
                "Pengelolaan media sosial — penjadwalan konten dan respon komentar",
                "Riset kompetitor, produk, atau informasi yang Anda butuhkan",
                "Pembuatan laporan, proposal, dan materi presentasi",
                "Koordinasi dengan vendor, supplier, dan klien",
                "Data entry dan pengelolaan spreadsheet",
                "Booking perjalanan dan akomodasi",
            ]},
            { type: "heading", text: "Dampak Nyata pada Produktivitas" },
            { type: "paragraph", text: "Klien kami yang menggunakan layanan virtual assistant rata-rata mendapatkan kembali 15-20 jam per minggu. Itu setara dengan hampir 3 hari kerja penuh! Waktu itu kemudian dialihkan untuk hal-hal yang benar-benar menggerakkan bisnis — meeting strategis, pengembangan produk, atau bahkan waktu berkualitas dengan keluarga." },
            { type: "heading", text: "Cara Memulai Delegasi yang Efektif" },
            { type: "paragraph", text: "Kunci sukses delegasi adalah dokumentasi yang baik. Sebelum menyerahkan tugas ke VA, buat panduan langkah-demi-langkah tentang bagaimana tugas tersebut harus dikerjakan. Ini mungkin memakan waktu di awal, tapi investasi ini akan menghemat waktu berlipat ganda di masa depan." },
            { type: "heading", text: "Memilih Virtual Assistant yang Tepat" },
            { type: "paragraph", text: "Tidak semua VA diciptakan sama. Cari VA yang tidak hanya memiliki skills yang dibutuhkan, tapi juga memiliki pemahaman tentang konteks bisnis Anda, proaktif dalam komunikasi, dan dapat diandalkan untuk deadline." },
            { type: "conclusion", text: "Berinvestasi dalam virtual assistant profesional bukan pengeluaran biasa — ini adalah investasi dalam produktivitas, kewarasan, dan pertumbuhan bisnis Anda. Ketika Anda bisa fokus pada hal-hal yang benar-benar penting, hasil bisnis Anda akan berbicara sendiri." },
        ],
        relatedPosts: ["coaching-bisnis-vs-konsultan", "strategi-digital-umkm-2026"],
    },
    "ai-chatbot-customer-service": {
        category: "AI & Teknologi",
        title: "Implementasi AI Chatbot untuk Customer Service yang Efektif",
        date: "5 Februari 2026",
        readTime: "6 menit",
        emoji: "💬",
        excerpt: "Panduan implementasi AI chatbot yang humanized untuk meningkatkan kepuasan pelanggan.",
        content: [
            { type: "intro", text: "AI chatbot yang buruk bisa membuat pelanggan frustrasi dan merusak reputasi brand Anda. Sebaliknya, chatbot yang dirancang dengan baik bisa menjadi aset customer service terbesar — melayani 24/7, konsisten, dan semakin pintar dari waktu ke waktu." },
            { type: "heading", text: "Mengapa Banyak Chatbot Gagal?" },
            { type: "paragraph", text: "Kesalahan terbesar dalam implementasi chatbot adalah terlalu fokus pada efisiensi dan mengabaikan pengalaman pengguna. Chatbot yang hanya bisa menjawab pertanyaan dalam format tertentu, tidak bisa memahami variasi bahasa, dan tidak tahu kapan harus menyerahkan ke manusia — itulah resep kegagalan." },
            { type: "heading", text: "Prinsip Humanized Chatbot yang Efektif" },
            { type: "list", title: "5 prinsip yang harus dipegang:", items: [
                "Empati dulu, efisiensi kedua — chatbot harus 'merasakan' apa yang dibutuhkan pelanggan",
                "Tahu batas kemampuan — jangan coba jawab semua hal, tapi tahu kapan harus eskalasi",
                "Bahasa yang natural — gunakan bahasa yang terasa seperti manusia, bukan robot",
                "Personalisasi — gunakan nama pelanggan dan referensi interaksi sebelumnya jika ada",
                "Feedback loop — selalu beri opsi untuk menghubungi manusia jika chatbot tidak bisa membantu",
            ]},
            { type: "heading", text: "Langkah Implementasi yang Benar" },
            { type: "paragraph", text: "Sebelum membangun chatbot, mulailah dengan mengumpulkan dan menganalisis 100-200 percakapan nyata dengan pelanggan Anda. Apa pertanyaan yang paling sering muncul? Bagaimana cara pelanggan mengungkapkan pertanyaan yang sama dengan berbagai variasi?" },
            { type: "paragraph", text: "Data inilah yang menjadi fondasi chatbot yang efektif. Chatbot yang dibangun berdasarkan percakapan nyata akan jauh lebih akurat dan relevan dibanding yang hanya dibangun berdasarkan asumsi." },
            { type: "heading", text: "Mengukur Keberhasilan Chatbot" },
            { type: "list", title: "Metrik yang perlu dipantau:", items: [
                "Containment rate — persentase percakapan yang selesai tanpa eskalasi ke manusia",
                "Customer satisfaction score (CSAT) — kepuasan pelanggan setelah interaksi dengan chatbot",
                "Resolution rate — persentase masalah yang berhasil diselesaikan",
                "Average handling time — waktu rata-rata penyelesaian per percakapan",
            ]},
            { type: "heading", text: "Studi Kasus: Retailindo" },
            { type: "paragraph", text: "Klien kami Retailindo mengimplementasikan AI chatbot di WhatsApp Business. Hasilnya: waktu respons turun dari 4-6 jam menjadi rata-rata 2 menit, 80% pertanyaan berhasil dijawab otomatis, dan CSAT meningkat 35% dalam 2 bulan pertama." },
            { type: "conclusion", text: "AI chatbot yang humanized bukan pengganti customer service manusia — ia adalah augmentation yang membebaskan tim Anda dari tugas repetitif agar bisa fokus pada kasus yang benar-benar membutuhkan sentuhan dan empati manusia." },
        ],
        relatedPosts: ["humanized-ai-bisnis-indonesia", "strategi-digital-umkm-2026"],
    },
};

const allArticles = [
    { slug: "humanized-ai-bisnis-indonesia", category: "AI & Teknologi", title: "Humanized AI: Masa Depan Bisnis Digital di Indonesia", date: "15 Maret 2026", readTime: "5 menit", emoji: "🤖" },
    { slug: "strategi-digital-umkm-2026", category: "Strategi Digital", title: "5 Strategi Digital yang Wajib Dicoba UMKM di 2026", date: "8 Maret 2026", readTime: "7 menit", emoji: "📈" },
    { slug: "coaching-bisnis-vs-konsultan", category: "Business Coaching", title: "Perbedaan Business Coaching dan Konsultan Bisnis", date: "1 Maret 2026", readTime: "6 menit", emoji: "🎯" },
    { slug: "meningkatkan-omset-digital-marketing", category: "Digital Marketing", title: "Cara Meningkatkan Omset 200% dengan Digital Marketing", date: "22 Feb 2026", readTime: "8 menit", emoji: "💰" },
    { slug: "virtual-assistant-produktivitas", category: "Virtual Assistant", title: "Bagaimana VA Meningkatkan Produktivitas Bisnis", date: "14 Feb 2026", readTime: "4 menit", emoji: "🖥️" },
    { slug: "ai-chatbot-customer-service", category: "AI & Teknologi", title: "Implementasi AI Chatbot untuk Customer Service", date: "5 Feb 2026", readTime: "6 menit", emoji: "💬" },
];

export function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    const article = articles[params.slug];
    if (!article) return {};
    return { title: article.title, description: article.excerpt };
}

export default function BlogDetailPage({ params }) {
    const article = articles[params.slug];
    if (!article) notFound();

    const related = allArticles.filter(a => article.relatedPosts?.includes(a.slug));

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-white/70">{article.category}</span>
                    </div>
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4">{article.category}</span>
                    <div className="text-6xl mb-5">{article.emoji}</div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                        <span>📅 {article.date}</span>
                        <span>•</span>
                        <span>⏱ {article.readTime} baca</span>
                    </div>
                </div>
            </section>

            {/* ===== CONTENT + SIDEBAR ===== */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Article Content */}
                        <article className="lg:w-2/3">
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
                            <div className="mt-12 p-8 bg-dark rounded-2xl text-white text-center">
                                <p className="font-extrabold text-xl mb-2">Siap menerapkan strategi ini?</p>
                                <p className="text-white/60 text-sm mb-6">Konsultasikan dengan tim Afbenesia — gratis, tanpa komitmen!</p>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="inline-block bg-accent text-dark px-7 py-3.5 rounded-xl font-bold hover:bg-amber-400 transition-colors">
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
                        <aside className="lg:w-1/3 space-y-6">
                            {/* About */}
                            <div className="p-6 bg-cream rounded-2xl border border-[#E2E8F0] sticky top-24">
                                <h3 className="font-bold text-dark mb-3">Tentang Afbenesia</h3>
                                <p className="text-dark/60 text-sm leading-relaxed mb-4">
                                    Kami adalah mitra pertumbuhan bisnis digital Anda. Dengan pengalaman 3+ tahun dan 100+ klien, kami siap membantu bisnis Anda berkembang.
                                </p>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                                    className="block bg-primary text-white text-center px-4 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors mb-3">
                                    💬 Konsultasi Gratis
                                </a>
                                <Link href="/services" className="block border border-[#E2E8F0] text-dark text-center px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-white transition-colors">
                                    Lihat Layanan Kami
                                </Link>
                            </div>

                            {/* Related posts */}
                            {related.length > 0 && (
                                <div className="p-6 bg-cream rounded-2xl border border-[#E2E8F0]">
                                    <h3 className="font-bold text-dark mb-4">Artikel Terkait</h3>
                                    <div className="space-y-4">
                                        {related.map((post) => (
                                            <Link key={post.slug} href={`/blog/${post.slug}`}
                                                className="flex items-start gap-3 group">
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
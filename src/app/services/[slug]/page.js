import Link from "next/link";
import { notFound } from "next/navigation";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const servicesData = {
    "ai-digital-strategy": {
        icon: "🤖",
        title: "AI Digital Strategy Consulting",
        tagline: "Strategi digital cerdas berbasis kecerdasan buatan untuk hasil bisnis yang terukur.",
        desc: "Kami menganalisis kebutuhan bisnis Anda secara mendalam menggunakan teknologi AI terkini, lalu merancang strategi digital yang benar-benar sesuai dengan karakteristik bisnis dan target pasar Anda. Bukan template — ini strategi unik untuk bisnis Anda.",
        results: [
            { value: "+200%", label: "Rata-rata Kenaikan Konversi" },
            { value: "3x", label: "Return on Investment" },
            { value: "50%", label: "Efisiensi Biaya Iklan" },
        ],
        features: [
            { icon: "🔍", title: "Analisis Pasar & Kompetitor", desc: "Riset mendalam berbasis data untuk memahami posisi bisnis Anda di pasar dan peluang yang belum dimanfaatkan." },
            { icon: "📊", title: "Strategi SEO & SEM", desc: "Optimasi mesin pencari organik dan iklan berbayar yang dioptimalkan dengan AI untuk ROI maksimal." },
            { icon: "📋", title: "Perencanaan Kampanye Digital", desc: "Rencana kampanye terstruktur dengan KPI yang jelas, timeline, dan anggaran yang efisien." },
            { icon: "📈", title: "Dashboard Monitoring Real-time", desc: "Pantau performa strategi secara real-time dengan laporan yang mudah dipahami oleh tim Anda." },
            { icon: "🎯", title: "Optimasi Konversi (CRO)", desc: "Analisis dan perbaikan berkelanjutan website dan landing page untuk meningkatkan konversi." },
            { icon: "🤖", title: "AI-Powered Insights", desc: "Manfaatkan kekuatan AI untuk prediksi tren pasar dan rekomendasi strategi yang lebih akurat." },
        ],
        process: [
            { step: "1", title: "Discovery & Audit", desc: "Kami mengaudit kondisi digital bisnis Anda saat ini — website, SEO, iklan, media sosial." },
            { step: "2", title: "Analisis & Riset", desc: "Riset pasar, kompetitor, dan audiens target menggunakan tools AI dan data terkini." },
            { step: "3", title: "Penyusunan Strategi", desc: "Membuat roadmap strategi digital yang komprehensif dan terukur khusus untuk bisnis Anda." },
            { step: "4", title: "Implementasi & Monitoring", desc: "Eksekusi strategi dengan pemantauan ketat dan laporan berkala kepada Anda." },
        ],
        faq: [
            { q: "Berapa lama sampai terlihat hasilnya?", a: "Untuk SEO organik biasanya 3-6 bulan. Untuk iklan berbayar bisa terlihat dalam 2-4 minggu pertama." },
            { q: "Apakah cocok untuk bisnis kecil?", a: "Sangat cocok! Kami menyesuaikan skala dan anggaran strategi dengan kemampuan bisnis Anda." },
        ],
        tag: "Terpopuler",
        color: "bg-blue-50",
        accentColor: "text-blue-600",
    },
    "business-coaching": {
        icon: "🎯",
        title: "Business Coaching & Mentorship",
        tagline: "Pendampingan intensif oleh mentor berpengalaman untuk bisnis yang lebih kuat dan terarah.",
        desc: "Program coaching bisnis kami dirancang untuk membantu Anda mengidentifikasi peluang tersembunyi, mengatasi tantangan, dan membangun fondasi bisnis yang kokoh. Bukan hanya teori — kami mendampingi Anda hingga hasil nyata tercapai.",
        results: [
            { value: "+25%", label: "Rata-rata Kenaikan Revenue" },
            { value: "6", label: "Bulan Program Intensif" },
            { value: "98%", label: "Tingkat Kepuasan Klien" },
        ],
        features: [
            { icon: "👤", title: "Sesi 1-on-1 Personal", desc: "Bimbingan personal langsung bersama mentor berpengalaman yang memahami konteks bisnis Anda." },
            { icon: "📊", title: "Analisis Kinerja Bisnis", desc: "Evaluasi menyeluruh atas performa bisnis Anda — keuangan, operasional, marketing, dan SDM." },
            { icon: "🗺️", title: "Perumusan Strategi", desc: "Merancang strategi jangka pendek dan panjang yang realistis, actionable, dan terukur." },
            { icon: "⚠️", title: "Manajemen Risiko", desc: "Identifikasi potensi risiko bisnis dan cara mengatasinya sebelum menjadi masalah besar." },
            { icon: "🧠", title: "Mindset & Leadership", desc: "Pengembangan mindset pengusaha sukses dan kemampuan kepemimpinan yang efektif." },
            { icon: "✅", title: "Accountability System", desc: "Sistem akuntabilitas yang memastikan Anda tetap on-track menuju tujuan yang telah ditetapkan." },
        ],
        process: [
            { step: "1", title: "Asesmen Bisnis", desc: "Penilaian mendalam kondisi bisnis Anda saat ini — kekuatan, kelemahan, peluang, dan ancaman." },
            { step: "2", title: "Goal Setting", desc: "Menetapkan tujuan yang SMART bersama-sama dengan timeline yang realistis." },
            { step: "3", title: "Sesi Coaching Reguler", desc: "Pertemuan rutin (mingguan/dwimingguan) untuk membahas progress dan tantangan." },
            { step: "4", title: "Review & Evaluasi", desc: "Evaluasi berkala untuk mengukur pencapaian dan menyesuaikan strategi jika diperlukan." },
        ],
        faq: [
            { q: "Berapa frekuensi sesi coaching?", a: "Biasanya 1-2 kali per minggu, tergantung paket yang dipilih dan kebutuhan Anda." },
            { q: "Apakah bisa dilakukan online?", a: "Ya, sesi coaching bisa dilakukan via video call (Zoom/Google Meet) atau langsung di Jombang." },
        ],
        tag: null,
        color: "bg-amber-50",
        accentColor: "text-amber-600",
    },
    "virtual-assistant": {
        icon: "🖥️",
        title: "Virtual Assistant Services",
        tagline: "Delegasikan tugas administratif, fokuskan energi Anda pada pertumbuhan bisnis.",
        desc: "Tim virtual assistant profesional kami siap membantu mengelola tugas-tugas administratif harian bisnis Anda. Terlatih, responsif, dan memahami kebutuhan bisnis Indonesia — sehingga Anda bisa fokus pada hal yang benar-benar menggerakkan bisnis.",
        results: [
            { value: "+50%", label: "Peningkatan Produktivitas" },
            { value: "20 jam", label: "Waktu Dihemat per Minggu" },
            { value: "24/7", label: "Ketersediaan Tim" },
        ],
        features: [
            { icon: "📧", title: "Manajemen Email & Komunikasi", desc: "Pengelolaan kotak masuk, balas email, dan komunikasi bisnis harian secara profesional." },
            { icon: "📅", title: "Pengaturan Jadwal & Kalender", desc: "Manajemen jadwal meeting, appointment, dan reminder agar tidak ada yang terlewat." },
            { icon: "📱", title: "Pengelolaan Media Sosial", desc: "Penjadwalan konten, respon komentar/DM, dan monitoring performa akun bisnis Anda." },
            { icon: "🔎", title: "Riset & Pengumpulan Data", desc: "Riset pasar, kompetitor, atau informasi apa pun yang Anda butuhkan untuk keputusan bisnis." },
            { icon: "📑", title: "Laporan & Presentasi", desc: "Pembuatan laporan bisnis, proposal, dan materi presentasi yang profesional dan menarik." },
            { icon: "🤝", title: "Koordinasi Vendor & Klien", desc: "Mengelola komunikasi dan koordinasi dengan vendor, supplier, dan klien atas nama Anda." },
        ],
        process: [
            { step: "1", title: "Onboarding", desc: "Kami memahami bisnis, tool yang digunakan, dan preferensi komunikasi Anda." },
            { step: "2", title: "Identifikasi Tugas", desc: "Memetakan tugas-tugas yang akan didelegasikan dan membuat SOP yang jelas." },
            { step: "3", title: "Mulai Bekerja", desc: "VA kami mulai menangani tugas-tugas Anda dengan briefing dan feedback berkala." },
            { step: "4", title: "Evaluasi Berkala", desc: "Review mingguan untuk memastikan kualitas kerja dan menyesuaikan kebutuhan." },
        ],
        faq: [
            { q: "Apakah VA bisa menangani tools spesifik?", a: "Ya, VA kami terlatih menggunakan berbagai tools seperti Google Workspace, Canva, WhatsApp Business, dan lainnya." },
            { q: "Berapa jam kerja VA per hari?", a: "Fleksibel sesuai paket — mulai dari 4 jam hingga full-time 8 jam per hari." },
        ],
        tag: null,
        color: "bg-green-50",
        accentColor: "text-green-600",
    },
    "digital-marketing": {
        icon: "📢",
        title: "Digital Marketing Campaigns",
        tagline: "Kampanye digital yang tepat sasaran untuk pertumbuhan penjualan yang nyata dan terukur.",
        desc: "Kami merancang dan menjalankan kampanye pemasaran digital yang komprehensif — dari iklan berbayar hingga konten organik. Setiap kampanye dioptimalkan dengan data dan AI untuk memastikan setiap rupiah yang Anda investasikan memberikan hasil maksimal.",
        results: [
            { value: "+150%", label: "Rata-rata Kenaikan Penjualan" },
            { value: "+300%", label: "Peningkatan Engagement" },
            { value: "-40%", label: "Penurunan Cost Per Lead" },
        ],
        features: [
            { icon: "🎯", title: "Google Ads & Meta Ads", desc: "Pengelolaan iklan berbayar di Google, Facebook, dan Instagram dengan optimasi berbasis AI." },
            { icon: "✍️", title: "Konten Marketing & Copywriting", desc: "Pembuatan konten berkualitas tinggi yang menarik, relevan, dan mendorong konversi." },
            { icon: "📧", title: "Email Marketing", desc: "Kampanye email yang personal dan tersegmentasi untuk membangun loyalitas dan repeat purchase." },
            { icon: "📱", title: "Social Media Management", desc: "Strategi dan pengelolaan akun media sosial bisnis secara konsisten dan engaging." },
            { icon: "📊", title: "Analitik & Pelaporan", desc: "Pemantauan performa real-time dengan laporan komprehensif yang mudah dipahami." },
            { icon: "🔄", title: "Retargeting & Remarketing", desc: "Menjangkau kembali calon pelanggan yang sudah menunjukkan minat pada produk Anda." },
        ],
        process: [
            { step: "1", title: "Riset Audiens", desc: "Memahami profil, perilaku, dan pain point audiens target bisnis Anda secara mendalam." },
            { step: "2", title: "Strategi & Perencanaan", desc: "Merancang strategi kampanye dengan channel, konten, dan anggaran yang optimal." },
            { step: "3", title: "Eksekusi Kampanye", desc: "Menjalankan kampanye dengan monitoring ketat dan optimasi berkelanjutan." },
            { step: "4", title: "Analisis & Scaling", desc: "Menganalisis hasil, belajar dari data, dan scaling kampanye yang terbukti efektif." },
        ],
        faq: [
            { q: "Berapa anggaran minimum untuk iklan?", a: "Kami bisa mulai dengan anggaran Rp 2-3 juta per bulan untuk iklan, dan akan kami optimalkan sebaik mungkin." },
            { q: "Platform mana yang paling efektif untuk bisnis saya?", a: "Tergantung pada target audiens Anda. Kami akan merekomendasikan platform terbaik setelah analisis." },
        ],
        tag: null,
        color: "bg-purple-50",
        accentColor: "text-purple-600",
    },
    "custom-ai": {
        icon: "⚙️",
        title: "Custom AI Solutions",
        tagline: "Solusi kecerdasan buatan yang dirancang khusus untuk kebutuhan unik bisnis Anda.",
        desc: "Tidak semua bisnis membutuhkan solusi yang sama. Kami mengembangkan solusi AI yang benar-benar disesuaikan — dari chatbot customer service yang humanized, sistem rekomendasi produk, hingga otomasi proses bisnis yang kompleks.",
        results: [
            { value: "-60%", label: "Pengurangan Response Time" },
            { value: "+40%", label: "Efisiensi Operasional" },
            { value: "24/7", label: "Layanan Tanpa Henti" },
        ],
        features: [
            { icon: "💬", title: "AI Chatbot Customer Service", desc: "Chatbot pintar yang mampu melayani pelanggan 24/7 dengan percakapan yang natural dan empatik." },
            { icon: "🛒", title: "Sistem Rekomendasi Produk", desc: "AI yang membantu pelanggan menemukan produk yang paling relevan untuk meningkatkan nilai transaksi." },
            { icon: "📈", title: "Analitik Prediktif", desc: "Prediksi tren penjualan, churn pelanggan, dan kebutuhan stok berbasis data historis bisnis Anda." },
            { icon: "⚡", title: "Otomasi Proses Bisnis", desc: "Mengotomasi tugas-tugas repetitif untuk mengurangi human error dan meningkatkan efisiensi." },
            { icon: "🔗", title: "Integrasi Sistem", desc: "Mengintegrasikan solusi AI dengan sistem CRM, e-commerce, atau tools yang sudah Anda gunakan." },
            { icon: "🛡️", title: "AI yang Aman & Terpercaya", desc: "Solusi AI yang dibangun dengan memperhatikan keamanan data dan privasi pelanggan Anda." },
        ],
        process: [
            { step: "1", title: "Identifikasi Kebutuhan", desc: "Memahami proses bisnis Anda dan mengidentifikasi area yang paling berdampak jika diotomasi dengan AI." },
            { step: "2", title: "Desain Solusi", desc: "Merancang arsitektur solusi AI yang sesuai dengan kebutuhan, anggaran, dan infrastruktur yang ada." },
            { step: "3", title: "Pengembangan & Testing", desc: "Membangun solusi dengan pendekatan iteratif dan testing yang ketat sebelum diluncurkan." },
            { step: "4", title: "Deployment & Support", desc: "Meluncurkan solusi dan memberikan dukungan teknis serta pemeliharaan berkelanjutan." },
        ],
        faq: [
            { q: "Apakah perlu keahlian teknis untuk menggunakannya?", a: "Tidak. Kami merancang solusi yang mudah digunakan oleh tim Anda tanpa keahlian teknis khusus." },
            { q: "Berapa lama pengembangan solusi AI?", a: "Tergantung kompleksitas — chatbot sederhana bisa 2-4 minggu, solusi kompleks bisa 2-3 bulan." },
        ],
        tag: "Baru",
        color: "bg-rose-50",
        accentColor: "text-rose-600",
    },
    "email-marketing": {
        icon: "✉️",
        title: "Email Marketing Strategy",
        tagline: "Bangun hubungan yang kuat dengan pelanggan melalui email yang personal dan bernilai.",
        desc: "Email marketing yang efektif bukan sekadar mengirim banyak email. Kami merancang strategi email yang personal, tersegmentasi, dan terautomasi — membangun loyalitas pelanggan dan mendorong pembelian berulang yang menguntungkan bisnis Anda jangka panjang.",
        results: [
            { value: "+40%", label: "Peningkatan Open Rate" },
            { value: "+30%", label: "Kenaikan Konversi" },
            { value: "4200%", label: "ROI Email Marketing" },
        ],
        features: [
            { icon: "👥", title: "Segmentasi Audiens Cerdas", desc: "Mengelompokkan pelanggan berdasarkan perilaku, preferensi, dan tahap perjalanan pembelian mereka." },
            { icon: "🎨", title: "Desain Email Responsif", desc: "Template email yang profesional, menarik, dan dioptimalkan untuk semua perangkat dan email client." },
            { icon: "⚡", title: "Automation & Drip Campaign", desc: "Alur email otomatis yang mengirim pesan yang tepat kepada orang yang tepat di waktu yang tepat." },
            { icon: "🧪", title: "A/B Testing Sistematis", desc: "Pengujian berbagai elemen email (subject, konten, CTA) untuk terus meningkatkan performa." },
            { icon: "📊", title: "Laporan Performa Mendalam", desc: "Analisis lengkap open rate, click rate, konversi, dan revenue dari setiap kampanye email." },
            { icon: "🔄", title: "Re-engagement Campaign", desc: "Strategi khusus untuk mengaktifkan kembali pelanggan yang sudah lama tidak berinteraksi." },
        ],
        process: [
            { step: "1", title: "Audit List Email", desc: "Mengevaluasi kondisi database email Anda dan membersihkan kontak yang tidak aktif." },
            { step: "2", title: "Strategi & Segmentasi", desc: "Merancang strategi konten dan melakukan segmentasi audiens yang tepat." },
            { step: "3", title: "Pembuatan Konten", desc: "Membuat konten email yang menarik, personal, dan mendorong tindakan dari pembaca." },
            { step: "4", title: "Optimasi Berkelanjutan", desc: "Monitoring, A/B testing, dan optimasi berkelanjutan untuk hasil yang semakin baik." },
        ],
        faq: [
            { q: "Apakah saya butuh database email yang besar?", a: "Tidak harus besar — kualitas lebih penting dari kuantitas. Kami akan bantu Anda membangun list yang berkualitas." },
            { q: "Platform email marketing apa yang digunakan?", a: "Kami bisa bekerja dengan berbagai platform — Mailchimp, Klaviyo, atau platform pilihan Anda." },
        ],
        tag: null,
        color: "bg-teal-50",
        accentColor: "text-teal-600",
    },
};

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    const service = servicesData[params.slug];
    if (!service) return {};
    return {
        title: service.title,
        description: service.tagline,
    };
}

export default function ServiceDetailPage({ params }) {
    const service = servicesData[params.slug];
    if (!service) notFound();

    const waMsg = `https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(service.title)}.`;

    return (
        <div className="font-sans">

            {/* ===== HERO ===== */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="absolute bottom-12 left-10 w-16 h-16 border-2 border-accent opacity-20 rotate-12 rounded-sm pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/services" className="hover:text-white transition-colors">Layanan</Link>
                        <span>›</span>
                        <span className="text-white/70">{service.title}</span>
                    </div>
                    {service.tag && (
                        <span className="inline-block bg-accent text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                            {service.tag}
                        </span>
                    )}
                    <div className="text-6xl mb-5">{service.icon}</div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4 max-w-2xl">
                        {service.title}
                    </h1>
                    <p className="text-primary text-lg font-semibold mb-4">{service.tagline}</p>
                    <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8">{service.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-7 py-3.5 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                            💬 Diskusikan Kebutuhan Anda
                        </a>
                        <Link href="/services"
                            className="inline-flex items-center justify-center border border-white/25 text-white/80 hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all">
                            ← Lihat Semua Layanan
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== RESULTS ===== */}
            <section className="bg-accent py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        {service.results.map((result) => (
                            <div key={result.label}>
                                <p className="text-dark font-extrabold text-4xl sm:text-5xl tracking-tight">{result.value}</p>
                                <p className="text-dark/60 text-sm font-medium mt-1">{result.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURES ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Yang Anda Dapatkan</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Fitur & Manfaat Lengkap</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, i) => (
                            <div key={feature.title}
                                className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-card-hover ${i === 0 ? "bg-primary border-primary" : "bg-cream border-[#E2E8F0] hover:border-primary/30"}`}>
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h3 className={`font-bold text-lg mb-2 ${i === 0 ? "text-white" : "text-dark"}`}>{feature.title}</h3>
                                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-dark/60"}`}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Cara Kerja</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Proses Kami Bersama Anda</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((p, i) => (
                            <div key={p.step} className="relative">
                                {i < service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-primary/20 z-0" />
                                )}
                                <div className="relative z-10 text-center p-6">
                                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4">
                                        {p.step}
                                    </div>
                                    <h3 className="font-bold text-dark text-lg mb-2">{p.title}</h3>
                                    <p className="text-dark/55 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">FAQ</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">Pertanyaan Umum</h2>
                    </div>
                    <div className="space-y-4">
                        {service.faq.map((item) => (
                            <div key={item.q} className="p-6 rounded-2xl bg-cream border border-[#E2E8F0]">
                                <h3 className="font-bold text-dark mb-2 flex items-start gap-2">
                                    <span className="text-primary mt-0.5">Q.</span> {item.q}
                                </h3>
                                <p className="text-dark/60 text-sm leading-relaxed pl-5">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Tertarik dengan Layanan Ini?</h2>
                    <p className="text-white/60 mb-8">Hubungi kami sekarang untuk konsultasi gratis — tim kami siap membantu bisnis Anda!</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                            💬 Konsultasi via WhatsApp
                        </a>
                        <Link href="/services"
                            className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
                            Lihat Layanan Lainnya
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
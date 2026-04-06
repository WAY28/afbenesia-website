import Link from "next/link";
import { notFound } from "next/navigation";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Anda.";

const servicesData = {
    "ai-digital-strategy": {
        icon: "🤖", title: "AI Digital Strategy Consulting",
        tagline: "Strategi digital cerdas berbasis kecerdasan buatan untuk hasil bisnis yang terukur.",
        desc: "Kami menganalisis kebutuhan bisnis Anda menggunakan AI terkini dan merancang strategi digital yang benar-benar sesuai dengan karakteristik bisnis Anda — bukan template generik.",
        tag: "Terpopuler",
        results: [
            { value: "+200%", label: "Kenaikan Konversi" },
            { value: "3x", label: "Return on Investment" },
            { value: "50%", label: "Efisiensi Biaya Iklan" },
        ],
        features: [
            { icon: "🔍", title: "Analisis Pasar & Kompetitor", desc: "Riset mendalam berbasis data untuk memahami posisi bisnis Anda dan peluang yang belum dimanfaatkan." },
            { icon: "📊", title: "Strategi SEO & SEM", desc: "Optimasi mesin pencari dan iklan berbayar yang dioptimalkan dengan AI untuk ROI maksimal." },
            { icon: "📋", title: "Perencanaan Kampanye Digital", desc: "Rencana kampanye terstruktur dengan KPI yang jelas, timeline, dan anggaran yang efisien." },
            { icon: "📈", title: "Dashboard Monitoring Real-time", desc: "Pantau performa strategi secara real-time dengan laporan yang mudah dipahami." },
            { icon: "🎯", title: "Optimasi Konversi (CRO)", desc: "Analisis dan perbaikan berkelanjutan untuk meningkatkan konversi website Anda." },
            { icon: "💡", title: "AI-Powered Insights", desc: "Prediksi tren pasar dan rekomendasi strategi yang lebih akurat berbasis kecerdasan buatan." },
        ],
        process: [
            { step: "01", title: "Discovery & Audit", desc: "Mengaudit kondisi digital bisnis Anda — website, SEO, iklan, media sosial." },
            { step: "02", title: "Analisis & Riset", desc: "Riset pasar, kompetitor, dan audiens target menggunakan tools AI terkini." },
            { step: "03", title: "Penyusunan Strategi", desc: "Membuat roadmap strategi digital komprehensif khusus bisnis Anda." },
            { step: "04", title: "Implementasi & Monitoring", desc: "Eksekusi strategi dengan pemantauan ketat dan laporan berkala." },
        ],
        faq: [
            { q: "Berapa lama sampai terlihat hasilnya?", a: "SEO organik 3-6 bulan, iklan berbayar bisa terlihat dalam 2-4 minggu pertama." },
            { q: "Apakah cocok untuk bisnis kecil?", a: "Sangat cocok! Kami menyesuaikan skala dan anggaran strategi dengan kemampuan bisnis Anda." },
        ],
    },
    "business-coaching": {
        icon: "🎯", title: "Business Coaching & Mentorship",
        tagline: "Pendampingan intensif oleh mentor berpengalaman untuk bisnis yang lebih kuat.",
        desc: "Program coaching untuk membantu Anda mengidentifikasi peluang tersembunyi, mengatasi tantangan, dan membangun fondasi bisnis yang kokoh — didampingi hingga hasil nyata tercapai.",
        tag: null,
        results: [
            { value: "+25%", label: "Rata-rata Kenaikan Revenue" },
            { value: "6 bln", label: "Program Intensif" },
            { value: "98%", label: "Tingkat Kepuasan" },
        ],
        features: [
            { icon: "👤", title: "Sesi 1-on-1 Personal", desc: "Bimbingan personal langsung bersama mentor berpengalaman yang memahami bisnis Anda." },
            { icon: "📊", title: "Analisis Kinerja Bisnis", desc: "Evaluasi menyeluruh — keuangan, operasional, marketing, dan SDM." },
            { icon: "🗺️", title: "Perumusan Strategi", desc: "Merancang strategi jangka pendek dan panjang yang realistis dan actionable." },
            { icon: "⚠️", title: "Manajemen Risiko", desc: "Identifikasi potensi risiko bisnis dan cara mengatasinya sebelum menjadi masalah besar." },
            { icon: "🧠", title: "Mindset & Leadership", desc: "Pengembangan mindset pengusaha sukses dan kemampuan kepemimpinan yang efektif." },
            { icon: "✅", title: "Accountability System", desc: "Sistem akuntabilitas yang memastikan Anda tetap on-track menuju tujuan." },
        ],
        process: [
            { step: "01", title: "Asesmen Bisnis", desc: "Penilaian mendalam kondisi bisnis — kekuatan, kelemahan, peluang, ancaman." },
            { step: "02", title: "Goal Setting", desc: "Menetapkan tujuan SMART bersama-sama dengan timeline yang realistis." },
            { step: "03", title: "Sesi Coaching Reguler", desc: "Pertemuan rutin untuk membahas progress dan tantangan bisnis." },
            { step: "04", title: "Review & Evaluasi", desc: "Evaluasi berkala untuk mengukur pencapaian dan menyesuaikan strategi." },
        ],
        faq: [
            { q: "Berapa frekuensi sesi coaching?", a: "Biasanya 1-2 kali per minggu, tergantung paket yang dipilih." },
            { q: "Bisa dilakukan online?", a: "Ya, sesi coaching bisa via video call atau langsung di Jombang." },
        ],
    },
    "virtual-assistant": {
        icon: "🖥️", title: "Virtual Assistant Services",
        tagline: "Delegasikan tugas administratif, fokuskan energi pada pertumbuhan bisnis.",
        desc: "Tim virtual assistant profesional kami mengelola tugas administratif harian bisnis Anda — responsif, terlatih, dan memahami kebutuhan bisnis Indonesia.",
        tag: null,
        results: [
            { value: "+50%", label: "Peningkatan Produktivitas" },
            { value: "20 jam", label: "Dihemat per Minggu" },
            { value: "24/7", label: "Ketersediaan Tim" },
        ],
        features: [
            { icon: "📧", title: "Manajemen Email", desc: "Pengelolaan kotak masuk, balas email, dan komunikasi bisnis harian secara profesional." },
            { icon: "📅", title: "Pengaturan Jadwal", desc: "Manajemen jadwal meeting, appointment, dan reminder agar tidak ada yang terlewat." },
            { icon: "📱", title: "Pengelolaan Media Sosial", desc: "Penjadwalan konten, respon komentar/DM, dan monitoring performa akun bisnis." },
            { icon: "🔎", title: "Riset & Data", desc: "Riset pasar, kompetitor, atau informasi apa pun untuk keputusan bisnis Anda." },
            { icon: "📑", title: "Laporan & Presentasi", desc: "Pembuatan laporan bisnis, proposal, dan materi presentasi yang profesional." },
            { icon: "🤝", title: "Koordinasi Vendor & Klien", desc: "Mengelola komunikasi dan koordinasi dengan vendor dan klien atas nama Anda." },
        ],
        process: [
            { step: "01", title: "Onboarding", desc: "Memahami bisnis, tools, dan preferensi komunikasi Anda secara mendalam." },
            { step: "02", title: "Pembuatan SOP", desc: "Merancang Standard Operating Procedure untuk setiap jenis tugas administratif." },
            { step: "03", title: "Mulai Bekerja", desc: "VA kami mulai menangani tugas-tugas Anda dengan briefing dan feedback berkala." },
            { step: "04", title: "Evaluasi Berkala", desc: "Review mingguan untuk memastikan kualitas dan menyesuaikan kebutuhan." },
        ],
        faq: [
            { q: "VA bisa pakai tools apa saja?", a: "VA kami terlatih Google Workspace, Canva, WhatsApp Business, dan tools lainnya." },
            { q: "Berapa jam kerja per hari?", a: "Fleksibel — mulai dari 4 jam hingga full-time 8 jam per hari." },
        ],
    },
    "digital-marketing": {
        icon: "📢", title: "Digital Marketing Campaigns",
        tagline: "Kampanye digital tepat sasaran untuk pertumbuhan penjualan yang nyata.",
        desc: "Kami merancang dan menjalankan kampanye digital komprehensif — iklan berbayar hingga konten organik — dioptimalkan dengan data dan AI untuk hasil maksimal.",
        tag: null,
        results: [
            { value: "+150%", label: "Kenaikan Penjualan" },
            { value: "+300%", label: "Peningkatan Engagement" },
            { value: "-40%", label: "Cost Per Lead" },
        ],
        features: [
            { icon: "🎯", title: "Google Ads & Meta Ads", desc: "Pengelolaan iklan berbayar di Google, Facebook, Instagram dengan optimasi AI." },
            { icon: "✍️", title: "Konten Marketing", desc: "Pembuatan konten berkualitas tinggi yang menarik dan mendorong konversi." },
            { icon: "📧", title: "Email Marketing", desc: "Kampanye email personal dan tersegmentasi untuk loyalitas dan repeat purchase." },
            { icon: "📱", title: "Social Media Management", desc: "Strategi dan pengelolaan akun media sosial secara konsisten dan engaging." },
            { icon: "📊", title: "Analitik & Pelaporan", desc: "Pemantauan performa real-time dengan laporan komprehensif yang mudah dipahami." },
            { icon: "🔄", title: "Retargeting", desc: "Menjangkau kembali calon pelanggan yang sudah menunjukkan minat pada produk Anda." },
        ],
        process: [
            { step: "01", title: "Riset Audiens", desc: "Memahami profil, perilaku, dan pain point audiens target secara mendalam." },
            { step: "02", title: "Strategi & Perencanaan", desc: "Merancang strategi kampanye dengan channel, konten, dan anggaran optimal." },
            { step: "03", title: "Eksekusi Kampanye", desc: "Menjalankan kampanye dengan monitoring ketat dan optimasi berkelanjutan." },
            { step: "04", title: "Analisis & Scaling", desc: "Menganalisis hasil dan scaling kampanye yang terbukti efektif." },
        ],
        faq: [
            { q: "Berapa anggaran minimum iklan?", a: "Bisa mulai Rp 2-3 juta per bulan dan kami optimalkan sebaik mungkin." },
            { q: "Platform mana yang paling efektif?", a: "Tergantung audiens Anda. Kami rekomendasikan platform terbaik setelah analisis." },
        ],
    },
    "custom-ai": {
        icon: "⚙️", title: "Custom AI Solutions",
        tagline: "Solusi kecerdasan buatan yang dirancang khusus untuk bisnis Anda.",
        desc: "Kami mengembangkan solusi AI yang benar-benar disesuaikan — chatbot customer service humanized, sistem rekomendasi produk, hingga otomasi proses bisnis kompleks.",
        tag: "Baru",
        results: [
            { value: "-60%", label: "Response Time" },
            { value: "+40%", label: "Efisiensi Operasional" },
            { value: "24/7", label: "Layanan Tanpa Henti" },
        ],
        features: [
            { icon: "💬", title: "AI Chatbot Customer Service", desc: "Chatbot pintar yang melayani pelanggan 24/7 dengan percakapan natural dan empatik." },
            { icon: "🛒", title: "Sistem Rekomendasi Produk", desc: "AI yang membantu pelanggan menemukan produk paling relevan untuk meningkatkan nilai transaksi." },
            { icon: "📈", title: "Analitik Prediktif", desc: "Prediksi tren penjualan dan perilaku pelanggan berbasis data historis bisnis Anda." },
            { icon: "⚡", title: "Otomasi Proses Bisnis", desc: "Mengotomasi tugas repetitif untuk mengurangi human error dan meningkatkan efisiensi." },
            { icon: "🔗", title: "Integrasi Sistem", desc: "Mengintegrasikan solusi AI dengan CRM, e-commerce, atau tools yang sudah Anda gunakan." },
            { icon: "🛡️", title: "AI yang Aman & Terpercaya", desc: "Solusi AI yang dibangun dengan memperhatikan keamanan data dan privasi pelanggan." },
        ],
        process: [
            { step: "01", title: "Identifikasi Kebutuhan", desc: "Memahami proses bisnis dan area yang paling berdampak jika diotomasi." },
            { step: "02", title: "Desain Solusi", desc: "Merancang arsitektur solusi AI sesuai kebutuhan dan infrastruktur yang ada." },
            { step: "03", title: "Pengembangan & Testing", desc: "Membangun solusi dengan pendekatan iteratif dan testing ketat sebelum diluncurkan." },
            { step: "04", title: "Deployment & Support", desc: "Meluncurkan solusi dan memberikan dukungan teknis berkelanjutan." },
        ],
        faq: [
            { q: "Perlu keahlian teknis untuk menggunakannya?", a: "Tidak. Kami merancang solusi yang mudah digunakan tanpa keahlian teknis khusus." },
            { q: "Berapa lama pengembangannya?", a: "Chatbot sederhana 2-4 minggu, solusi kompleks bisa 2-3 bulan." },
        ],
    },
    "email-marketing": {
        icon: "✉️", title: "Email Marketing Strategy",
        tagline: "Bangun hubungan kuat dengan pelanggan melalui email yang personal.",
        desc: "Email marketing yang efektif bukan sekadar kirim banyak email. Kami merancang strategi yang personal, tersegmentasi, dan terautomasi untuk loyalitas dan repeat purchase.",
        tag: null,
        results: [
            { value: "+40%", label: "Open Rate" },
            { value: "+30%", label: "Kenaikan Konversi" },
            { value: "4200%", label: "ROI Email Marketing" },
        ],
        features: [
            { icon: "👥", title: "Segmentasi Audiens Cerdas", desc: "Mengelompokkan pelanggan berdasarkan perilaku dan preferensi mereka." },
            { icon: "🎨", title: "Desain Email Responsif", desc: "Template email profesional, menarik, dan optimal di semua perangkat." },
            { icon: "⚡", title: "Automation & Drip Campaign", desc: "Alur email otomatis yang mengirim pesan tepat di waktu yang tepat." },
            { icon: "🧪", title: "A/B Testing", desc: "Pengujian berbagai elemen email untuk terus meningkatkan performa." },
            { icon: "📊", title: "Laporan Performa Mendalam", desc: "Analisis lengkap open rate, click rate, konversi setiap kampanye." },
            { icon: "🔄", title: "Re-engagement Campaign", desc: "Strategi khusus untuk mengaktifkan kembali pelanggan yang sudah lama tidak berinteraksi." },
        ],
        process: [
            { step: "01", title: "Audit List Email", desc: "Mengevaluasi database email dan membersihkan kontak tidak aktif." },
            { step: "02", title: "Strategi & Segmentasi", desc: "Merancang strategi konten dan segmentasi audiens yang tepat." },
            { step: "03", title: "Pembuatan Konten", desc: "Membuat konten email yang menarik, personal, dan mendorong tindakan." },
            { step: "04", title: "Optimasi Berkelanjutan", desc: "Monitoring, A/B testing, dan optimasi untuk hasil yang semakin baik." },
        ],
        faq: [
            { q: "Butuh database besar?", a: "Tidak — kualitas lebih penting dari kuantitas. Kami bantu Anda membangun list berkualitas." },
            { q: "Platform apa yang digunakan?", a: "Kami bisa bekerja dengan Mailchimp, Klaviyo, atau platform pilihan Anda." },
        ],
    },
};

// ✅ FIX: params harus di-await di Next.js 15
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return {};
    return { title: service.title, description: service.tagline };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }) {
    // ✅ FIX: await params
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) notFound();

    const waMsg = `https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(service.title)}.`;

    return (
        <div className="font-sans">

            {/* HERO */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="absolute bottom-12 left-10 w-16 h-16 border-2 border-accent opacity-20 rotate-12 rounded-sm pointer-events-none animate-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6 animate-fade-in">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/services" className="hover:text-white transition-colors">Layanan</Link>
                        <span>›</span>
                        <span className="text-white/70">{service.title}</span>
                    </div>
                    {service.tag && (
                        <span className="inline-block bg-accent text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 animate-fade-in delay-100">
                            {service.tag}
                        </span>
                    )}
                    <div className="text-6xl mb-5 animate-scale-in delay-100">{service.icon}</div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4 max-w-2xl animate-fade-up delay-200">
                        {service.title}
                    </h1>
                    <p className="text-primary text-lg font-semibold mb-4 animate-fade-up delay-300">{service.tagline}</p>
                    <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8 animate-fade-up delay-400">{service.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-500">
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-7 py-3.5 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            💬 Diskusikan Kebutuhan Anda
                        </a>
                        <Link href="/services"
                            className="inline-flex items-center justify-center border border-white/25 text-white/80 hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all">
                            ← Lihat Semua Layanan
                        </Link>
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="bg-accent py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        {service.results.map((result, i) => (
                            <div key={result.label} className={`reveal delay-${i * 200 + 100}`}>
                                <p className="text-dark font-extrabold text-4xl sm:text-5xl tracking-tight">{result.value}</p>
                                <p className="text-dark/60 text-sm font-medium mt-1">{result.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Yang Anda Dapatkan</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Fitur & Manfaat Lengkap</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, i) => (
                            <div key={feature.title}
                                className={`p-6 rounded-2xl border card-hover reveal delay-${(i % 3) * 100 + 100} ${i === 0 ? "bg-primary border-primary" : "bg-cream border-[#E2E8F0] hover:border-primary/30"}`}>
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h3 className={`font-bold text-lg mb-2 ${i === 0 ? "text-white" : "text-dark"}`}>{feature.title}</h3>
                                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-dark/60"}`}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Cara Kerja</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Proses Kami Bersama Anda</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((p, i) => (
                            <div key={p.step} className={`text-center p-6 reveal delay-${i * 150}`}>
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 animate-pulse-glow">
                                    {p.step}
                                </div>
                                <h3 className="font-bold text-dark text-lg mb-2">{p.title}</h3>
                                <p className="text-dark/55 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">FAQ</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">Pertanyaan Umum</h2>
                    </div>
                    <div className="space-y-4">
                        {service.faq.map((item, i) => (
                            <div key={item.q} className={`p-6 rounded-2xl bg-cream border border-[#E2E8F0] hover:border-primary/30 transition-colors reveal delay-${i * 100}`}>
                                <h3 className="font-bold text-dark mb-2 flex items-start gap-2">
                                    <span className="text-primary font-extrabold">Q.</span> {item.q}
                                </h3>
                                <p className="text-dark/60 text-sm leading-relaxed pl-5">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Tertarik dengan Layanan Ini?</h2>
                    <p className="text-white/60 mb-8">Hubungi kami sekarang untuk konsultasi gratis — tim kami siap membantu!</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
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
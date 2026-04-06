import Link from "next/link";
import { notFound } from "next/navigation";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20proyek%20serupa.";

const portfolioData = {
    "pt-maju-bersama": {
        title: "Transformasi Digital PT Maju Bersama",
        category: "AI Digital Strategy", client: "PT Maju Bersama",
        duration: "6 Bulan", year: "2024", hero: "🏢",
        tags: ["AI Strategy", "Digital Marketing", "SEO", "Google Ads"],
        overview: "PT Maju Bersama adalah perusahaan manufaktur menengah yang ingin memperluas jangkauan pasar melalui saluran digital. Sebelum bekerja sama dengan Afbenesia, mereka hampir tidak memiliki kehadiran digital yang terstruktur.",
        challenge: "Kurangnya strategi digital terintegrasi, tidak ada data pelanggan yang tersistematis, dan tim yang tidak terbiasa dengan tools digital marketing modern.",
        solution: "Afbenesia merancang strategi digital 360° berbasis AI mencakup audit digital menyeluruh, pembangunan fondasi SEO, kampanye Google Ads teroptimasi, dan pelatihan tim internal.",
        results: [
            { value: "+200%", label: "Kenaikan Konversi", desc: "Dari hampir nol menjadi ratusan lead berkualitas per bulan." },
            { value: "+350%", label: "Traffic Website", desc: "Traffic organik meningkat drastis berkat optimasi SEO konsisten." },
            { value: "3x", label: "Return on Ad Spend", desc: "Setiap Rp 1 iklan menghasilkan Rp 3 pendapatan." },
            { value: "6 bln", label: "Waktu Pencapaian Target", desc: "Target 12 bulan berhasil dicapai dalam setengah waktu." },
        ],
        steps: [
            { title: "Audit & Discovery", desc: "Audit menyeluruh kondisi digital — website, SEO, kompetitor, potensi pasar." },
            { title: "Strategi & Planning", desc: "Roadmap strategi digital 6 bulan dengan milestone yang jelas dan terukur." },
            { title: "Implementasi", desc: "Eksekusi sistematis — dari optimasi website, pembuatan konten, hingga iklan berbayar." },
            { title: "Monitoring & Optimasi", desc: "Pemantauan harian dan optimasi berkelanjutan untuk memaksimalkan hasil." },
        ],
        testimonial: { text: "Afbenesia membawa perspektif baru dalam strategi digital kami. Mereka tidak hanya memberikan solusi teknis, tapi juga mendidik tim kami untuk bisa mandiri ke depannya. Hasilnya benar-benar luar biasa!", name: "Budi Santoso", role: "CEO PT Maju Bersama", avatar: "BS" },
    },
    "startup-x-virtual-assistant": {
        title: "Virtual Assistant untuk Startup X",
        category: "Virtual Assistant", client: "Startup X",
        duration: "Ongoing (12+ Bulan)", year: "2023", hero: "💻",
        tags: ["Virtual Assistant", "Automation", "Operations"],
        overview: "Startup X adalah perusahaan teknologi yang berkembang pesat dengan tim kecil yang kewalahan dengan tugas-tugas administratif, mengganggu fokus pada pengembangan produk.",
        challenge: "Tim kehilangan 30-40% waktu produktif setiap hari untuk urusan administratif. Tidak ada sistem terstruktur dan setiap anggota tim harus menangani adminnya sendiri.",
        solution: "Afbenesia menyediakan tim VA berdedikasi, lengkap dengan SOP terstruktur, sistem manajemen tugas terpusat, dan laporan harian yang transparan.",
        results: [
            { value: "+50%", label: "Produktivitas Tim", desc: "Tim kini bisa fokus penuh pada pengembangan produk dan pertumbuhan bisnis." },
            { value: "20 jam", label: "Dihemat per Minggu", desc: "Rata-rata setiap anggota tim mendapatkan kembali 4-5 jam produktif per hari." },
            { value: "-70%", label: "Email Backlog", desc: "Backlog email berhasil dieliminasi dalam 2 minggu pertama." },
            { value: "100%", label: "Meeting On-time", desc: "Semua jadwal meeting termanajemen dengan baik." },
        ],
        steps: [
            { title: "Onboarding & Discovery", desc: "Memahami workflow, tools, dan kebutuhan spesifik Startup X." },
            { title: "Pembuatan SOP", desc: "Merancang Standard Operating Procedure untuk setiap jenis tugas administratif." },
            { title: "Transisi Bertahap", desc: "Mengambil alih tugas secara bertahap tanpa gangguan operasional." },
            { title: "Optimasi Berkelanjutan", desc: "Review mingguan dan penyesuaian workflow untuk efisiensi yang semakin meningkat." },
        ],
        testimonial: { text: "Layanan VA Afbenesia adalah game-changer untuk bisnis kami. Kami bisa fokus 100% pada produk tanpa khawatir urusan admin. Investasi terbaik yang pernah kami lakukan!", name: "Diana", role: "COO Startup X", avatar: "DI" },
    },
    "coffeehouse-digital-campaign": {
        title: "Kampanye Digital CoffeeHouse",
        category: "Digital Marketing", client: "CoffeeHouse",
        duration: "4 Bulan", year: "2024", hero: "☕",
        tags: ["Social Media", "Content Marketing", "Instagram Ads", "TikTok"],
        overview: "CoffeeHouse adalah kedai kopi artisan lokal di Jombang dengan produk berkualitas namun kurang dikenal di luar komunitas sekitarnya.",
        challenge: "Engagement media sosial sangat rendah, hampir tidak ada penjualan online, dan brand awareness terbatas pada area sekitar kedai.",
        solution: "Kampanye digital terintegrasi menggabungkan konten kreatif di Instagram dan TikTok, iklan berbayar tertarget, dan strategi story-telling brand yang autentik.",
        results: [
            { value: "+300%", label: "Peningkatan Engagement", desc: "Likes, komentar, dan share meningkat drastis dalam 2 bulan pertama." },
            { value: "+150%", label: "Penjualan Online", desc: "Penjualan melalui platform online meningkat 150% dari baseline." },
            { value: "50K+", label: "Followers Baru", desc: "Pertumbuhan organik followers Instagram dan TikTok yang signifikan." },
            { value: "5x", label: "Jangkauan Brand", desc: "Brand CoffeeHouse kini dikenal di seluruh Jawa Timur." },
        ],
        steps: [
            { title: "Brand Audit & Strategy", desc: "Mengaudit brand identity dan merancang strategi konten yang autentik." },
            { title: "Content Creation", desc: "Membuat konten foto, video, dan copy yang menarik dan konsisten." },
            { title: "Paid Campaign Launch", desc: "Meluncurkan kampanye iklan tertarget di Instagram dan Facebook." },
            { title: "Community Building", desc: "Membangun komunitas online yang engaged dan loyal melalui interaksi aktif." },
        ],
        testimonial: { text: "Kami tidak menyangka media sosial bisa berdampak sebesar ini. Afbenesia benar-benar paham cara bercerita tentang brand kami dengan cara yang autentik dan menarik.", name: "Rizky Pratama", role: "Owner CoffeeHouse", avatar: "RP" },
    },
    "toko-nusantara-coaching": {
        title: "Coaching Bisnis Toko Nusantara",
        category: "Business Coaching", client: "Toko Nusantara",
        duration: "6 Bulan", year: "2023", hero: "🏪",
        tags: ["Business Coaching", "Mentorship", "Retail Strategy"],
        overview: "Toko Nusantara adalah toko pakaian tradisional yang telah berdiri 15 tahun namun menghadapi penurunan penjualan signifikan akibat perubahan tren pasar.",
        challenge: "Penjualan turun 30% dalam 2 tahun terakhir, tidak ada strategi jelas menghadapi persaingan online, dan owner kesulitan mengidentifikasi masalah utama.",
        solution: "Program coaching intensif 6 bulan mencakup analisis mendalam kondisi bisnis, restrukturisasi strategi penjualan, pendampingan adaptasi digital.",
        results: [
            { value: "+25%", label: "Kenaikan Revenue Bulanan", desc: "Pendapatan bulanan meningkat konsisten setelah restrukturisasi strategi." },
            { value: "+40%", label: "Efisiensi Operasional", desc: "Proses bisnis lebih efisien menghemat biaya operasional secara signifikan." },
            { value: "Online", label: "Kehadiran Digital Baru", desc: "Toko Nusantara kini hadir di marketplace dan media sosial." },
            { value: "100%", label: "Owner Confidence", desc: "Owner memiliki visi yang jelas dan kepercayaan diri memimpin bisnis." },
        ],
        steps: [
            { title: "Business Assessment", desc: "Evaluasi menyeluruh kondisi bisnis — keuangan, operasional, marketing, SDM." },
            { title: "Identifikasi Masalah Inti", desc: "Menemukan akar permasalahan yang menyebabkan penurunan performa." },
            { title: "Implementasi Solusi", desc: "Menerapkan perubahan strategis secara bertahap dengan pendampingan penuh." },
            { title: "Review & Scaling", desc: "Mengevaluasi hasil dan merancang rencana scaling ke tahap berikutnya." },
        ],
        testimonial: { text: "Coaching dari Afbenesia benar-benar mengubah cara saya melihat bisnis. Saya tidak hanya mendapat solusi, tapi juga pemahaman mendalam tentang menjalankan bisnis yang berkelanjutan.", name: "Siti Rahayu", role: "Owner Toko Nusantara", avatar: "SR" },
    },
    "kreatif-indah-email-marketing": {
        title: "Email Marketing Kreatif Indah",
        category: "Email Marketing", client: "Kreatif Indah",
        duration: "3 Bulan", year: "2024", hero: "✉️",
        tags: ["Email Marketing", "CRM", "Automation", "Segmentation"],
        overview: "Kreatif Indah adalah studio desain kreatif dengan database pelanggan besar namun tidak pernah dimanfaatkan secara optimal — email yang dikirim hampir selalu diabaikan.",
        challenge: "Open rate email hanya 8% (jauh di bawah rata-rata industri), tidak ada segmentasi audiens, konten generik dan tidak personal.",
        solution: "Merancang ulang strategi email marketing secara menyeluruh — segmentasi, template desain baru, konten yang dipersonalisasi, dan automation flow cerdas.",
        results: [
            { value: "+40%", label: "Open Rate", desc: "Dari 8% menjadi 48% — jauh di atas rata-rata industri 21%." },
            { value: "+30%", label: "Kenaikan Konversi", desc: "Email kini menjadi saluran penjualan terkuat kedua setelah referral." },
            { value: "-50%", label: "Unsubscribe Rate", desc: "Email yang relevan membuat pelanggan betah di list." },
            { value: "4200%", label: "ROI Email Marketing", desc: "Setiap Rp 1 menghasilkan Rp 42 pendapatan." },
        ],
        steps: [
            { title: "Database Audit", desc: "Membersihkan dan menganalisis database email yang ada." },
            { title: "Segmentasi & Persona", desc: "Mengelompokkan pelanggan berdasarkan perilaku dan preferensi." },
            { title: "Content & Design", desc: "Membuat template dan konten email yang personal dan menarik." },
            { title: "Automation Setup", desc: "Mengatur alur email otomatis untuk berbagai skenario perjalanan pelanggan." },
        ],
        testimonial: { text: "Saya tidak menyangka email marketing masih bisa seefektif ini. Afbenesia membuktikan bahwa dengan strategi yang tepat, email adalah alat penjualan yang sangat powerful.", name: "Sarah Wijaya", role: "Founder Kreatif Indah", avatar: "SW" },
    },
    "retailindo-ai-chatbot": {
        title: "AI Chatbot untuk Retailindo",
        category: "Custom AI Solutions", client: "Retailindo",
        duration: "2 Bulan", year: "2025", hero: "🤖",
        tags: ["AI Chatbot", "Customer Service", "WhatsApp API"],
        overview: "Retailindo adalah perusahaan retail online yang menerima ratusan pertanyaan pelanggan setiap hari. Tim CS kewalahan dan waktu respons lambat mulai mempengaruhi kepuasan pelanggan.",
        challenge: "Waktu respons rata-rata 4-6 jam, tim CS lembur setiap hari, banyak pertanyaan berulang, dan tidak ada layanan di luar jam kerja.",
        solution: "AI chatbot berbasis WhatsApp yang mampu menangani 80% pertanyaan umum secara otomatis, dengan eskalasi cerdas ke agen manusia untuk kasus kompleks.",
        results: [
            { value: "-60%", label: "Response Time", desc: "Dari 4-6 jam menjadi rata-rata 2 menit untuk pertanyaan umum." },
            { value: "80%", label: "Pertanyaan Otomatis", desc: "80% pertanyaan dijawab chatbot tanpa intervensi manusia." },
            { value: "+35%", label: "Kepuasan Pelanggan", desc: "Customer satisfaction score meningkat signifikan." },
            { value: "24/7", label: "Layanan Tanpa Henti", desc: "Pelanggan kini bisa mendapat bantuan kapan saja." },
        ],
        steps: [
            { title: "Analisis Kebutuhan", desc: "Mempelajari pola pertanyaan pelanggan dan proses CS yang ada." },
            { title: "Desain Conversation Flow", desc: "Merancang alur percakapan natural dan empatik untuk berbagai skenario." },
            { title: "Pengembangan & Training", desc: "Membangun dan melatih AI chatbot dengan data percakapan relevan." },
            { title: "Testing & Deployment", desc: "Pengujian intensif sebelum diluncurkan dengan monitoring ketat pasca-launch." },
        ],
        testimonial: { text: "AI chatbot dari Afbenesia benar-benar merevolusi operasional customer service kami. Tim kami sekarang bisa fokus pada kasus yang butuh sentuhan manusia. Luar biasa!", name: "Andi Pratama", role: "Direktur Operasional Retailindo", avatar: "AP" },
    },
};

// ✅ FIX: await params
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const p = portfolioData[slug];
    if (!p) return {};
    return { title: p.title, description: p.overview };
}

export async function generateStaticParams() {
    return Object.keys(portfolioData).map((slug) => ({ slug }));
}

export default async function PortfolioDetailPage({ params }) {
    // ✅ FIX: await params
    const { slug } = await params;
    const project = portfolioData[slug];
    if (!project) notFound();

    const others = Object.entries(portfolioData).filter(([s]) => s !== slug).slice(0, 3);

    return (
        <div className="font-sans">

            {/* HERO */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6 animate-fade-in">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        <span>›</span>
                        <span className="text-white/70">{project.client}</span>
                    </div>
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in delay-100">{project.category}</span>
                    <div className="text-6xl mb-5 animate-scale-in delay-100">{project.hero}</div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl animate-fade-up delay-200">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/60 animate-fade-up delay-300">
                        <span>👤 {project.client}</span>
                        <span>•</span>
                        <span>⏱ {project.duration}</span>
                        <span>•</span>
                        <span>📅 {project.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 animate-fade-up delay-400">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="reveal">
                                <h2 className="text-2xl font-extrabold text-dark mb-4">Tentang Proyek</h2>
                                <p className="text-dark/65 leading-relaxed">{project.overview}</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-[#E2E8F0] reveal delay-100">
                                <h3 className="font-bold text-dark text-lg mb-3">⚡ Tantangan</h3>
                                <p className="text-dark/65 text-sm leading-relaxed">{project.challenge}</p>
                            </div>
                            <div className="p-6 bg-primary rounded-2xl reveal delay-200">
                                <h3 className="font-bold text-white text-lg mb-3">💡 Solusi Kami</h3>
                                <p className="text-white/75 text-sm leading-relaxed">{project.solution}</p>
                            </div>
                        </div>
                        <div className="space-y-4 reveal-right">
                            {[
                                { label: "Klien", value: project.client },
                                { label: "Durasi", value: project.duration },
                                { label: "Tahun", value: project.year },
                            ].map(item => (
                                <div key={item.label} className="p-5 bg-white rounded-2xl border border-[#E2E8F0]">
                                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="font-bold text-dark">{item.value}</p>
                                </div>
                            ))}
                            <div className="p-5 bg-white rounded-2xl border border-[#E2E8F0]">
                                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-2">Layanan</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Hasil Nyata</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">Dampak yang Kami Ciptakan</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.results.map((result, i) => (
                            <div key={result.label} className={`p-6 rounded-2xl text-center card-hover reveal delay-${i * 100} ${i === 0 ? "bg-primary" : "bg-cream border border-[#E2E8F0]"}`}>
                                <p className={`text-4xl font-extrabold tracking-tight mb-1 ${i === 0 ? "text-white" : "text-primary"}`}>{result.value}</p>
                                <p className={`font-bold text-sm mb-2 ${i === 0 ? "text-white" : "text-dark"}`}>{result.label}</p>
                                <p className={`text-xs leading-relaxed ${i === 0 ? "text-white/65" : "text-dark/50"}`}>{result.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">Proses</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">Bagaimana Kami Melakukannya</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.steps.map((step, i) => (
                            <div key={step.title} className={`bg-white p-6 rounded-2xl border border-[#E2E8F0] card-hover reveal delay-${i * 100}`}>
                                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-extrabold mb-4">{i + 1}</div>
                                <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                                <p className="text-dark/55 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="py-16 bg-dark text-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <div className="flex gap-0.5 justify-center mb-6">
                        {[1,2,3,4,5].map(i => <span key={i} className="text-accent text-2xl">★</span>)}
                    </div>
                    <p className="text-xl text-white/80 leading-relaxed mb-8 italic">"{project.testimonial.text}"</p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold animate-pulse-glow">
                            {project.testimonial.avatar}
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white">{project.testimonial.name}</p>
                            <p className="text-white/50 text-sm">{project.testimonial.role}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OTHER PROJECTS */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-dark mb-8 reveal">Proyek Lainnya</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {others.map(([s, p], i) => (
                            <Link key={s} href={`/portfolio/${s}`}
                                className={`group p-6 rounded-2xl border border-[#E2E8F0] bg-cream card-hover reveal delay-${i * 100}`}>
                                <div className="text-3xl mb-3">{p.hero}</div>
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{p.category}</p>
                                <h3 className="font-bold text-dark group-hover:text-primary transition-colors mb-3">{p.title}</h3>
                                <span className="text-primary text-sm font-semibold">Lihat Detail →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ingin Hasil Serupa?</h2>
                    <p className="text-white/60 mb-8">Hubungi kami dan ceritakan tentang bisnis Anda!</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                        💬 Diskusikan Proyek Anda
                    </a>
                </div>
            </section>
        </div>
    );
}
"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLang } from "@/components/LanguageContext";

const WA_TRAINING = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20info%20program%20pelatihan.";

const programsData = {
    "ai-digital-marketing-reguler": {
        emoji: "📱",
        title: "AI Digital Marketing Reguler",
        badge: { id: "Pelatihan Intensif Berbasis AI", en: "AI-Based Intensive Training" },
        tagline: { id: "Kuasai digital marketing dari nol hingga profesional dalam 3 bulan.", en: "Master digital marketing from zero to professional in 3 months." },
        overview: {
            id: "Program AI Digital Marketing Reguler adalah program pelatihan intensif selama 3 bulan (160 Jam Pelajaran) yang dirancang untuk membekali peserta dengan keterampilan digital marketing yang relevan di era AI. Program ini cocok untuk pemula yang ingin terjun ke dunia digital marketing maupun profesional yang ingin meningkatkan keahliannya.",
            en: "The AI Digital Marketing Reguler program is a 3-month intensive training program (160 learning hours) designed to equip participants with digital marketing skills relevant to the AI era. This program is suitable for beginners who want to enter digital marketing as well as professionals looking to upgrade their skills.",
        },
        meta: {
            duration: { id: "3 Bulan (160 JP)", en: "3 Months (160 hours)" },
            level: { id: "Pemula – Menengah", en: "Beginner – Intermediate" },
            cert: "Sertifikasi BNSP",
            method: { id: "Online & Offline (Hybrid)", en: "Online & Offline (Hybrid)" },
            price: { id: "Hubungi Kami", en: "Contact Us" },
            schedule: { id: "Setiap Angkatan Baru", en: "Each New Batch" },
        },
        benefits: {
            id: [
                "Memahami fundamental digital marketing berbasis AI",
                "Mengelola akun media sosial bisnis secara profesional",
                "Membuat konten video dan desain grafis yang menarik",
                "Menjalankan live streaming untuk penjualan",
                "Menggunakan tools AI untuk efisiensi kerja",
                "Mendapatkan sertifikasi BNSP yang diakui nasional",
                "Siap bekerja sebagai Digital Marketer atau Freelancer",
                "Akses materi & rekaman seumur hidup",
            ],
            en: [
                "Understanding AI-based digital marketing fundamentals",
                "Managing business social media accounts professionally",
                "Creating engaging video content and graphic design",
                "Running live streaming for sales",
                "Using AI tools for work efficiency",
                "Getting nationally recognized BNSP certification",
                "Ready to work as a Digital Marketer or Freelancer",
                "Lifetime access to materials & recordings",
            ],
        },
        curriculum: {
            id: [
                { module: "Modul 1", title: "Dasar Digital Marketing & AI Tools", topics: ["Pengenalan ekosistem digital marketing", "Tools AI untuk content creation", "Riset pasar & analisis kompetitor"] },
                { module: "Modul 2", title: "Social Media Management", topics: ["Strategi konten Instagram & TikTok", "Pembuatan konten foto & video", "Jadwal posting & analitik"] },
                { module: "Modul 3", title: "Live Streaming & E-commerce", topics: ["Teknik live streaming yang menarik", "Optimasi toko online", "Strategi penjualan di marketplace"] },
                { module: "Modul 4", title: "Sertifikasi & Portfolio", topics: ["Persiapan uji kompetensi BNSP", "Pembuatan portfolio profesional", "Strategi mencari klien/kerja"] },
            ],
            en: [
                { module: "Module 1", title: "Digital Marketing Fundamentals & AI Tools", topics: ["Introduction to digital marketing ecosystem", "AI tools for content creation", "Market research & competitor analysis"] },
                { module: "Module 2", title: "Social Media Management", topics: ["Instagram & TikTok content strategy", "Photo & video content creation", "Posting schedule & analytics"] },
                { module: "Module 3", title: "Live Streaming & E-commerce", topics: ["Engaging live streaming techniques", "Online store optimization", "Marketplace sales strategy"] },
                { module: "Module 4", title: "Certification & Portfolio", topics: ["BNSP competency test preparation", "Professional portfolio creation", "Strategy for finding clients/jobs"] },
            ],
        },
        pricing: [
            { name: { id: "Regular", en: "Regular" }, price: { id: "Hubungi Kami", en: "Contact Us" }, features: { id: ["160 JP Pelatihan", "Materi Digital", "Sertifikat Kelulusan", "Grup Alumni"], en: ["160 Hours Training", "Digital Materials", "Graduation Certificate", "Alumni Group"] } },
            { name: { id: "Premium", en: "Premium" }, price: { id: "Hubungi Kami", en: "Contact Us" }, highlight: true, features: { id: ["Semua di Regular", "Uji Kompetensi BNSP", "Sertifikasi Resmi", "Mentoring 1-on-1", "Akses Rekaman Seumur Hidup"], en: ["Everything in Regular", "BNSP Competency Test", "Official Certification", "1-on-1 Mentoring", "Lifetime Recording Access"] } },
        ],
        faq: {
            id: [
                { q: "Apakah perlu pengalaman sebelumnya?", a: "Tidak perlu. Program ini dirancang untuk pemula sekalipun yang belum pernah terjun ke digital marketing." },
                { q: "Bagaimana sistem pembelajaran?", a: "Hybrid — kombinasi sesi online via Zoom dan pertemuan offline di Jombang. Materi bisa diakses kapan saja." },
                { q: "Berapa lama hingga bisa bekerja?", a: "Setelah lulus, Anda sudah siap untuk magang, freelance, atau bekerja sebagai digital marketer junior." },
                { q: "Apakah ada jaminan pekerjaan?", a: "Kami tidak memberikan jaminan kerja, namun kami membantu koneksi ke jaringan klien dan mitra Afbenesia." },
            ],
            en: [
                { q: "Is prior experience required?", a: "No experience needed. This program is designed even for beginners who have never ventured into digital marketing." },
                { q: "How does the learning system work?", a: "Hybrid — a combination of online sessions via Zoom and offline meetings in Jombang. Materials can be accessed anytime." },
                { q: "How long until I can work?", a: "After graduating, you'll be ready for internships, freelancing, or working as a junior digital marketer." },
                { q: "Is there a job guarantee?", a: "We don't provide job guarantees, but we help connect you to Afbenesia's client and partner network." },
            ],
        },
    },
    "manajemen-usaha-terapan": {
        emoji: "🏢",
        title: "Manajemen Usaha Terapan",
        badge: { id: "Program 1 Tahun: Jalur Wirausaha Sukses", en: "1-Year Program: Entrepreneurship Success Track" },
        tagline: { id: "Dari pengelola bisnis menjadi wirausahawan sukses dalam 12 bulan.", en: "From business manager to successful entrepreneur in 12 months." },
        overview: {
            id: "Program Manajemen Usaha Terapan adalah program komprehensif selama 12 bulan yang membekali peserta dengan keahlian lengkap dalam mengelola dan mengembangkan bisnis. Dari perencanaan bisnis, operasional, keuangan, hingga digitalisasi — semua dipelajari secara praktis dengan pendampingan mentor berpengalaman.",
            en: "The Applied Business Management program is a comprehensive 12-month program that equips participants with complete skills in managing and developing a business. From business planning, operations, finance, to digitalization — all learned practically with experienced mentor guidance.",
        },
        meta: {
            duration: { id: "12 Bulan", en: "12 Months" },
            level: { id: "Menengah – Lanjutan", en: "Intermediate – Advanced" },
            cert: "Sertifikasi Profesi",
            method: { id: "Online & Offline (Hybrid)", en: "Online & Offline (Hybrid)" },
            price: { id: "Hubungi Kami", en: "Contact Us" },
            schedule: { id: "Setiap Semester", en: "Every Semester" },
        },
        benefits: {
            id: [
                "Mampu membuat business plan yang komprehensif",
                "Mengelola operasional bisnis secara efektif",
                "Memahami dan mengelola keuangan bisnis",
                "Mengimplementasikan digitalisasi bisnis",
                "Memimpin tim dengan efektif",
                "Menggunakan aplikasi POS dan manajemen stok",
                "Mendapatkan sertifikasi profesi resmi",
                "Siap menjadi Manajer Operasional atau Wirausahawan",
            ],
            en: [
                "Able to create a comprehensive business plan",
                "Manage business operations effectively",
                "Understand and manage business finances",
                "Implement business digitalization",
                "Lead teams effectively",
                "Use POS applications and stock management",
                "Obtain official professional certification",
                "Ready to become an Operations Manager or Entrepreneur",
            ],
        },
        curriculum: {
            id: [
                { module: "Semester 1", title: "Fondasi Bisnis", topics: ["Business Planning & Model Canvas", "Manajemen Operasional Dasar", "Dasar-dasar Keuangan Bisnis"] },
                { module: "Semester 2", title: "Pengembangan & Digitalisasi", topics: ["Leadership & Manajemen SDM", "Digitalisasi Bisnis & Aplikasi POS", "Strategi Pemasaran Digital untuk Bisnis"] },
            ],
            en: [
                { module: "Semester 1", title: "Business Foundation", topics: ["Business Planning & Model Canvas", "Basic Operations Management", "Business Finance Fundamentals"] },
                { module: "Semester 2", title: "Development & Digitalization", topics: ["Leadership & HR Management", "Business Digitalization & POS Apps", "Digital Marketing Strategy for Business"] },
            ],
        },
        pricing: [
            { name: { id: "Reguler", en: "Regular" }, price: { id: "Hubungi Kami", en: "Contact Us" }, features: { id: ["12 Bulan Pelatihan", "Materi Komprehensif", "Sertifikat Kelulusan", "Grup Alumni"], en: ["12 Months Training", "Comprehensive Materials", "Graduation Certificate", "Alumni Group"] } },
            { name: { id: "Premium", en: "Premium" }, price: { id: "Hubungi Kami", en: "Contact Us" }, highlight: true, features: { id: ["Semua di Reguler", "Sertifikasi Profesi Resmi", "Mentoring Bisnis 1-on-1", "Akses Tools Premium", "Jaringan Alumni Eksklusif"], en: ["Everything in Regular", "Official Professional Certification", "1-on-1 Business Mentoring", "Premium Tools Access", "Exclusive Alumni Network"] } },
        ],
        faq: {
            id: [
                { q: "Untuk siapa program ini?", a: "Cocok untuk pemilik UMKM yang ingin berkembang, karyawan yang ingin wirausaha, atau fresh graduate yang ingin terjun ke dunia bisnis." },
                { q: "Apakah ada praktek langsung?", a: "Ya, sekitar 60% program adalah praktek langsung — simulasi bisnis, studi kasus nyata, dan kunjungan ke mitra bisnis." },
                { q: "Bagaimana dengan pendampingan?", a: "Setiap peserta mendapat mentor dedicated yang mendampingi selama 12 bulan program berlangsung." },
            ],
            en: [
                { q: "Who is this program for?", a: "Suitable for UMKM owners who want to grow, employees who want to become entrepreneurs, or fresh graduates who want to enter the business world." },
                { q: "Is there hands-on practice?", a: "Yes, about 60% of the program is direct practice — business simulations, real case studies, and visits to business partners." },
                { q: "What about mentoring?", a: "Each participant gets a dedicated mentor who accompanies them throughout the 12-month program." },
            ],
        },
    },
    "digital-business-ai-driven": {
        emoji: "🚀",
        title: "Digital Business (AI-Driven Track)",
        badge: { id: "Program 1 Tahun: Jalur Karir Profesional", en: "1-Year Program: Professional Career Track" },
        tagline: { id: "Kuasai ekosistem bisnis digital dengan kecerdasan buatan dalam 12 bulan.", en: "Master the digital business ecosystem with artificial intelligence in 12 months." },
        overview: {
            id: "Program Digital Business AI-Driven Track adalah program 12 bulan yang fokus pada penguasaan lengkap ekosistem bisnis digital — dari pemasaran konten, SEO, iklan berbayar, hingga penggunaan AI untuk mengautomasi dan mengoptimalkan setiap aspek bisnis digital Anda. Target karir: Digital Marketer, Content Strategist, hingga Agency Founder.",
            en: "The Digital Business AI-Driven Track is a 12-month program focused on comprehensive mastery of the digital business ecosystem — from content marketing, SEO, paid advertising, to using AI to automate and optimize every aspect of your digital business. Career targets: Digital Marketer, Content Strategist, to Agency Founder.",
        },
        meta: {
            duration: { id: "12 Bulan", en: "12 Months" },
            level: { id: "Pemula – Profesional", en: "Beginner – Professional" },
            cert: "Sertifikasi Profesi",
            method: { id: "Online & Offline (Hybrid)", en: "Online & Offline (Hybrid)" },
            price: { id: "Hubungi Kami", en: "Contact Us" },
            schedule: { id: "Setiap Semester", en: "Every Semester" },
        },
        benefits: {
            id: [
                "Menguasai strategi AI untuk bisnis digital",
                "Membuat konten kreatif (video, foto, copywriting)",
                "Menjalankan iklan Meta Ads & Google Ads yang efektif",
                "Memahami SEO & riset pasar berbasis data",
                "Membangun personal brand dan portofolio profesional",
                "Mampu mendirikan dan mengelola digital agency",
                "Mendapatkan sertifikasi profesi resmi",
                "Akses jaringan klien dan mitra bisnis Afbenesia",
            ],
            en: [
                "Master AI strategy for digital business",
                "Create creative content (video, photo, copywriting)",
                "Run effective Meta Ads & Google Ads",
                "Understand SEO & data-based market research",
                "Build personal brand and professional portfolio",
                "Able to establish and manage a digital agency",
                "Obtain official professional certification",
                "Access to Afbenesia's client and business partner network",
            ],
        },
        curriculum: {
            id: [
                { module: "Kuartal 1", title: "Fondasi & AI Strategy", topics: ["Ekosistem bisnis digital & tren AI", "Riset pasar & analisis kompetitor", "Personal branding & positioning"] },
                { module: "Kuartal 2", title: "Konten Kreatif", topics: ["Produksi video & foto profesional", "Copywriting yang mengkonversi", "Desain grafis dengan AI tools"] },
                { module: "Kuartal 3", title: "Performance Marketing", topics: ["Meta Ads (Facebook & Instagram)", "Google Ads & SEO", "Email marketing & automation"] },
                { module: "Kuartal 4", title: "Agency & Skalabilitas", topics: ["Membangun & mengelola digital agency", "Client acquisition & retention", "Sertifikasi profesi & portfolio"] },
            ],
            en: [
                { module: "Quarter 1", title: "Foundation & AI Strategy", topics: ["Digital business ecosystem & AI trends", "Market research & competitor analysis", "Personal branding & positioning"] },
                { module: "Quarter 2", title: "Creative Content", topics: ["Professional video & photo production", "Converting copywriting", "Graphic design with AI tools"] },
                { module: "Quarter 3", title: "Performance Marketing", topics: ["Meta Ads (Facebook & Instagram)", "Google Ads & SEO", "Email marketing & automation"] },
                { module: "Quarter 4", title: "Agency & Scalability", topics: ["Building & managing a digital agency", "Client acquisition & retention", "Professional certification & portfolio"] },
            ],
        },
        pricing: [
            { name: { id: "Reguler", en: "Regular" }, price: { id: "Hubungi Kami", en: "Contact Us" }, features: { id: ["12 Bulan Pelatihan", "Materi Komprehensif", "Sertifikat Kelulusan", "Grup Alumni"], en: ["12 Months Training", "Comprehensive Materials", "Graduation Certificate", "Alumni Group"] } },
            { name: { id: "Premium", en: "Premium" }, price: { id: "Hubungi Kami", en: "Contact Us" }, highlight: true, features: { id: ["Semua di Reguler", "Sertifikasi Profesi Resmi", "Mentoring 1-on-1 Eksklusif", "Akses Tools Premium (Canva Pro, dll)", "Referral ke Klien Afbenesia"], en: ["Everything in Regular", "Official Professional Certification", "Exclusive 1-on-1 Mentoring", "Premium Tools Access (Canva Pro, etc.)", "Referral to Afbenesia Clients"] } },
        ],
        faq: {
            id: [
                { q: "Apakah bisa sambil bekerja?", a: "Ya, jadwal dirancang fleksibel untuk profesional yang bekerja. Ada sesi malam dan weekend." },
                { q: "Berapa lama untuk bisa freelance?", a: "Kebanyakan peserta sudah bisa mengambil proyek freelance sejak bulan ke-3 atau ke-4 program." },
                { q: "Apakah ada proyek nyata?", a: "Ya, peserta akan mengerjakan proyek nyata untuk klien Afbenesia sebagai bagian dari portfolio mereka." },
            ],
            en: [
                { q: "Can I join while working?", a: "Yes, the schedule is designed flexibly for working professionals. There are evening and weekend sessions." },
                { q: "How long to be able to freelance?", a: "Most participants can already take freelance projects by month 3 or 4 of the program." },
                { q: "Are there real projects?", a: "Yes, participants will work on real projects for Afbenesia clients as part of their portfolio." },
            ],
        },
    },
};

export default function TrainingDetailPage() {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const program = programsData[slug];

    if (!program) return notFound();

    const meta = program.meta;
    const cur = lang === "id" ? program.curriculum.id : program.curriculum.en;
    const benefits = lang === "id" ? program.benefits.id : program.benefits.en;
    const faq = lang === "id" ? program.faq.id : program.faq.en;
    const waMsg = `https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20info%20program%20${encodeURIComponent(program.title)}.`;

    return (
        <div className="font-sans">

            {/* HERO */}
            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.06] skew-x-[-8deg] translate-x-16 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-6 animate-fade-in">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/training" className="hover:text-white transition-colors">{t("nav_training")}</Link>
                        <span>›</span>
                        <span className="text-white/70">{program.title}</span>
                    </div>
                    <span className="inline-block bg-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 animate-fade-in delay-100">
                        {lang === "id" ? program.badge.id : program.badge.en}
                    </span>
                    <div className="text-6xl mb-5 animate-bounce-soft">{program.emoji}</div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4 max-w-3xl animate-fade-up delay-200">
                        {program.title}
                    </h1>
                    <p className="text-primary text-lg font-semibold mb-4 animate-fade-up delay-300">
                        {lang === "id" ? program.tagline.id : program.tagline.en}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 animate-fade-up delay-400">
                        <a href="https://linktr.ee/lpk.afbenesia" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-7 py-3.5 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            🎓 {t("register_now")}
                        </a>
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center border border-white/25 text-white/80 hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all">
                            💬 {lang === "id" ? "Tanya Info Program" : "Ask Program Info"}
                        </a>
                        <Link href="/training"
                            className="inline-flex items-center justify-center border border-white/15 text-white/50 hover:text-white px-7 py-3.5 rounded-xl font-semibold transition-all text-sm">
                            {t("detail_back")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* META INFO */}
            <section className="bg-accent py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                        {[
                            { label: t("detail_duration_label"), val: lang === "id" ? meta.duration.id : meta.duration.en },
                            { label: t("detail_level_label"), val: lang === "id" ? meta.level.id : meta.level.en },
                            { label: t("detail_cert_label"), val: meta.cert },
                            { label: t("detail_method_label"), val: lang === "id" ? meta.method.id : meta.method.en },
                            { label: lang === "id" ? "Jadwal" : "Schedule", val: lang === "id" ? meta.schedule.id : meta.schedule.en },
                            { label: t("training_price"), val: lang === "id" ? meta.price.id : meta.price.en },
                        ].map((item, i) => (
                            <div key={i} className="reveal">
                                <p className="text-dark/50 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-dark font-extrabold text-sm">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OVERVIEW + SIDEBAR */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3 reveal">
                            <h2 className="text-2xl font-extrabold text-dark mb-4">{t("detail_overview")}</h2>
                            <p className="text-dark/65 leading-relaxed text-base">
                                {lang === "id" ? program.overview.id : program.overview.en}
                            </p>
                        </div>
                        <div className="lg:w-1/3 reveal-right">
                            <div className="bg-primary rounded-2xl p-6 text-white sticky top-24">
                                <p className="font-bold text-lg mb-4">{lang === "id" ? "Tertarik program ini?" : "Interested in this program?"}</p>
                                <a href="https://linktr.ee/lpk.afbenesia" target="_blank" rel="noopener noreferrer"
                                    className="block bg-accent text-dark text-center py-3 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 mb-3">
                                    🎓 {t("register_now")}
                                </a>
                                <a href={waMsg} target="_blank" rel="noopener noreferrer"
                                    className="block border border-white/30 text-white text-center py-3 rounded-xl font-bold hover:bg-white/10 transition-all text-sm">
                                    💬 {lang === "id" ? "Tanya Info" : "Ask Info"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{lang === "id" ? "Manfaat" : "Benefits"}</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">{t("detail_benefits")}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className={`p-5 rounded-2xl border card-hover reveal delay-${i % 4 * 100} ${i === 0 ? "bg-primary border-primary" : "bg-white border-[#E2E8F0] hover:border-primary/30"}`}>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mb-3 ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                                    {i + 1}
                                </div>
                                <p className={`text-sm leading-relaxed font-medium ${i === 0 ? "text-white" : "text-dark/70"}`}>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{lang === "id" ? "Silabus" : "Syllabus"}</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">{t("detail_curriculum")}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cur.map((item, i) => (
                            <div key={i} className={`p-6 rounded-2xl border reveal delay-${i * 100} ${i === 0 ? "bg-primary border-primary" : "bg-cream border-[#E2E8F0]"}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>{item.module}</span>
                                </div>
                                <h3 className={`font-extrabold text-lg mb-3 ${i === 0 ? "text-white" : "text-dark"}`}>{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.topics.map((topic, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-primary"}`} />
                                            <span className={`text-sm ${i === 0 ? "text-white/80" : "text-dark/65"}`}>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-16 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{lang === "id" ? "Investasi" : "Investment"}</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">{t("detail_pricing")}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {program.pricing.map((pkg, i) => (
                            <div key={i} className={`p-7 rounded-2xl border card-hover reveal delay-${i * 100} ${pkg.highlight ? "bg-primary border-primary" : "bg-white border-[#E2E8F0]"}`}>
                                {pkg.highlight && (
                                    <span className="inline-block bg-accent text-dark text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                                        {lang === "id" ? "Paling Populer" : "Most Popular"}
                                    </span>
                                )}
                                <h3 className={`font-extrabold text-xl mb-2 ${pkg.highlight ? "text-white" : "text-dark"}`}>
                                    {lang === "id" ? pkg.name.id : pkg.name.en}
                                </h3>
                                <p className={`text-3xl font-extrabold mb-5 ${pkg.highlight ? "text-accent" : "text-primary"}`}>
                                    {lang === "id" ? pkg.price.id : pkg.price.en}
                                </p>
                                <ul className="space-y-2.5 mb-6">
                                    {(lang === "id" ? pkg.features.id : pkg.features.en).map((f, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${pkg.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>✓</span>
                                            <span className={`text-sm ${pkg.highlight ? "text-white/80" : "text-dark/65"}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={waMsg} target="_blank" rel="noopener noreferrer"
                                    className={`block text-center py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 ${pkg.highlight ? "bg-accent text-dark hover:bg-amber-400" : "border border-[#E2E8F0] text-dark hover:bg-cream"}`}>
                                    {lang === "id" ? "Tanya Harga →" : "Ask for Pricing →"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">FAQ</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">{t("detail_faq")}</h2>
                    </div>
                    <div className="space-y-4">
                        {faq.map((item, i) => (
                            <div key={i} className={`p-6 rounded-2xl bg-cream border border-[#E2E8F0] reveal delay-${i * 100}`}>
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
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t("detail_register")}</h2>
                    <p className="text-white/60 mb-8">{lang === "id" ? "Amankan slot Anda sekarang sebelum penuh!" : "Secure your slot now before it fills up!"}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="https://linktr.ee/lpk.afbenesia" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            🎓 {t("register_now")}
                        </a>
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
                            💬 {lang === "id" ? "Tanya Info Dulu" : "Ask for Info First"}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
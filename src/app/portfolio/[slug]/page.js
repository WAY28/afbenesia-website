"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLang } from "@/components/LanguageContext";

const WA_URL = "https://wa.me/6285820122323?text=Halo%20Afbenesia%2C%20saya%20ingin%20konsultasi%20mengenai%20proyek%20serupa.";

const portfolioData = {
    "pt-maju-bersama": {
        title: { id: "Transformasi Digital PT Maju Bersama", en: "Digital Transformation of PT Maju Bersama" },
        category: { id: "AI Digital Strategy", en: "AI Digital Strategy" }, client: "PT Maju Bersama",
        duration: { id: "6 Bulan", en: "6 Months" }, year: "2024", hero: "🏢",
        tags: ["AI Strategy", "Digital Marketing", "SEO", "Google Ads"],
        overview: { id: "PT Maju Bersama adalah perusahaan manufaktur menengah yang ingin memperluas jangkauan pasar melalui saluran digital. Sebelum bekerja sama dengan Afbenesia, mereka hampir tidak memiliki kehadiran digital yang terstruktur.", en: "PT Maju Bersama is a mid-sized manufacturing company looking to expand its market reach through digital channels. Before working with Afbenesia, they had almost no structured digital presence." },
        challenge: { id: "Kurangnya strategi digital terintegrasi, tidak ada data pelanggan yang tersistematis, dan tim yang tidak terbiasa dengan tools digital marketing modern.", en: "Lack of an integrated digital strategy, no systematized customer data, and a team unfamiliar with modern digital marketing tools." },
        solution: { id: "Afbenesia merancang strategi digital 360° berbasis AI mencakup audit digital menyeluruh, pembangunan fondasi SEO, kampanye Google Ads teroptimasi, dan pelatihan tim internal.", en: "Afbenesia designed an AI-based 360° digital strategy covering a comprehensive digital audit, SEO foundation building, optimized Google Ads campaigns, and internal team training." },
        results: [
            { value: "+200%", label: { id: "Kenaikan Konversi", en: "Conversion Growth" }, desc: { id: "Dari hampir nol menjadi ratusan lead berkualitas per bulan.", en: "From near zero to hundreds of quality leads per month." } },
            { value: "+350%", label: { id: "Traffic Website", en: "Website Traffic" }, desc: { id: "Traffic organik meningkat drastis berkat optimasi SEO konsisten.", en: "Organic traffic grew drastically through consistent SEO optimization." } },
            { value: "3x", label: { id: "Return on Ad Spend", en: "Return on Ad Spend" }, desc: { id: "Setiap Rp 1 iklan menghasilkan Rp 3 pendapatan.", en: "Every Rp 1 in ads generated Rp 3 in revenue." } },
            { value: "6 bln", label: { id: "Waktu Pencapaian Target", en: "Time to Goal" }, desc: { id: "Target 12 bulan berhasil dicapai dalam setengah waktu.", en: "12-month targets achieved in half the time." } },
        ],
        steps: [
            { title: { id: "Audit & Discovery", en: "Audit & Discovery" }, desc: { id: "Audit menyeluruh kondisi digital — website, SEO, kompetitor, potensi pasar.", en: "Comprehensive digital audit — website, SEO, competitors, market potential." } },
            { title: { id: "Strategi & Planning", en: "Strategy & Planning" }, desc: { id: "Roadmap strategi digital 6 bulan dengan milestone yang jelas dan terukur.", en: "6-month digital strategy roadmap with clear, measurable milestones." } },
            { title: { id: "Implementasi", en: "Implementation" }, desc: { id: "Eksekusi sistematis — dari optimasi website, pembuatan konten, hingga iklan berbayar.", en: "Systematic execution — from website optimization, content creation, to paid ads." } },
            { title: { id: "Monitoring & Optimasi", en: "Monitoring & Optimization" }, desc: { id: "Pemantauan harian dan optimasi berkelanjutan untuk memaksimalkan hasil.", en: "Daily monitoring and continuous optimization to maximize results." } },
        ],
        testimonial: { text: { id: "Afbenesia membawa perspektif baru dalam strategi digital kami. Mereka tidak hanya memberikan solusi teknis, tapi juga mendidik tim kami untuk bisa mandiri ke depannya. Hasilnya benar-benar luar biasa!", en: "Afbenesia brought a fresh perspective to our digital strategy. They didn't just provide technical solutions — they educated our team to be self-sufficient going forward. The results were truly outstanding!" }, name: "Budi Santoso", role: "CEO PT Maju Bersama", avatar: "BS" },
    },
    "startup-x-virtual-assistant": {
        title: { id: "Virtual Assistant untuk Startup X", en: "Virtual Assistant for Startup X" },
        category: { id: "Virtual Assistant", en: "Virtual Assistant" }, client: "Startup X",
        duration: { id: "Ongoing (12+ Bulan)", en: "Ongoing (12+ Months)" }, year: "2023", hero: "💻",
        tags: ["Virtual Assistant", "Automation", "Operations"],
        overview: { id: "Startup X adalah perusahaan teknologi yang berkembang pesat dengan tim kecil yang kewalahan dengan tugas-tugas administratif, mengganggu fokus pada pengembangan produk.", en: "Startup X is a fast-growing tech company with a small team overwhelmed by administrative tasks, disrupting their focus on product development." },
        challenge: { id: "Tim kehilangan 30-40% waktu produktif setiap hari untuk urusan administratif. Tidak ada sistem terstruktur dan setiap anggota tim harus menangani adminnya sendiri.", en: "The team was losing 30–40% of productive time daily to administrative tasks. There was no structured system and every team member had to handle their own admin." },
        solution: { id: "Afbenesia menyediakan tim VA berdedikasi, lengkap dengan SOP terstruktur, sistem manajemen tugas terpusat, dan laporan harian yang transparan.", en: "Afbenesia provided a dedicated VA team, complete with structured SOPs, a centralized task management system, and transparent daily reports." },
        results: [
            { value: "+50%", label: { id: "Produktivitas Tim", en: "Team Productivity" }, desc: { id: "Tim kini bisa fokus penuh pada pengembangan produk dan pertumbuhan bisnis.", en: "The team can now fully focus on product development and business growth." } },
            { value: "20 jam", label: { id: "Dihemat per Minggu", en: "Saved per Week" }, desc: { id: "Rata-rata setiap anggota tim mendapatkan kembali 4-5 jam produktif per hari.", en: "Each team member recovers an average of 4–5 productive hours per day." } },
            { value: "-70%", label: { id: "Email Backlog", en: "Email Backlog" }, desc: { id: "Backlog email berhasil dieliminasi dalam 2 minggu pertama.", en: "Email backlog was eliminated within the first 2 weeks." } },
            { value: "100%", label: { id: "Meeting On-time", en: "On-time Meetings" }, desc: { id: "Semua jadwal meeting termanajemen dengan baik.", en: "All meeting schedules are well-managed." } },
        ],
        steps: [
            { title: { id: "Onboarding & Discovery", en: "Onboarding & Discovery" }, desc: { id: "Memahami workflow, tools, dan kebutuhan spesifik Startup X.", en: "Understanding Startup X's workflow, tools, and specific needs." } },
            { title: { id: "Pembuatan SOP", en: "SOP Creation" }, desc: { id: "Merancang Standard Operating Procedure untuk setiap jenis tugas administratif.", en: "Designing Standard Operating Procedures for every type of administrative task." } },
            { title: { id: "Transisi Bertahap", en: "Gradual Transition" }, desc: { id: "Mengambil alih tugas secara bertahap tanpa gangguan operasional.", en: "Taking over tasks gradually without operational disruption." } },
            { title: { id: "Optimasi Berkelanjutan", en: "Continuous Optimization" }, desc: { id: "Review mingguan dan penyesuaian workflow untuk efisiensi yang semakin meningkat.", en: "Weekly reviews and workflow adjustments for ever-increasing efficiency." } },
        ],
        testimonial: { text: { id: "Layanan VA Afbenesia adalah game-changer untuk bisnis kami. Kami bisa fokus 100% pada produk tanpa khawatir urusan admin. Investasi terbaik yang pernah kami lakukan!", en: "Afbenesia's VA service is a game-changer for our business. We can focus 100% on product without worrying about admin. The best investment we've ever made!" }, name: "Diana", role: "COO Startup X", avatar: "DI" },
    },
    "coffeehouse-digital-campaign": {
        title: { id: "Kampanye Digital CoffeeHouse", en: "CoffeeHouse Digital Campaign" },
        category: { id: "Digital Marketing", en: "Digital Marketing" }, client: "CoffeeHouse",
        duration: { id: "4 Bulan", en: "4 Months" }, year: "2024", hero: "☕",
        tags: ["Social Media", "Content Marketing", "Instagram Ads", "TikTok"],
        overview: { id: "CoffeeHouse adalah kedai kopi artisan lokal di Jombang dengan produk berkualitas namun kurang dikenal di luar komunitas sekitarnya.", en: "CoffeeHouse is a local artisan coffee shop in Jombang with quality products but limited recognition outside its immediate community." },
        challenge: { id: "Engagement media sosial sangat rendah, hampir tidak ada penjualan online, dan brand awareness terbatas pada area sekitar kedai.", en: "Social media engagement was very low, almost no online sales, and brand awareness was limited to the area around the shop." },
        solution: { id: "Kampanye digital terintegrasi menggabungkan konten kreatif di Instagram dan TikTok, iklan berbayar tertarget, dan strategi story-telling brand yang autentik.", en: "An integrated digital campaign combining creative content on Instagram and TikTok, targeted paid ads, and an authentic brand storytelling strategy." },
        results: [
            { value: "+300%", label: { id: "Peningkatan Engagement", en: "Engagement Growth" }, desc: { id: "Likes, komentar, dan share meningkat drastis dalam 2 bulan pertama.", en: "Likes, comments, and shares grew drastically in the first 2 months." } },
            { value: "+150%", label: { id: "Penjualan Online", en: "Online Sales" }, desc: { id: "Penjualan melalui platform online meningkat 150% dari baseline.", en: "Sales through online platforms increased 150% from baseline." } },
            { value: "50K+", label: { id: "Followers Baru", en: "New Followers" }, desc: { id: "Pertumbuhan organik followers Instagram dan TikTok yang signifikan.", en: "Significant organic follower growth on Instagram and TikTok." } },
            { value: "5x", label: { id: "Jangkauan Brand", en: "Brand Reach" }, desc: { id: "Brand CoffeeHouse kini dikenal di seluruh Jawa Timur.", en: "CoffeeHouse is now known throughout East Java." } },
        ],
        steps: [
            { title: { id: "Brand Audit & Strategy", en: "Brand Audit & Strategy" }, desc: { id: "Mengaudit brand identity dan merancang strategi konten yang autentik.", en: "Auditing brand identity and crafting an authentic content strategy." } },
            { title: { id: "Content Creation", en: "Content Creation" }, desc: { id: "Membuat konten foto, video, dan copy yang menarik dan konsisten.", en: "Creating engaging and consistent photo, video, and copy content." } },
            { title: { id: "Paid Campaign Launch", en: "Paid Campaign Launch" }, desc: { id: "Meluncurkan kampanye iklan tertarget di Instagram dan Facebook.", en: "Launching targeted ad campaigns on Instagram and Facebook." } },
            { title: { id: "Community Building", en: "Community Building" }, desc: { id: "Membangun komunitas online yang engaged dan loyal melalui interaksi aktif.", en: "Building an engaged and loyal online community through active interaction." } },
        ],
        testimonial: { text: { id: "Kami tidak menyangka media sosial bisa berdampak sebesar ini. Afbenesia benar-benar paham cara bercerita tentang brand kami dengan cara yang autentik dan menarik.", en: "We didn't expect social media to have such a big impact. Afbenesia truly understands how to tell our brand story in an authentic and engaging way." }, name: "Rizky Pratama", role: "Owner CoffeeHouse", avatar: "RP" },
    },
    "toko-nusantara-coaching": {
        title: { id: "Coaching Bisnis Toko Nusantara", en: "Toko Nusantara Business Coaching" },
        category: { id: "Business Coaching", en: "Business Coaching" }, client: "Toko Nusantara",
        duration: { id: "6 Bulan", en: "6 Months" }, year: "2023", hero: "🏪",
        tags: ["Business Coaching", "Mentorship", "Retail Strategy"],
        overview: { id: "Toko Nusantara adalah toko pakaian tradisional yang telah berdiri 15 tahun namun menghadapi penurunan penjualan signifikan akibat perubahan tren pasar.", en: "Toko Nusantara is a traditional clothing store that has been operating for 15 years but faced significant sales decline due to shifting market trends." },
        challenge: { id: "Penjualan turun 30% dalam 2 tahun terakhir, tidak ada strategi jelas menghadapi persaingan online, dan owner kesulitan mengidentifikasi masalah utama.", en: "Sales dropped 30% over the last 2 years, with no clear strategy to face online competition, and the owner struggling to identify the root problems." },
        solution: { id: "Program coaching intensif 6 bulan mencakup analisis mendalam kondisi bisnis, restrukturisasi strategi penjualan, pendampingan adaptasi digital.", en: "A 6-month intensive coaching program covering an in-depth business analysis, sales strategy restructuring, and digital adaptation mentoring." },
        results: [
            { value: "+25%", label: { id: "Kenaikan Revenue Bulanan", en: "Monthly Revenue Growth" }, desc: { id: "Pendapatan bulanan meningkat konsisten setelah restrukturisasi strategi.", en: "Monthly revenue grew consistently after strategy restructuring." } },
            { value: "+40%", label: { id: "Efisiensi Operasional", en: "Operational Efficiency" }, desc: { id: "Proses bisnis lebih efisien menghemat biaya operasional secara signifikan.", en: "More efficient business processes significantly reduced operational costs." } },
            { value: "Online", label: { id: "Kehadiran Digital Baru", en: "New Digital Presence" }, desc: { id: "Toko Nusantara kini hadir di marketplace dan media sosial.", en: "Toko Nusantara is now present on marketplaces and social media." } },
            { value: "100%", label: { id: "Owner Confidence", en: "Owner Confidence" }, desc: { id: "Owner memiliki visi yang jelas dan kepercayaan diri memimpin bisnis.", en: "The owner now has a clear vision and confidence in leading the business." } },
        ],
        steps: [
            { title: { id: "Business Assessment", en: "Business Assessment" }, desc: { id: "Evaluasi menyeluruh kondisi bisnis — keuangan, operasional, marketing, SDM.", en: "Comprehensive business evaluation — finance, operations, marketing, HR." } },
            { title: { id: "Identifikasi Masalah Inti", en: "Core Problem Identification" }, desc: { id: "Menemukan akar permasalahan yang menyebabkan penurunan performa.", en: "Finding the root causes behind the performance decline." } },
            { title: { id: "Implementasi Solusi", en: "Solution Implementation" }, desc: { id: "Menerapkan perubahan strategis secara bertahap dengan pendampingan penuh.", en: "Applying strategic changes gradually with full mentoring support." } },
            { title: { id: "Review & Scaling", en: "Review & Scaling" }, desc: { id: "Mengevaluasi hasil dan merancang rencana scaling ke tahap berikutnya.", en: "Evaluating results and designing a scaling plan for the next phase." } },
        ],
        testimonial: { text: { id: "Coaching dari Afbenesia benar-benar mengubah cara saya melihat bisnis. Saya tidak hanya mendapat solusi, tapi juga pemahaman mendalam tentang menjalankan bisnis yang berkelanjutan.", en: "Coaching from Afbenesia truly changed the way I see my business. I didn't just get solutions — I gained a deep understanding of how to run a sustainable business." }, name: "Siti Rahayu", role: "Owner Toko Nusantara", avatar: "SR" },
    },
    "kreatif-indah-email-marketing": {
        title: { id: "Email Marketing Kreatif Indah", en: "Kreatif Indah Email Marketing" },
        category: { id: "Email Marketing", en: "Email Marketing" }, client: "Kreatif Indah",
        duration: { id: "3 Bulan", en: "3 Months" }, year: "2024", hero: "✉️",
        tags: ["Email Marketing", "CRM", "Automation", "Segmentation"],
        overview: { id: "Kreatif Indah adalah studio desain kreatif dengan database pelanggan besar namun tidak pernah dimanfaatkan secara optimal — email yang dikirim hampir selalu diabaikan.", en: "Kreatif Indah is a creative design studio with a large customer database that was never optimally utilized — emails sent were almost always ignored." },
        challenge: { id: "Open rate email hanya 8% (jauh di bawah rata-rata industri), tidak ada segmentasi audiens, konten generik dan tidak personal.", en: "Email open rate was only 8% (well below the industry average), no audience segmentation, and generic, impersonal content." },
        solution: { id: "Merancang ulang strategi email marketing secara menyeluruh — segmentasi, template desain baru, konten yang dipersonalisasi, dan automation flow cerdas.", en: "A complete redesign of the email marketing strategy — segmentation, new design templates, personalized content, and smart automation flows." },
        results: [
            { value: "+40%", label: { id: "Open Rate", en: "Open Rate" }, desc: { id: "Dari 8% menjadi 48% — jauh di atas rata-rata industri 21%.", en: "From 8% to 48% — well above the industry average of 21%." } },
            { value: "+30%", label: { id: "Kenaikan Konversi", en: "Conversion Growth" }, desc: { id: "Email kini menjadi saluran penjualan terkuat kedua setelah referral.", en: "Email is now the second strongest sales channel after referrals." } },
            { value: "-50%", label: { id: "Unsubscribe Rate", en: "Unsubscribe Rate" }, desc: { id: "Email yang relevan membuat pelanggan betah di list.", en: "Relevant emails keep subscribers engaged with the list." } },
            { value: "4200%", label: { id: "ROI Email Marketing", en: "Email Marketing ROI" }, desc: { id: "Setiap Rp 1 menghasilkan Rp 42 pendapatan.", en: "Every Rp 1 invested generated Rp 42 in revenue." } },
        ],
        steps: [
            { title: { id: "Database Audit", en: "Database Audit" }, desc: { id: "Membersihkan dan menganalisis database email yang ada.", en: "Cleaning and analyzing the existing email database." } },
            { title: { id: "Segmentasi & Persona", en: "Segmentation & Persona" }, desc: { id: "Mengelompokkan pelanggan berdasarkan perilaku dan preferensi.", en: "Grouping customers based on behavior and preferences." } },
            { title: { id: "Content & Design", en: "Content & Design" }, desc: { id: "Membuat template dan konten email yang personal dan menarik.", en: "Creating personal and engaging email templates and content." } },
            { title: { id: "Automation Setup", en: "Automation Setup" }, desc: { id: "Mengatur alur email otomatis untuk berbagai skenario perjalanan pelanggan.", en: "Setting up automated email flows for various customer journey scenarios." } },
        ],
        testimonial: { text: { id: "Saya tidak menyangka email marketing masih bisa seefektif ini. Afbenesia membuktikan bahwa dengan strategi yang tepat, email adalah alat penjualan yang sangat powerful.", en: "I didn't expect email marketing to still be this effective. Afbenesia proved that with the right strategy, email is an incredibly powerful sales tool." }, name: "Sarah Wijaya", role: "Founder Kreatif Indah", avatar: "SW" },
    },
    "retailindo-ai-chatbot": {
        title: { id: "AI Chatbot untuk Retailindo", en: "AI Chatbot for Retailindo" },
        category: { id: "Custom AI Solutions", en: "Custom AI Solutions" }, client: "Retailindo",
        duration: { id: "2 Bulan", en: "2 Months" }, year: "2025", hero: "🤖",
        tags: ["AI Chatbot", "Customer Service", "WhatsApp API"],
        overview: { id: "Retailindo adalah perusahaan retail online yang menerima ratusan pertanyaan pelanggan setiap hari. Tim CS kewalahan dan waktu respons lambat mulai mempengaruhi kepuasan pelanggan.", en: "Retailindo is an online retail company receiving hundreds of customer inquiries every day. The CS team was overwhelmed and slow response times were starting to impact customer satisfaction." },
        challenge: { id: "Waktu respons rata-rata 4-6 jam, tim CS lembur setiap hari, banyak pertanyaan berulang, dan tidak ada layanan di luar jam kerja.", en: "Average response time of 4–6 hours, CS team working overtime daily, many repetitive questions, and no service outside working hours." },
        solution: { id: "AI chatbot berbasis WhatsApp yang mampu menangani 80% pertanyaan umum secara otomatis, dengan eskalasi cerdas ke agen manusia untuk kasus kompleks.", en: "A WhatsApp-based AI chatbot capable of automatically handling 80% of common questions, with smart escalation to human agents for complex cases." },
        results: [
            { value: "-60%", label: { id: "Response Time", en: "Response Time" }, desc: { id: "Dari 4-6 jam menjadi rata-rata 2 menit untuk pertanyaan umum.", en: "From 4–6 hours to an average of 2 minutes for common questions." } },
            { value: "80%", label: { id: "Pertanyaan Otomatis", en: "Auto-answered Questions" }, desc: { id: "80% pertanyaan dijawab chatbot tanpa intervensi manusia.", en: "80% of questions answered by the chatbot without human intervention." } },
            { value: "+35%", label: { id: "Kepuasan Pelanggan", en: "Customer Satisfaction" }, desc: { id: "Customer satisfaction score meningkat signifikan.", en: "Customer satisfaction score increased significantly." } },
            { value: "24/7", label: { id: "Layanan Tanpa Henti", en: "Non-stop Service" }, desc: { id: "Pelanggan kini bisa mendapat bantuan kapan saja.", en: "Customers can now get help at any time." } },
        ],
        steps: [
            { title: { id: "Analisis Kebutuhan", en: "Needs Analysis" }, desc: { id: "Mempelajari pola pertanyaan pelanggan dan proses CS yang ada.", en: "Studying customer question patterns and existing CS processes." } },
            { title: { id: "Desain Conversation Flow", en: "Conversation Flow Design" }, desc: { id: "Merancang alur percakapan natural dan empatik untuk berbagai skenario.", en: "Designing natural and empathetic conversation flows for various scenarios." } },
            { title: { id: "Pengembangan & Training", en: "Development & Training" }, desc: { id: "Membangun dan melatih AI chatbot dengan data percakapan relevan.", en: "Building and training the AI chatbot with relevant conversation data." } },
            { title: { id: "Testing & Deployment", en: "Testing & Deployment" }, desc: { id: "Pengujian intensif sebelum diluncurkan dengan monitoring ketat pasca-launch.", en: "Intensive testing before launch with close post-launch monitoring." } },
        ],
        testimonial: { text: { id: "AI chatbot dari Afbenesia benar-benar merevolusi operasional customer service kami. Tim kami sekarang bisa fokus pada kasus yang butuh sentuhan manusia. Luar biasa!", en: "Afbenesia's AI chatbot truly revolutionized our customer service operations. Our team can now focus on cases that need a human touch. Outstanding!" }, name: "Andi Pratama", role: "Direktur Operasional Retailindo", avatar: "AP" },
    },
};

export default function PortfolioDetailPage() {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const project = portfolioData[slug];

    if (!project) return notFound();

    // Helper: resolve bilingual object { id, en } → string
    const L = (obj) =>
        typeof obj === "object" && obj !== null && (obj.id !== undefined || obj.en !== undefined)
            ? (obj[lang] ?? obj.id)
            : obj;

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
                        <Link href="/portfolio" className="hover:text-white transition-colors">{t("nav_portfolio")}</Link>
                        <span>›</span>
                        <span className="text-white/70">{project.client}</span>
                    </div>
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in delay-100">{L(project.category)}</span>
                    <div className="text-6xl mb-5 animate-scale-in delay-100">{project.hero}</div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl animate-fade-up delay-200">
                        {L(project.title)}
                    </h1>
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/60 animate-fade-up delay-300">
                        <span>👤 {project.client}</span>
                        <span>•</span>
                        <span>⏱ {L(project.duration)}</span>
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
                                <h2 className="text-2xl font-extrabold text-dark mb-4">{t("portfolio_about")}</h2>
                                <p className="text-dark/65 leading-relaxed">{L(project.overview)}</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-[#E2E8F0] reveal delay-100">
                                <h3 className="font-bold text-dark text-lg mb-3">{t("portfolio_challenge")}</h3>
                                <p className="text-dark/65 text-sm leading-relaxed">{L(project.challenge)}</p>
                            </div>
                            <div className="p-6 bg-primary rounded-2xl reveal delay-200">
                                <h3 className="font-bold text-white text-lg mb-3">{t("portfolio_solution")}</h3>
                                <p className="text-white/75 text-sm leading-relaxed">{L(project.solution)}</p>
                            </div>
                        </div>
                        <div className="space-y-4 reveal-right">
                            {[
                                { label: t("portfolio_client"), value: project.client },
                                { label: t("portfolio_duration"), value: L(project.duration) },
                                { label: t("portfolio_year"), value: project.year },
                            ].map(item => (
                                <div key={item.label} className="p-5 bg-white rounded-2xl border border-[#E2E8F0]">
                                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="font-bold text-dark">{item.value}</p>
                                </div>
                            ))}
                            <div className="p-5 bg-white rounded-2xl border border-[#E2E8F0]">
                                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-2">{t("portfolio_service")}</p>
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
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("portfolio_results_badge")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">{t("portfolio_results_title")}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.results.map((result, i) => (
                            <div key={i} className={`p-6 rounded-2xl text-center card-hover reveal delay-${i * 100} ${i === 0 ? "bg-primary" : "bg-cream border border-[#E2E8F0]"}`}>
                                <p className={`text-4xl font-extrabold tracking-tight mb-1 ${i === 0 ? "text-white" : "text-primary"}`}>{result.value}</p>
                                <p className={`font-bold text-sm mb-2 ${i === 0 ? "text-white" : "text-dark"}`}>{L(result.label)}</p>
                                <p className={`text-xs leading-relaxed ${i === 0 ? "text-white/65" : "text-dark/50"}`}>{L(result.desc)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("portfolio_process_badge")}</span>
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">{t("portfolio_process_title")}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.steps.map((step, i) => (
                            <div key={i} className={`bg-white p-6 rounded-2xl border border-[#E2E8F0] card-hover reveal delay-${i * 100}`}>
                                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-extrabold mb-4">{i + 1}</div>
                                <h3 className="font-bold text-dark mb-2">{L(step.title)}</h3>
                                <p className="text-dark/55 text-sm leading-relaxed">{L(step.desc)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="py-16 bg-dark text-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <div className="flex gap-0.5 justify-center mb-6">
                        {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-accent text-2xl">★</span>)}
                    </div>
                    <p className="text-xl text-white/80 leading-relaxed mb-8 italic">"{L(project.testimonial.text)}"</p>
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
                    <h2 className="text-2xl font-extrabold text-dark mb-8 reveal">{t("other_projects")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {others.map(([s, p], i) => (
                            <Link key={s} href={`/portfolio/${s}`}
                                className={`group p-6 rounded-2xl border border-[#E2E8F0] bg-cream card-hover reveal delay-${i * 100}`}>
                                <div className="text-3xl mb-3">{p.hero}</div>
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{L(p.category)}</p>
                                <h3 className="font-bold text-dark group-hover:text-primary transition-colors mb-3">{L(p.title)}</h3>
                                <span className="text-primary text-sm font-semibold">{t("view_detail")}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t("portfolio_similar")}</h2>
                    <p className="text-white/60 mb-8">{t("portfolio_similar_desc")}</p>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                        {lang === "id" ? "💬 Diskusikan Proyek Anda" : "💬 Discuss Your Project"}
                    </a>
                </div>
            </section>
        </div>
    );
}
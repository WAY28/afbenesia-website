"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLang } from "@/components/LanguageContext";

const servicesData = {
    "ai-digital-strategy": {
        icon: "🤖", title: "AI Digital Strategy Consulting",
        tag: { id: "Terpopuler", en: "Most Popular" },
        tagline: { id: "Strategi digital cerdas berbasis kecerdasan buatan untuk hasil bisnis yang terukur.", en: "Smart AI-powered digital strategy for measurable business results." },
        desc: { id: "Kami menganalisis kebutuhan bisnis Anda menggunakan AI terkini dan merancang strategi digital yang benar-benar sesuai dengan karakteristik bisnis Anda — bukan template generik.", en: "We analyze your business needs using the latest AI and design a digital strategy truly tailored to your business characteristics — not a generic template." },
        results: [
            { value: "+200%", label: { id: "Kenaikan Konversi", en: "Conversion Growth" } },
            { value: "3x", label: { id: "Return on Investment", en: "Return on Investment" } },
            { value: "50%", label: { id: "Efisiensi Biaya Iklan", en: "Ad Cost Efficiency" } },
        ],
        features: [
            { icon: "🔍", title: { id: "Analisis Pasar & Kompetitor", en: "Market & Competitor Analysis" }, desc: { id: "Riset mendalam berbasis data untuk memahami posisi bisnis Anda dan peluang yang belum dimanfaatkan.", en: "Data-driven in-depth research to understand your business position and untapped opportunities." } },
            { icon: "📊", title: { id: "Strategi SEO & SEM", en: "SEO & SEM Strategy" }, desc: { id: "Optimasi mesin pencari dan iklan berbayar yang dioptimalkan dengan AI untuk ROI maksimal.", en: "Search engine optimization and paid ads optimized with AI for maximum ROI." } },
            { icon: "📋", title: { id: "Perencanaan Kampanye Digital", en: "Digital Campaign Planning" }, desc: { id: "Rencana kampanye terstruktur dengan KPI yang jelas, timeline, dan anggaran yang efisien.", en: "Structured campaign plan with clear KPIs, timeline, and efficient budget allocation." } },
            { icon: "📈", title: { id: "Dashboard Monitoring Real-time", en: "Real-time Monitoring Dashboard" }, desc: { id: "Pantau performa strategi secara real-time dengan laporan yang mudah dipahami.", en: "Monitor strategy performance in real-time with easy-to-understand reports." } },
            { icon: "🎯", title: { id: "Optimasi Konversi (CRO)", en: "Conversion Rate Optimization (CRO)" }, desc: { id: "Analisis dan perbaikan berkelanjutan untuk meningkatkan konversi website Anda.", en: "Continuous analysis and improvement to boost your website conversions." } },
            { icon: "💡", title: { id: "AI-Powered Insights", en: "AI-Powered Insights" }, desc: { id: "Prediksi tren pasar dan rekomendasi strategi yang lebih akurat berbasis kecerdasan buatan.", en: "More accurate market trend predictions and strategy recommendations powered by AI." } },
        ],
        process: [
            { step: "01", title: { id: "Discovery & Audit", en: "Discovery & Audit" }, desc: { id: "Mengaudit kondisi digital bisnis Anda — website, SEO, iklan, media sosial.", en: "Auditing your digital business state — website, SEO, ads, social media." } },
            { step: "02", title: { id: "Analisis & Riset", en: "Analysis & Research" }, desc: { id: "Riset pasar, kompetitor, dan audiens target menggunakan tools AI terkini.", en: "Market, competitor, and target audience research using the latest AI tools." } },
            { step: "03", title: { id: "Penyusunan Strategi", en: "Strategy Formulation" }, desc: { id: "Membuat roadmap strategi digital komprehensif khusus bisnis Anda.", en: "Building a comprehensive digital strategy roadmap tailored to your business." } },
            { step: "04", title: { id: "Implementasi & Monitoring", en: "Implementation & Monitoring" }, desc: { id: "Eksekusi strategi dengan pemantauan ketat dan laporan berkala.", en: "Strategy execution with close monitoring and regular reporting." } },
        ],
        faq: [
            { q: { id: "Berapa lama sampai terlihat hasilnya?", en: "How long until results are visible?" }, a: { id: "SEO organik 3-6 bulan, iklan berbayar bisa terlihat dalam 2-4 minggu pertama.", en: "Organic SEO takes 3–6 months; paid ads results can be seen within the first 2–4 weeks." } },
            { q: { id: "Apakah cocok untuk bisnis kecil?", en: "Is this suitable for small businesses?" }, a: { id: "Sangat cocok! Kami menyesuaikan skala dan anggaran strategi dengan kemampuan bisnis Anda.", en: "Absolutely! We tailor the strategy's scale and budget to your business's capacity." } },
        ],
    },
    "business-coaching": {
        icon: "🎯", title: "Business Coaching & Mentorship",
        tag: null,
        tagline: { id: "Pendampingan intensif oleh mentor berpengalaman untuk bisnis yang lebih kuat.", en: "Intensive mentoring by experienced mentors for a stronger business." },
        desc: { id: "Program coaching untuk membantu Anda mengidentifikasi peluang tersembunyi, mengatasi tantangan, dan membangun fondasi bisnis yang kokoh — didampingi hingga hasil nyata tercapai.", en: "A coaching program to help you identify hidden opportunities, overcome challenges, and build a solid business foundation — guided until real results are achieved." },
        results: [
            { value: "+25%", label: { id: "Rata-rata Kenaikan Revenue", en: "Avg. Revenue Growth" } },
            { value: "6 bln", label: { id: "Program Intensif", en: "Intensive Program" } },
            { value: "98%", label: { id: "Tingkat Kepuasan", en: "Satisfaction Rate" } },
        ],
        features: [
            { icon: "👤", title: { id: "Sesi 1-on-1 Personal", en: "Personal 1-on-1 Sessions" }, desc: { id: "Bimbingan personal langsung bersama mentor berpengalaman yang memahami bisnis Anda.", en: "Direct personal guidance with experienced mentors who understand your business." } },
            { icon: "📊", title: { id: "Analisis Kinerja Bisnis", en: "Business Performance Analysis" }, desc: { id: "Evaluasi menyeluruh — keuangan, operasional, marketing, dan SDM.", en: "Comprehensive evaluation — finance, operations, marketing, and HR." } },
            { icon: "🗺️", title: { id: "Perumusan Strategi", en: "Strategy Formulation" }, desc: { id: "Merancang strategi jangka pendek dan panjang yang realistis dan actionable.", en: "Designing realistic and actionable short and long-term strategies." } },
            { icon: "⚠️", title: { id: "Manajemen Risiko", en: "Risk Management" }, desc: { id: "Identifikasi potensi risiko bisnis dan cara mengatasinya sebelum menjadi masalah besar.", en: "Identifying potential business risks and how to address them before they become major issues." } },
            { icon: "🧠", title: { id: "Mindset & Leadership", en: "Mindset & Leadership" }, desc: { id: "Pengembangan mindset pengusaha sukses dan kemampuan kepemimpinan yang efektif.", en: "Developing a successful entrepreneur mindset and effective leadership skills." } },
            { icon: "✅", title: { id: "Accountability System", en: "Accountability System" }, desc: { id: "Sistem akuntabilitas yang memastikan Anda tetap on-track menuju tujuan.", en: "An accountability system that keeps you on track toward your goals." } },
        ],
        process: [
            { step: "01", title: { id: "Asesmen Bisnis", en: "Business Assessment" }, desc: { id: "Penilaian mendalam kondisi bisnis — kekuatan, kelemahan, peluang, ancaman.", en: "In-depth business condition assessment — strengths, weaknesses, opportunities, threats." } },
            { step: "02", title: { id: "Goal Setting", en: "Goal Setting" }, desc: { id: "Menetapkan tujuan SMART bersama-sama dengan timeline yang realistis.", en: "Setting SMART goals together with a realistic timeline." } },
            { step: "03", title: { id: "Sesi Coaching Reguler", en: "Regular Coaching Sessions" }, desc: { id: "Pertemuan rutin untuk membahas progress dan tantangan bisnis.", en: "Regular meetings to discuss business progress and challenges." } },
            { step: "04", title: { id: "Review & Evaluasi", en: "Review & Evaluation" }, desc: { id: "Evaluasi berkala untuk mengukur pencapaian dan menyesuaikan strategi.", en: "Periodic evaluation to measure achievements and adjust strategy." } },
        ],
        faq: [
            { q: { id: "Berapa frekuensi sesi coaching?", en: "How often are coaching sessions?" }, a: { id: "Biasanya 1-2 kali per minggu, tergantung paket yang dipilih.", en: "Typically 1–2 times per week, depending on the package chosen." } },
            { q: { id: "Bisa dilakukan online?", en: "Can sessions be done online?" }, a: { id: "Ya, sesi coaching bisa via video call atau langsung di Jombang.", en: "Yes, coaching sessions can be done via video call or in person in Jombang." } },
        ],
    },
    "virtual-assistant": {
        icon: "🖥️", title: "Virtual Assistant Services",
        tag: null,
        tagline: { id: "Delegasikan tugas administratif, fokuskan energi pada pertumbuhan bisnis.", en: "Delegate administrative tasks, focus your energy on business growth." },
        desc: { id: "Tim virtual assistant profesional kami mengelola tugas administratif harian bisnis Anda — responsif, terlatih, dan memahami kebutuhan bisnis Indonesia.", en: "Our professional virtual assistant team manages your daily business administrative tasks — responsive, trained, and understanding of Indonesian business needs." },
        results: [
            { value: "+50%", label: { id: "Peningkatan Produktivitas", en: "Productivity Increase" } },
            { value: "20 jam", label: { id: "Dihemat per Minggu", en: "Saved per Week" } },
            { value: "24/7", label: { id: "Ketersediaan Tim", en: "Team Availability" } },
        ],
        features: [
            { icon: "📧", title: { id: "Manajemen Email", en: "Email Management" }, desc: { id: "Pengelolaan kotak masuk, balas email, dan komunikasi bisnis harian secara profesional.", en: "Professional inbox management, email replies, and daily business communication." } },
            { icon: "📅", title: { id: "Pengaturan Jadwal", en: "Schedule Management" }, desc: { id: "Manajemen jadwal meeting, appointment, dan reminder agar tidak ada yang terlewat.", en: "Meeting schedule, appointment, and reminder management so nothing is missed." } },
            { icon: "📱", title: { id: "Pengelolaan Media Sosial", en: "Social Media Management" }, desc: { id: "Penjadwalan konten, respon komentar/DM, dan monitoring performa akun bisnis.", en: "Content scheduling, comment/DM responses, and business account performance monitoring." } },
            { icon: "🔎", title: { id: "Riset & Data", en: "Research & Data" }, desc: { id: "Riset pasar, kompetitor, atau informasi apa pun untuk keputusan bisnis Anda.", en: "Market, competitor, or any information research to support your business decisions." } },
            { icon: "📑", title: { id: "Laporan & Presentasi", en: "Reports & Presentations" }, desc: { id: "Pembuatan laporan bisnis, proposal, dan materi presentasi yang profesional.", en: "Creating professional business reports, proposals, and presentation materials." } },
            { icon: "🤝", title: { id: "Koordinasi Vendor & Klien", en: "Vendor & Client Coordination" }, desc: { id: "Mengelola komunikasi dan koordinasi dengan vendor dan klien atas nama Anda.", en: "Managing communication and coordination with vendors and clients on your behalf." } },
        ],
        process: [
            { step: "01", title: { id: "Onboarding", en: "Onboarding" }, desc: { id: "Memahami bisnis, tools, dan preferensi komunikasi Anda secara mendalam.", en: "Deeply understanding your business, tools, and communication preferences." } },
            { step: "02", title: { id: "Pembuatan SOP", en: "SOP Creation" }, desc: { id: "Merancang Standard Operating Procedure untuk setiap jenis tugas administratif.", en: "Designing Standard Operating Procedures for every type of administrative task." } },
            { step: "03", title: { id: "Mulai Bekerja", en: "Start Working" }, desc: { id: "VA kami mulai menangani tugas-tugas Anda dengan briefing dan feedback berkala.", en: "Our VA starts handling your tasks with regular briefings and feedback." } },
            { step: "04", title: { id: "Evaluasi Berkala", en: "Regular Evaluation" }, desc: { id: "Review mingguan untuk memastikan kualitas dan menyesuaikan kebutuhan.", en: "Weekly reviews to ensure quality and adjust to evolving needs." } },
        ],
        faq: [
            { q: { id: "VA bisa pakai tools apa saja?", en: "What tools can the VA use?" }, a: { id: "VA kami terlatih Google Workspace, Canva, WhatsApp Business, dan tools lainnya.", en: "Our VAs are trained in Google Workspace, Canva, WhatsApp Business, and other tools." } },
            { q: { id: "Berapa jam kerja per hari?", en: "How many working hours per day?" }, a: { id: "Fleksibel — mulai dari 4 jam hingga full-time 8 jam per hari.", en: "Flexible — from 4 hours to a full-time 8 hours per day." } },
        ],
    },
    "digital-marketing": {
        icon: "📢", title: "Digital Marketing Campaigns",
        tag: null,
        tagline: { id: "Kampanye digital tepat sasaran untuk pertumbuhan penjualan yang nyata.", en: "Targeted digital campaigns for real sales growth." },
        desc: { id: "Kami merancang dan menjalankan kampanye digital komprehensif — iklan berbayar hingga konten organik — dioptimalkan dengan data dan AI untuk hasil maksimal.", en: "We design and run comprehensive digital campaigns — from paid ads to organic content — optimized with data and AI for maximum results." },
        results: [
            { value: "+150%", label: { id: "Kenaikan Penjualan", en: "Sales Growth" } },
            { value: "+300%", label: { id: "Peningkatan Engagement", en: "Engagement Growth" } },
            { value: "-40%", label: { id: "Cost Per Lead", en: "Cost Per Lead" } },
        ],
        features: [
            { icon: "🎯", title: { id: "Google Ads & Meta Ads", en: "Google Ads & Meta Ads" }, desc: { id: "Pengelolaan iklan berbayar di Google, Facebook, Instagram dengan optimasi AI.", en: "Paid ad management on Google, Facebook, and Instagram with AI optimization." } },
            { icon: "✍️", title: { id: "Konten Marketing", en: "Content Marketing" }, desc: { id: "Pembuatan konten berkualitas tinggi yang menarik dan mendorong konversi.", en: "Creating high-quality, engaging content that drives conversions." } },
            { icon: "📧", title: { id: "Email Marketing", en: "Email Marketing" }, desc: { id: "Kampanye email personal dan tersegmentasi untuk loyalitas dan repeat purchase.", en: "Personal and segmented email campaigns for loyalty and repeat purchases." } },
            { icon: "📱", title: { id: "Social Media Management", en: "Social Media Management" }, desc: { id: "Strategi dan pengelolaan akun media sosial secara konsisten dan engaging.", en: "Consistent and engaging social media account strategy and management." } },
            { icon: "📊", title: { id: "Analitik & Pelaporan", en: "Analytics & Reporting" }, desc: { id: "Pemantauan performa real-time dengan laporan komprehensif yang mudah dipahami.", en: "Real-time performance monitoring with comprehensive, easy-to-understand reports." } },
            { icon: "🔄", title: { id: "Retargeting", en: "Retargeting" }, desc: { id: "Menjangkau kembali calon pelanggan yang sudah menunjukkan minat pada produk Anda.", en: "Re-engaging potential customers who have already shown interest in your product." } },
        ],
        process: [
            { step: "01", title: { id: "Riset Audiens", en: "Audience Research" }, desc: { id: "Memahami profil, perilaku, dan pain point audiens target secara mendalam.", en: "Deeply understanding the profile, behavior, and pain points of the target audience." } },
            { step: "02", title: { id: "Strategi & Perencanaan", en: "Strategy & Planning" }, desc: { id: "Merancang strategi kampanye dengan channel, konten, dan anggaran optimal.", en: "Designing campaign strategy with optimal channels, content, and budget." } },
            { step: "03", title: { id: "Eksekusi Kampanye", en: "Campaign Execution" }, desc: { id: "Menjalankan kampanye dengan monitoring ketat dan optimasi berkelanjutan.", en: "Running campaigns with close monitoring and continuous optimization." } },
            { step: "04", title: { id: "Analisis & Scaling", en: "Analysis & Scaling" }, desc: { id: "Menganalisis hasil dan scaling kampanye yang terbukti efektif.", en: "Analyzing results and scaling proven-effective campaigns." } },
        ],
        faq: [
            { q: { id: "Berapa anggaran minimum iklan?", en: "What is the minimum ad budget?" }, a: { id: "Bisa mulai Rp 2-3 juta per bulan dan kami optimalkan sebaik mungkin.", en: "You can start from Rp 2–3 million per month and we optimize it as best as possible." } },
            { q: { id: "Platform mana yang paling efektif?", en: "Which platform is most effective?" }, a: { id: "Tergantung audiens Anda. Kami rekomendasikan platform terbaik setelah analisis.", en: "It depends on your audience. We recommend the best platform after analysis." } },
        ],
    },
    "custom-ai": {
        icon: "⚙️", title: "Custom AI Solutions",
        tag: { id: "Baru", en: "New" },
        tagline: { id: "Solusi kecerdasan buatan yang dirancang khusus untuk bisnis Anda.", en: "Artificial intelligence solutions custom-built for your business." },
        desc: { id: "Kami mengembangkan solusi AI yang benar-benar disesuaikan — chatbot customer service humanized, sistem rekomendasi produk, hingga otomasi proses bisnis kompleks.", en: "We develop truly customized AI solutions — humanized customer service chatbots, product recommendation systems, and complex business process automation." },
        results: [
            { value: "-60%", label: { id: "Response Time", en: "Response Time" } },
            { value: "+40%", label: { id: "Efisiensi Operasional", en: "Operational Efficiency" } },
            { value: "24/7", label: { id: "Layanan Tanpa Henti", en: "Non-stop Service" } },
        ],
        features: [
            { icon: "💬", title: { id: "AI Chatbot Customer Service", en: "AI Customer Service Chatbot" }, desc: { id: "Chatbot pintar yang melayani pelanggan 24/7 dengan percakapan natural dan empatik.", en: "A smart chatbot serving customers 24/7 with natural and empathetic conversation." } },
            { icon: "🛒", title: { id: "Sistem Rekomendasi Produk", en: "Product Recommendation System" }, desc: { id: "AI yang membantu pelanggan menemukan produk paling relevan untuk meningkatkan nilai transaksi.", en: "AI that helps customers find the most relevant products to increase transaction value." } },
            { icon: "📈", title: { id: "Analitik Prediktif", en: "Predictive Analytics" }, desc: { id: "Prediksi tren penjualan dan perilaku pelanggan berbasis data historis bisnis Anda.", en: "Sales trend and customer behavior predictions based on your business's historical data." } },
            { icon: "⚡", title: { id: "Otomasi Proses Bisnis", en: "Business Process Automation" }, desc: { id: "Mengotomasi tugas repetitif untuk mengurangi human error dan meningkatkan efisiensi.", en: "Automating repetitive tasks to reduce human error and boost efficiency." } },
            { icon: "🔗", title: { id: "Integrasi Sistem", en: "System Integration" }, desc: { id: "Mengintegrasikan solusi AI dengan CRM, e-commerce, atau tools yang sudah Anda gunakan.", en: "Integrating AI solutions with your existing CRM, e-commerce, or other tools." } },
            { icon: "🛡️", title: { id: "AI yang Aman & Terpercaya", en: "Safe & Trustworthy AI" }, desc: { id: "Solusi AI yang dibangun dengan memperhatikan keamanan data dan privasi pelanggan.", en: "AI solutions built with attention to data security and customer privacy." } },
        ],
        process: [
            { step: "01", title: { id: "Identifikasi Kebutuhan", en: "Needs Identification" }, desc: { id: "Memahami proses bisnis dan area yang paling berdampak jika diotomasi.", en: "Understanding business processes and the areas with the highest automation impact." } },
            { step: "02", title: { id: "Desain Solusi", en: "Solution Design" }, desc: { id: "Merancang arsitektur solusi AI sesuai kebutuhan dan infrastruktur yang ada.", en: "Designing AI solution architecture aligned with your needs and existing infrastructure." } },
            { step: "03", title: { id: "Pengembangan & Testing", en: "Development & Testing" }, desc: { id: "Membangun solusi dengan pendekatan iteratif dan testing ketat sebelum diluncurkan.", en: "Building the solution with an iterative approach and rigorous testing before launch." } },
            { step: "04", title: { id: "Deployment & Support", en: "Deployment & Support" }, desc: { id: "Meluncurkan solusi dan memberikan dukungan teknis berkelanjutan.", en: "Launching the solution and providing ongoing technical support." } },
        ],
        faq: [
            { q: { id: "Perlu keahlian teknis untuk menggunakannya?", en: "Do I need technical expertise to use it?" }, a: { id: "Tidak. Kami merancang solusi yang mudah digunakan tanpa keahlian teknis khusus.", en: "No. We design solutions that are easy to use without any special technical expertise." } },
            { q: { id: "Berapa lama pengembangannya?", en: "How long does development take?" }, a: { id: "Chatbot sederhana 2-4 minggu, solusi kompleks bisa 2-3 bulan.", en: "A simple chatbot takes 2–4 weeks; complex solutions can take 2–3 months." } },
        ],
    },
    "email-marketing": {
        icon: "✉️", title: "Email Marketing Strategy",
        tag: null,
        tagline: { id: "Bangun hubungan kuat dengan pelanggan melalui email yang personal.", en: "Build strong customer relationships through personal emails." },
        desc: { id: "Email marketing yang efektif bukan sekadar kirim banyak email. Kami merancang strategi yang personal, tersegmentasi, dan terautomasi untuk loyalitas dan repeat purchase.", en: "Effective email marketing is more than just sending lots of emails. We design personal, segmented, and automated strategies for loyalty and repeat purchases." },
        results: [
            { value: "+40%", label: { id: "Open Rate", en: "Open Rate" } },
            { value: "+30%", label: { id: "Kenaikan Konversi", en: "Conversion Growth" } },
            { value: "4200%", label: { id: "ROI Email Marketing", en: "Email Marketing ROI" } },
        ],
        features: [
            { icon: "👥", title: { id: "Segmentasi Audiens Cerdas", en: "Smart Audience Segmentation" }, desc: { id: "Mengelompokkan pelanggan berdasarkan perilaku dan preferensi mereka.", en: "Grouping customers based on their behavior and preferences." } },
            { icon: "🎨", title: { id: "Desain Email Responsif", en: "Responsive Email Design" }, desc: { id: "Template email profesional, menarik, dan optimal di semua perangkat.", en: "Professional, attractive email templates optimized for all devices." } },
            { icon: "⚡", title: { id: "Automation & Drip Campaign", en: "Automation & Drip Campaign" }, desc: { id: "Alur email otomatis yang mengirim pesan tepat di waktu yang tepat.", en: "Automated email flows that send the right message at the right time." } },
            { icon: "🧪", title: { id: "A/B Testing", en: "A/B Testing" }, desc: { id: "Pengujian berbagai elemen email untuk terus meningkatkan performa.", en: "Testing various email elements to continuously improve performance." } },
            { icon: "📊", title: { id: "Laporan Performa Mendalam", en: "In-depth Performance Reports" }, desc: { id: "Analisis lengkap open rate, click rate, konversi setiap kampanye.", en: "Complete analysis of open rate, click rate, and conversions for every campaign." } },
            { icon: "🔄", title: { id: "Re-engagement Campaign", en: "Re-engagement Campaign" }, desc: { id: "Strategi khusus untuk mengaktifkan kembali pelanggan yang sudah lama tidak berinteraksi.", en: "Special strategy to re-activate subscribers who have been inactive for a long time." } },
        ],
        process: [
            { step: "01", title: { id: "Audit List Email", en: "Email List Audit" }, desc: { id: "Mengevaluasi database email dan membersihkan kontak tidak aktif.", en: "Evaluating the email database and cleaning up inactive contacts." } },
            { step: "02", title: { id: "Strategi & Segmentasi", en: "Strategy & Segmentation" }, desc: { id: "Merancang strategi konten dan segmentasi audiens yang tepat.", en: "Designing the right content strategy and audience segmentation." } },
            { step: "03", title: { id: "Pembuatan Konten", en: "Content Creation" }, desc: { id: "Membuat konten email yang menarik, personal, dan mendorong tindakan.", en: "Creating engaging, personal email content that drives action." } },
            { step: "04", title: { id: "Optimasi Berkelanjutan", en: "Continuous Optimization" }, desc: { id: "Monitoring, A/B testing, dan optimasi untuk hasil yang semakin baik.", en: "Monitoring, A/B testing, and optimization for ever-improving results." } },
        ],
        faq: [
            { q: { id: "Butuh database besar?", en: "Do I need a large database?" }, a: { id: "Tidak — kualitas lebih penting dari kuantitas. Kami bantu Anda membangun list berkualitas.", en: "No — quality matters more than quantity. We'll help you build a quality list." } },
            { q: { id: "Platform apa yang digunakan?", en: "What platform is used?" }, a: { id: "Kami bisa bekerja dengan Mailchimp, Klaviyo, atau platform pilihan Anda.", en: "We can work with Mailchimp, Klaviyo, or your platform of choice." } },
        ],
    },
};

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const service = servicesData[slug];

    if (!service) return notFound();

    // Helper: resolve bilingual object { id, en } → string
    const L = (obj) =>
        typeof obj === "object" && obj !== null && (obj.id !== undefined || obj.en !== undefined)
            ? (obj[lang] ?? obj.id)
            : obj;

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
                        <Link href="/services" className="hover:text-white transition-colors">{t("nav_services")}</Link>
                        <span>›</span>
                        <span className="text-white/70">{service.title}</span>
                    </div>
                    {service.tag && (
                        <span className="inline-block bg-accent text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 animate-fade-in delay-100">
                            {L(service.tag)}
                        </span>
                    )}
                    <div className="text-6xl mb-5 animate-scale-in delay-100">{service.icon}</div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4 max-w-2xl animate-fade-up delay-200">
                        {service.title}
                    </h1>
                    <p className="text-primary text-lg font-semibold mb-4 animate-fade-up delay-300">{L(service.tagline)}</p>
                    <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8 animate-fade-up delay-400">{L(service.desc)}</p>
                    <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-500">
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-7 py-3.5 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            {t("services_discuss_btn")}
                        </a>
                        <Link href="/services"
                            className="inline-flex items-center justify-center border border-white/25 text-white/80 hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all">
                            {t("back_services")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="bg-accent py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        {service.results.map((result, i) => (
                            <div key={i} className={`reveal delay-${i * 200 + 100}`}>
                                <p className="text-dark font-extrabold text-4xl sm:text-5xl tracking-tight">{result.value}</p>
                                <p className="text-dark/60 text-sm font-medium mt-1">{L(result.label)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t("services_what_you_get")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                            {lang === "id" ? "Fitur & Manfaat Lengkap" : "Full Features & Benefits"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, i) => (
                            <div key={i}
                                className={`p-6 rounded-2xl border card-hover reveal delay-${(i % 3) * 100 + 100} ${i === 0 ? "bg-primary border-primary" : "bg-cream border-[#E2E8F0] hover:border-primary/30"}`}>
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h3 className={`font-bold text-lg mb-2 ${i === 0 ? "text-white" : "text-dark"}`}>{L(feature.title)}</h3>
                                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-dark/60"}`}>{L(feature.desc)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            {lang === "id" ? "Cara Kerja" : "How We Work"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
                            {lang === "id" ? "Proses Kami Bersama Anda" : "Our Process With You"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((p, i) => (
                            <div key={p.step} className={`text-center p-6 reveal delay-${i * 150}`}>
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 animate-pulse-glow">
                                    {p.step}
                                </div>
                                <h3 className="font-bold text-dark text-lg mb-2">{L(p.title)}</h3>
                                <p className="text-dark/55 text-sm leading-relaxed">{L(p.desc)}</p>
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
                        <h2 className="text-3xl font-extrabold text-dark tracking-tight">
                            {lang === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {service.faq.map((item, i) => (
                            <div key={i} className={`p-6 rounded-2xl bg-cream border border-[#E2E8F0] hover:border-primary/30 transition-colors reveal delay-${i * 100}`}>
                                <h3 className="font-bold text-dark mb-2 flex items-start gap-2">
                                    <span className="text-primary font-extrabold">Q.</span> {L(item.q)}
                                </h3>
                                <p className="text-dark/60 text-sm leading-relaxed pl-5">{L(item.a)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        {lang === "id" ? "Tertarik dengan Layanan Ini?" : "Interested in This Service?"}
                    </h2>
                    <p className="text-white/60 mb-8">
                        {lang === "id"
                            ? "Hubungi kami sekarang untuk konsultasi gratis — tim kami siap membantu!"
                            : "Contact us now for a free consultation — our team is ready to help!"}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={waMsg} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-dark px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all hover:-translate-y-0.5 btn-press">
                            {t("services_discuss_btn")}
                        </a>
                        <Link href="/services"
                            className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
                            {lang === "id" ? "Lihat Layanan Lainnya" : "View Other Services"}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
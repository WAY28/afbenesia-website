"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
    id: {
        // ── Navbar ──
        nav_home: "Home", nav_about: "Tentang Kami", nav_services: "Layanan",
        nav_training: "Pelatihan", nav_portfolio: "Portfolio", nav_blog: "Blog",
        nav_contact: "Kontak", nav_cta: "💬 Konsultasi Gratis",

        // ── Footer ──
        footer_tagline: "Humanized AI for Everlasting Business Growth. Mitra terpercaya Anda untuk transformasi digital yang berkelanjutan.",
        footer_nav: "Navigasi", footer_services_col: "Layanan", footer_chat: "Chat WhatsApp",
        footer_copy: "© 2026 PT. Afbe Cahaya Kreatif. All Rights Reserved.",
        footer_sub: "Humanized AI · Indonesia",

        // ── Common ──
        btn_wa: "💬 Konsultasi via WhatsApp", btn_contact_now: "Hubungi Kami Sekarang",
        btn_all_services: "Lihat Semua Layanan", btn_view_services: "Lihat Paket Layanan",
        btn_learn_more: "Pelajari lebih lanjut →", read_more: "Baca →",
        back_blog: "← Kembali ke Semua Artikel", back_services: "← Lihat Semua Layanan",
        back_portfolio: "← Kembali ke Portfolio", back_training: "← Lihat Semua Program",
        register_now: "Daftar Sekarang", view_detail: "Lihat Detail →",
        see_detail: "Lihat Detail Program", discuss_need: "💬 Diskusikan Kebutuhan",
        ask_info: "Tanya Info", other_projects: "Proyek Lainnya",
        view_project_detail: "Lihat Detail →",

        // ── HOME ──
        hero_badge: "Humanized AI for Business Growth",
        hero_title: "Transformasi Bisnis", hero_title2: "Anda Bersama AI",
        hero_desc: "Kami menggabungkan kecerdasan buatan dengan sentuhan manusiawi untuk pertumbuhan bisnis yang berkelanjutan dan terukur di Indonesia.",
        hero_cta1: "💬 Konsultasi Gratis Sekarang", hero_cta2: "Lihat Layanan Kami →",
        stat_clients: "Klien Puas", stat_satisfaction: "Tingkat Kepuasan",
        stat_experience: "Tahun Pengalaman", stat_growth: "Rata-rata Kenaikan Omset",
        partners_badge: "Dipercaya Oleh",
        partners_title: "Klien & Mitra yang Telah Bekerja Sama",
        partners_desc: "Kami bangga bermitra dengan berbagai instansi dan perusahaan terkemuka di Indonesia.",
        award1_title: "Top 6 KemenkopUKM", award1_desc: "Program Pendampingan Usaha Bidang Teknologi",
        award2_title: "100+ Klien se-Indonesia", award2_desc: "Dari Jombang hingga seluruh nusantara",
        services_badge: "Layanan Kami",
        services_title: "Solusi Tepat untuk", services_title2: "Pertumbuhan Bisnis",
        services_desc: "Layanan komprehensif yang dirancang khusus untuk kebutuhan bisnis Anda di era digital.",
        why_badge: "Mengapa Afbenesia?", why_title: "AI yang Terasa", why_title2: "Seperti Manusia",
        why_desc: "Banyak layanan AI terasa dingin dan impersonal. Kami berbeda — setiap strategi diracik dengan pemahaman mendalam tentang bisnis dan budaya lokal Indonesia.",
        why_know_more: "Kenali Kami Lebih Jauh →",
        why_points: [
            "Strategi AI yang disesuaikan, bukan template generic",
            "Tim yang berpengalaman & memahami pasar Indonesia",
            "Pendampingan penuh dari awal hingga hasil terukur",
            "Laporan transparan & komunikasi aktif setiap saat",
            "Penghargaan Top 6 KemenkopUKM bidang Teknologi",
            "Rekam jejak terbukti: 100+ klien sukses se-Indonesia",
        ],
        testi_badge: "Testimoni Klien", testi_title: "Apa Kata Klien Kami?",
        cta_badge: "Mulai Sekarang", cta_title: "Siap Mengubah", cta_title2: "Bisnis Anda?",
        cta_desc: "Dapatkan konsultasi gratis dan temukan bagaimana Afbenesia dapat membantu pertumbuhan bisnis Anda secara nyata.",
        cta_btn1: "💬 Hubungi Kami via WhatsApp", cta_btn2: "Lihat Paket Layanan",

        // ── ABOUT ──
        about_badge: "Tentang Afbenesia",
        about_title: "Kenali Tim di Balik", about_title2: "Kesuksesan Anda",
        about_desc: "Misi kami adalah membantu bisnis Anda bertumbuh secara berkelanjutan melalui strategi digital cerdas, bimbingan mendalam, dan teknologi AI yang terasa manusiawi.",
        about_direction: "Arah Kami", about_vision_mission: "Visi & Misi Kami",
        about_vision_label: "Visi",
        about_vision_text: "Menjadi mitra terpercaya bagi bisnis di seluruh Indonesia dalam mencapai kesuksesan melalui penerapan teknologi terbaru dan bimbingan yang holistik.",
        about_mission_label: "Misi",
        about_missions: [
            "Memberikan solusi strategi digital dan coaching bisnis yang inovatif.",
            "Memungkinkan setiap bisnis untuk berkembang dengan cara yang paling efektif dan berkelanjutan.",
            "Menghadirkan teknologi AI yang terasa humanized — personal dan relevan.",
        ],
        about_team_photo: "Tim Afbenesia",
        about_team_photo_sub: "Berdedikasi untuk pertumbuhan bisnis Indonesia",
        about_values_badge: "Nilai-Nilai Kami", about_values_title: "Fondasi Kerja Kami",
        about_values: [
            { title: "Inovasi", desc: "Kami selalu mencari cara baru dan lebih baik untuk melayani klien, memanfaatkan teknologi terdepan seperti AI." },
            { title: "Integritas", desc: "Kejujuran dan transparansi dalam setiap interaksi dengan klien dan mitra adalah komitmen kami." },
            { title: "Keberlanjutan", desc: "Kami fokus pada solusi jangka panjang yang membawa manfaat berkelanjutan, bukan sekadar hasil instan." },
            { title: "Humanized", desc: "Teknologi harus terasa manusiawi. Kami memastikan setiap solusi AI tetap memiliki sentuhan personal." },
        ],
        about_clients_badge: "Klien Kami", about_clients_title: "Yang Telah Bekerja Sama",
        about_clients_desc: "Kami telah dipercaya oleh berbagai instansi pemerintah, korporasi, UMKM, dan startup di seluruh Indonesia.",
        about_clients_more: "dan masih banyak lagi klien di seluruh Indonesia",
        about_timeline_badge: "Perjalanan Kami", about_timeline_title: "Jejak Langkah Afbenesia",
        about_timeline: [
            { year: "2018", desc: "Afbenesia didirikan dengan misi untuk membantu bisnis kecil menengah di Indonesia berkembang melalui teknologi digital." },
            { year: "2019", desc: "Peluncuran program coaching pertama yang berfokus pada strategi digital untuk UMKM." },
            { year: "2020", desc: "Mengembangkan layanan konsultasi dan pendampingan bisnis yang holistik dan berkelanjutan." },
            { year: "2021", desc: "Meraih penghargaan Top 6 program Entrepreneur Development oleh KemenkopUKM bidang Jasa & Teknologi." },
            { year: "2023", desc: "Meluncurkan layanan Humanized AI — menggabungkan kecerdasan buatan dengan sentuhan manusiawi." },
            { year: "2024", desc: "Ekspansi layanan ke seluruh Indonesia dengan 100+ klien aktif dan tingkat kepuasan 98%." },
        ],
        about_achieve_badge: "Pencapaian", about_achieve_title: "Kebanggaan Kami",
        about_achievements: [
            { icon: "🏆", title: "Top 6 KemenkopUKM", desc: "Masuk dalam 6 besar program Pendampingan Usaha bidang Jasa dan Teknologi." },
            { icon: "👥", title: "100+ Klien Sukses", desc: "Membantu lebih dari 100 bisnis mencapai tujuan mereka di seluruh Indonesia." },
            { icon: "📈", title: "Kenaikan Omset 200%", desc: "Rata-rata klien melaporkan kenaikan omset signifikan setelah menggunakan layanan kami." },
            { icon: "⭐", title: "98% Tingkat Kepuasan", desc: "Hampir seluruh klien kami menyatakan puas dan merekomendasikan Afbenesia." },
        ],
        about_team_badge: "Tim Kami", about_team_title: "Tim Profesional Kami",
        about_team_sub: "Para ahli berdedikasi yang siap membantu pertumbuhan bisnis Anda.",
        about_team_members: [
            { name: "Johan Cahyadi", role: "Founder & CEO", initials: "JC", desc: "Visioner di balik konsep Humanized AI untuk bisnis Indonesia." },
            { name: "Lidya Meliana", role: "Chief Marketing Officer", initials: "LM", desc: "Ahli strategi pemasaran digital dengan pengalaman 5+ tahun." },
            { name: "Melisa Kristi", role: "Chief Financial Officer", initials: "MK", desc: "Pakar keuangan yang memastikan pertumbuhan bisnis yang sehat." },
            { name: "Akmal Andriadi", role: "Head of Digital Strategy", initials: "AA", desc: "Spesialis strategi digital dan implementasi solusi AI." },
        ],
        about_cta_title: "Mulai Transformasi Bisnis Anda?",
        about_cta_desc: "Hubungi kami sekarang untuk konsultasi gratis — langsung via WhatsApp!",

        // ── SERVICES ──
        services_page_badge: "Layanan Kami",
        services_page_title: "Solusi Digital", services_page_title2: "Inovatif & Terukur",
        services_page_desc: "Layanan terintegrasi yang dirancang untuk pertumbuhan bisnis Anda yang berkelanjutan di era digital.",
        services_what_you_get: "Yang Anda Dapatkan",
        services_detail_btn: "Detail Layanan →",
        services_discuss_btn: "💬 Diskusikan Kebutuhan",
        services_process_badge: "Cara Kerja Kami",
        services_process_title: "Proses yang Sederhana & Efektif",
        services_process_steps: [
            { step: "01", title: "Konsultasi Gratis", desc: "Kami memahami kebutuhan dan tujuan bisnis Anda melalui sesi konsultasi awal." },
            { step: "02", title: "Analisis & Strategi", desc: "Tim kami menganalisis situasi bisnis dan merancang strategi yang tepat sasaran." },
            { step: "03", title: "Implementasi", desc: "Eksekusi strategi dengan monitoring ketat dan penyesuaian berkala." },
            { step: "04", title: "Evaluasi & Optimasi", desc: "Pengukuran hasil, pelaporan, dan optimasi berkelanjutan untuk hasil terbaik." },
        ],
        services_cta_title: "Siap Mengembangkan Bisnis Anda?",
        services_cta_desc: "Hubungi kami hari ini untuk konsultasi gratis — langsung via WhatsApp!",
        services_list: [
            { id: "ai-digital-strategy", icon: "🤖", title: "AI Digital Strategy Consulting", desc: "Strategi digital berbasis AI yang disesuaikan dengan kebutuhan unik bisnis Anda untuk hasil yang terukur dan berkelanjutan.", tag: "Terpopuler", features: ["Analisis pasar & kompetitor berbasis data", "Strategi SEO & SEM yang teroptimasi AI", "Perencanaan kampanye iklan digital", "Dashboard monitoring & reporting real-time", "Optimasi konversi berbasis AI"] },
            { id: "business-coaching", icon: "🎯", title: "Business Coaching & Mentorship", desc: "Program coaching intensif untuk mengidentifikasi peluang dan mengatasi tantangan bisnis Anda bersama mentor berpengalaman.", tag: null, features: ["Sesi coaching 1-on-1 dengan mentor berpengalaman", "Analisis kinerja bisnis berkala", "Perumusan strategi jangka pendek & panjang", "Identifikasi peluang & mitigasi risiko", "Mindset & leadership development"] },
            { id: "virtual-assistant", icon: "🖥️", title: "Virtual Assistant Services", desc: "Dukungan administrasi profesional agar Anda fokus penuh pada hal yang paling penting untuk pertumbuhan bisnis.", tag: null, features: ["Manajemen email & komunikasi bisnis", "Pengaturan jadwal & kalender", "Pengelolaan media sosial", "Riset & pengumpulan data", "Pembuatan laporan & presentasi"] },
            { id: "digital-marketing", icon: "📢", title: "Digital Marketing Campaigns", desc: "Kampanye pemasaran digital efektif untuk meningkatkan visibilitas, engagement, dan konversi bisnis Anda.", tag: null, features: ["Google Ads & Meta Ads management", "Konten marketing & copywriting", "Email marketing campaigns", "Social media management", "Analitik & optimasi kampanye"] },
            { id: "custom-ai", icon: "⚙️", title: "Custom AI Solutions", desc: "Pengembangan solusi AI kustom seperti chatbot, sistem rekomendasi produk, dan analitik prediktif.", tag: "Baru", features: ["Chatbot AI untuk customer service", "Sistem rekomendasi produk", "Analitik prediktif & forecasting", "Otomasi proses bisnis berbasis AI", "Integrasi dengan sistem existing"] },
            { id: "email-marketing", icon: "✉️", title: "Email Marketing Strategy", desc: "Strategi kampanye email yang personal dan tertarget untuk membangun loyalitas pelanggan dan meningkatkan penjualan.", tag: null, features: ["Segmentasi audiens yang tepat", "Desain email yang menarik & responsif", "Automation & drip campaign", "A/B testing & optimasi", "Laporan performa komprehensif"] },
        ],

        // ── PORTFOLIO ──
        portfolio_badge: "Portofolio Kami",
        portfolio_title: "Hasil yang", portfolio_title2: "Berbicara Sendiri",
        portfolio_desc: "Keberhasilan klien kami adalah keberhasilan kami. Lihat bagaimana kami membantu berbagai bisnis mencapai pertumbuhan nyata.",
        portfolio_featured: "Proyek Terpilih", portfolio_featured_title: "Karya Terbaik Kami",
        portfolio_cta_title: "Punya Proyek Serupa?",
        portfolio_cta_desc: "Kami ingin mendengar tentang tantangan bisnis Anda. Hubungi kami untuk diskusi tanpa komitmen!",
        portfolio_about: "Tentang Proyek",
        portfolio_challenge: "⚡ Tantangan",
        portfolio_solution: "💡 Solusi Kami",
        portfolio_client: "Klien", portfolio_duration: "Durasi", portfolio_year: "Tahun", portfolio_service: "Layanan",
        portfolio_results_badge: "Hasil Nyata", portfolio_results_title: "Dampak yang Kami Ciptakan",
        portfolio_process_badge: "Proses", portfolio_process_title: "Bagaimana Kami Melakukannya",
        portfolio_similar: "Ingin Hasil Serupa?",
        portfolio_similar_desc: "Hubungi kami dan ceritakan tentang bisnis Anda!",

        // ── BLOG ──
        blog_badge: "Blog & Insights", blog_title: "Wawasan &", blog_title2: "Info Terbaru",
        blog_desc: "Tips, strategi, dan insights seputar bisnis digital, AI, dan pertumbuhan usaha di Indonesia.",
        blog_featured: "Artikel Terbaru", blog_newsletter_title: "Dapatkan Insights Terbaru",
        blog_newsletter_desc: "Atau langsung konsultasikan kebutuhan bisnis Anda dengan tim kami!",
        blog_detail_ready: "Siap menerapkan strategi ini?",
        blog_detail_cta_desc: "Konsultasikan dengan tim Afbenesia — gratis, tanpa komitmen!",
        blog_about_us: "Tentang Afbenesia",
        blog_about_desc: "Mitra pertumbuhan bisnis digital Anda. Dengan pengalaman 3+ tahun dan 100+ klien, kami siap membantu bisnis Anda berkembang.",
        blog_related: "Artikel Terkait",
        blog_categories: ["Semua", "AI & Teknologi", "Strategi Digital", "Business Coaching", "Digital Marketing", "Virtual Assistant"],
        blog_min_read: "menit baca",

        // ── TRAINING ──
        training_badge: "Program Profesional",
        training_title: "Pilih Jalur Suksesmu",
        training_desc: "Program 1 Tahun Jalur Cepat Kerja & Wirausaha, didukung sertifikasi profesional dan teknologi AI.",
        training_programs_badge: "Program Kami",
        training_programs_title: "Program Unggulan Berbasis Kompetensi",
        training_programs_desc: "Setiap program dirancang untuk melahirkan tenaga ahli siap kerja dan wirausaha di era digital.",
        training_stats: [
            { val: "3", label: "Program Unggulan" },
            { val: "160+", label: "Jam Pelatihan" },
            { val: "BNSP", label: "Sertifikasi Resmi" },
            { val: "100%", label: "Berbasis Praktik" },
        ],
        training_duration: "Durasi", training_price: "Harga",
        training_mentor_career: "Karir di Afbenesia",
        training_mentor_title: "Bergabung Sebagai Mentor",
        training_mentor_desc: "Jadilah bagian dari perubahan. Bimbing talenta masa depan Indonesia dengan keahlian praktis Anda.",
        training_cta_title: "Siap #LevelUpKarir?",
        training_cta_desc: "Daftar sekarang dan amankan slotmu di gelombang pendaftaran berikutnya.",
        training_ask: "Tanya Info Program",
        training_register_link: "https://linktr.ee/lpk.afbenesia",

        // ── TRAINING DETAIL ──
        detail_overview: "Deskripsi Program", detail_benefits: "Manfaat & Yang Akan Dipelajari",
        detail_curriculum: "Kurikulum", detail_pricing: "Harga & Paket",
        detail_faq_title: "Pertanyaan Umum",
        detail_register: "Daftar Program Ini",
        detail_duration_label: "Durasi Program", detail_level_label: "Level",
        detail_cert_label: "Sertifikasi", detail_method_label: "Metode",
        detail_schedule_label: "Jadwal", detail_online: "Online & Offline (Hybrid)",
        detail_interested: "Tertarik program ini?",
        detail_most_popular: "Paling Populer",
        detail_ask_price: "Tanya Harga →",
        detail_slot: "Amankan slot Anda sekarang sebelum penuh!",
        detail_ask_first: "Tanya Info Dulu",
        detail_back: "← Lihat Semua Program",
        detail_benefits_badge: "Manfaat",
        detail_syllabus_badge: "Silabus",
        detail_investment_badge: "Investasi",
        detail_ask_info: "Tanya Info",
        detail_ask_info_btn: "Tanya Info Program",
        detail_interested_sidebar: "Tertarik program ini?",

        // ── CONTACT ──
        contact_badge: "Hubungi Kami",
        contact_title: "Kami Siap", contact_title2: "Membantu Anda",
        contact_desc: "Ada pertanyaan atau ingin memulai proyek? Hubungi kami via WhatsApp untuk respons tercepat!",
        contact_wa_now: "Chat WhatsApp Sekarang",
        contact_info_title: "Informasi Kontak",
        contact_info_desc: "Hubungi kami langsung melalui channel berikut.",
        contact_form_title: "Kirim Pesan Langsung",
        contact_form_desc: "Kami akan merespon dalam 1×24 jam kerja.",
        contact_name: "Nama Anda", contact_email: "Email Anda",
        contact_subject: "Subjek", contact_message: "Pesan",
        contact_name_ph: "Nama lengkap", contact_email_ph: "email@anda.com",
        contact_subject_ph: "Subjek pesan",
        contact_message_ph: "Ceritakan kebutuhan bisnis Anda...",
        contact_send: "Kirim Pesan →", contact_sending: "Mengirim...",
        contact_sent_title: "Pesan Terkirim!",
        contact_sent_desc: "Terima kasih! Tim kami akan segera membalas pesan Anda.",
        contact_wa_direct: "Chat WhatsApp Langsung",
        contact_faq_badge: "FAQ", contact_faq_title: "Pertanyaan yang Sering Diajukan",
        contact_maps_title: "Lokasi Kami", contact_maps_open: "Buka di Google Maps →",
        contact_faster: "Respons lebih cepat via",
        contact_address_label: "Alamat", contact_email_label: "Email",
        contact_phone_label: "Telepon", contact_wa_label: "WhatsApp",
        contact_wa_value: "Chat langsung sekarang",
        contact_faqs: [
            { q: "Berapa lama proses konsultasi awal?", a: "Konsultasi awal berlangsung sekitar 30–60 menit. Gratis, tanpa komitmen, dan bisa dilakukan via WhatsApp atau video call." },
            { q: "Apakah layanan Afbenesia cocok untuk UMKM?", a: "Sangat cocok! Kami spesialis membantu UMKM Indonesia bertumbuh melalui strategi digital yang terjangkau namun efektif." },
            { q: "Berapa lama untuk melihat hasil nyata?", a: "Untuk digital marketing, biasanya 1–3 bulan. Coaching dan strategi bisa terlihat dalam 3–6 bulan." },
            { q: "Apakah ada kontrak jangka panjang?", a: "Kami fleksibel — ada paket bulanan maupun project-based. Hasil yang baik akan membuat klien kembali dengan sendirinya." },
        ],
    },

    en: {
        // ── Navbar ──
        nav_home: "Home", nav_about: "About Us", nav_services: "Services",
        nav_training: "Training", nav_portfolio: "Portfolio", nav_blog: "Blog",
        nav_contact: "Contact", nav_cta: "💬 Free Consultation",

        // ── Footer ──
        footer_tagline: "Humanized AI for Everlasting Business Growth. Your trusted partner for sustainable digital transformation.",
        footer_nav: "Navigation", footer_services_col: "Services", footer_chat: "Chat on WhatsApp",
        footer_copy: "© 2026 PT. Afbe Cahaya Kreatif. All Rights Reserved.",
        footer_sub: "Humanized AI · Indonesia",

        // ── Common ──
        btn_wa: "💬 Consult via WhatsApp", btn_contact_now: "Contact Us Now",
        btn_all_services: "View All Services", btn_view_services: "View Service Packages",
        btn_learn_more: "Learn more →", read_more: "Read →",
        back_blog: "← Back to All Articles", back_services: "← View All Services",
        back_portfolio: "← Back to Portfolio", back_training: "← View All Programs",
        register_now: "Register Now", view_detail: "View Detail →",
        see_detail: "See Program Detail", discuss_need: "💬 Discuss Your Needs",
        ask_info: "Ask Info", other_projects: "Other Projects",
        view_project_detail: "View Detail →",

        // ── HOME ──
        hero_badge: "Humanized AI for Business Growth",
        hero_title: "Transform Your", hero_title2: "Business With AI",
        hero_desc: "We combine artificial intelligence with a human touch for sustainable and measurable business growth in Indonesia.",
        hero_cta1: "💬 Start Free Consultation", hero_cta2: "View Our Services →",
        stat_clients: "Happy Clients", stat_satisfaction: "Satisfaction Rate",
        stat_experience: "Years Experience", stat_growth: "Avg. Revenue Growth",
        partners_badge: "Trusted By",
        partners_title: "Clients & Partners Who Have Worked With Us",
        partners_desc: "We are proud to partner with leading institutions and companies across Indonesia.",
        award1_title: "Top 6 KemenkopUKM", award1_desc: "Business Development Program in Technology",
        award2_title: "100+ Clients Nationwide", award2_desc: "From Jombang to all of Indonesia",
        services_badge: "Our Services",
        services_title: "The Right Solution for", services_title2: "Business Growth",
        services_desc: "Comprehensive services designed specifically for your business needs in the digital era.",
        why_badge: "Why Afbenesia?", why_title: "AI That Feels", why_title2: "Truly Human",
        why_desc: "Many AI services feel cold and impersonal. We're different — every strategy is crafted with a deep understanding of local Indonesian business culture.",
        why_know_more: "Get to Know Us →",
        why_points: [
            "Customized AI strategy, not a generic template",
            "Experienced team that understands the Indonesian market",
            "Full accompaniment from start to measurable results",
            "Transparent reporting & active communication at all times",
            "Top 6 KemenkopUKM Award in Technology",
            "Proven track record: 100+ successful clients nationwide",
        ],
        testi_badge: "Client Testimonials", testi_title: "What Our Clients Say",
        cta_badge: "Get Started", cta_title: "Ready to Transform", cta_title2: "Your Business?",
        cta_desc: "Get a free consultation and discover how Afbenesia can help grow your business in a real way.",
        cta_btn1: "💬 Contact Us via WhatsApp", cta_btn2: "View Service Packages",

        // ── ABOUT ──
        about_badge: "About Afbenesia",
        about_title: "Meet the Team Behind", about_title2: "Your Success",
        about_desc: "Our mission is to help your business grow sustainably through smart digital strategies, deep guidance, and AI technology that feels human.",
        about_direction: "Our Direction", about_vision_mission: "Our Vision & Mission",
        about_vision_label: "Vision",
        about_vision_text: "To become a trusted partner for businesses throughout Indonesia in achieving success through the application of the latest technology and holistic guidance.",
        about_mission_label: "Mission",
        about_missions: [
            "Providing innovative digital strategy and business coaching solutions.",
            "Enabling every business to grow in the most effective and sustainable way.",
            "Delivering AI technology that feels humanized — personal and relevant.",
        ],
        about_team_photo: "Afbenesia Team",
        about_team_photo_sub: "Dedicated to the growth of Indonesian businesses",
        about_values_badge: "Our Values", about_values_title: "Our Work Foundation",
        about_values: [
            { title: "Innovation", desc: "We always seek new and better ways to serve clients, leveraging cutting-edge technology like AI." },
            { title: "Integrity", desc: "Honesty and transparency in every interaction with clients and partners is our commitment." },
            { title: "Sustainability", desc: "We focus on long-term solutions that bring lasting benefits, not just instant results." },
            { title: "Humanized", desc: "Technology must feel human. We ensure every AI solution retains a personal touch." },
        ],
        about_clients_badge: "Our Clients", about_clients_title: "Who Have Worked With Us",
        about_clients_desc: "We have been trusted by various government agencies, corporations, SMEs, and startups across Indonesia.",
        about_clients_more: "and many more clients across Indonesia",
        about_timeline_badge: "Our Journey", about_timeline_title: "Afbenesia's Milestones",
        about_timeline: [
            { year: "2018", desc: "Afbenesia was founded with a mission to help small and medium businesses in Indonesia grow through digital technology." },
            { year: "2019", desc: "Launch of our first coaching program focused on digital strategy for SMEs." },
            { year: "2020", desc: "Developed holistic and sustainable business consulting and mentoring services." },
            { year: "2021", desc: "Won Top 6 in KemenkopUKM's Entrepreneur Development program in Services & Technology." },
            { year: "2023", desc: "Launched Humanized AI services — combining artificial intelligence with a human touch." },
            { year: "2024", desc: "Expanded services nationwide with 100+ active clients and 98% satisfaction rate." },
        ],
        about_achieve_badge: "Achievements", about_achieve_title: "Our Pride",
        about_achievements: [
            { icon: "🏆", title: "Top 6 KemenkopUKM", desc: "Among the top 6 in the Business Development program in Services and Technology." },
            { icon: "👥", title: "100+ Successful Clients", desc: "Helped more than 100 businesses achieve their goals across Indonesia." },
            { icon: "📈", title: "200% Revenue Growth", desc: "Clients report significant revenue growth after using our services." },
            { icon: "⭐", title: "98% Satisfaction Rate", desc: "Almost all our clients say they are satisfied and recommend Afbenesia." },
        ],
        about_team_badge: "Our Team", about_team_title: "Our Professional Team",
        about_team_sub: "Dedicated experts ready to help your business grow.",
        about_team_members: [
            { name: "Johan Cahyadi", role: "Founder & CEO", initials: "JC", desc: "The visionary behind the Humanized AI concept for Indonesian businesses." },
            { name: "Lidya Meliana", role: "Chief Marketing Officer", initials: "LM", desc: "Digital marketing strategy expert with 5+ years of experience." },
            { name: "Melisa Kristi", role: "Chief Financial Officer", initials: "MK", desc: "Financial expert ensuring healthy and sustainable business growth." },
            { name: "Akmal Andriadi", role: "Head of Digital Strategy", initials: "AA", desc: "Digital strategy specialist and AI solution implementation expert." },
        ],
        about_cta_title: "Ready to Transform Your Business?",
        about_cta_desc: "Contact us now for a free consultation — directly via WhatsApp!",

        // ── SERVICES ──
        services_page_badge: "Our Services",
        services_page_title: "Innovative Digital", services_page_title2: "Solutions",
        services_page_desc: "Integrated services designed for your sustainable business growth in the digital era.",
        services_what_you_get: "What You Get",
        services_detail_btn: "Service Detail →",
        services_discuss_btn: "💬 Discuss Your Needs",
        services_process_badge: "How We Work",
        services_process_title: "A Simple & Effective Process",
        services_process_steps: [
            { step: "01", title: "Free Consultation", desc: "We understand your business needs and goals through an initial consultation." },
            { step: "02", title: "Analysis & Strategy", desc: "Our team analyzes your business situation and designs a targeted strategy." },
            { step: "03", title: "Implementation", desc: "Execute the strategy with close monitoring and periodic adjustments." },
            { step: "04", title: "Evaluation & Optimization", desc: "Measure results, report, and optimize continuously for the best outcomes." },
        ],
        services_cta_title: "Ready to Grow Your Business?",
        services_cta_desc: "Contact us today for a free consultation — directly via WhatsApp!",
        services_list: [
            { id: "ai-digital-strategy", icon: "🤖", title: "AI Digital Strategy Consulting", desc: "AI-based digital strategy tailored to your unique business needs for measurable and sustainable results.", tag: "Most Popular", features: ["Data-driven market & competitor analysis", "AI-optimized SEO & SEM strategy", "Digital advertising campaign planning", "Real-time monitoring & reporting dashboard", "AI-based conversion optimization"] },
            { id: "business-coaching", icon: "🎯", title: "Business Coaching & Mentorship", desc: "Intensive coaching program to identify opportunities and overcome your business challenges with experienced mentors.", tag: null, features: ["1-on-1 coaching sessions with experienced mentors", "Periodic business performance analysis", "Short & long-term strategy formulation", "Opportunity identification & risk mitigation", "Mindset & leadership development"] },
            { id: "virtual-assistant", icon: "🖥️", title: "Virtual Assistant Services", desc: "Professional administrative support so you can focus fully on what matters most for business growth.", tag: null, features: ["Email & business communication management", "Schedule & calendar management", "Social media management", "Research & data collection", "Report & presentation creation"] },
            { id: "digital-marketing", icon: "📢", title: "Digital Marketing Campaigns", desc: "Effective digital marketing campaigns to increase visibility, engagement, and business conversions.", tag: null, features: ["Google Ads & Meta Ads management", "Content marketing & copywriting", "Email marketing campaigns", "Social media management", "Analytics & campaign optimization"] },
            { id: "custom-ai", icon: "⚙️", title: "Custom AI Solutions", desc: "Development of custom AI solutions like chatbots, product recommendation systems, and predictive analytics.", tag: "New", features: ["AI chatbot for customer service", "Product recommendation system", "Predictive analytics & forecasting", "AI-based business process automation", "Integration with existing systems"] },
            { id: "email-marketing", icon: "✉️", title: "Email Marketing Strategy", desc: "Personal and targeted email campaigns to build customer loyalty and increase sales.", tag: null, features: ["Precise audience segmentation", "Attractive & responsive email design", "Automation & drip campaigns", "A/B testing & optimization", "Comprehensive performance reports"] },
        ],

        // ── PORTFOLIO ──
        portfolio_badge: "Our Portfolio",
        portfolio_title: "Results That", portfolio_title2: "Speak for Themselves",
        portfolio_desc: "Our clients' success is our success. See how we help businesses achieve real growth.",
        portfolio_featured: "Selected Projects", portfolio_featured_title: "Our Best Work",
        portfolio_cta_title: "Have a Similar Project?",
        portfolio_cta_desc: "We'd love to hear about your business challenges. Contact us for a no-commitment discussion!",
        portfolio_about: "About the Project",
        portfolio_challenge: "⚡ Challenge",
        portfolio_solution: "💡 Our Solution",
        portfolio_client: "Client", portfolio_duration: "Duration", portfolio_year: "Year", portfolio_service: "Services",
        portfolio_results_badge: "Real Results", portfolio_results_title: "The Impact We Created",
        portfolio_process_badge: "Process", portfolio_process_title: "How We Did It",
        portfolio_similar: "Want Similar Results?",
        portfolio_similar_desc: "Contact us and tell us about your business!",

        // ── BLOG ──
        blog_badge: "Blog & Insights", blog_title: "Insights &", blog_title2: "Latest News",
        blog_desc: "Tips, strategies, and insights on digital business, AI, and business growth in Indonesia.",
        blog_featured: "Latest Articles", blog_newsletter_title: "Get the Latest Insights",
        blog_newsletter_desc: "Or consult your business needs directly with our team!",
        blog_detail_ready: "Ready to apply these strategies?",
        blog_detail_cta_desc: "Consult with the Afbenesia team — free, no commitment!",
        blog_about_us: "About Afbenesia",
        blog_about_desc: "Your digital business growth partner. With 3+ years of experience and 100+ clients, we're ready to help your business grow.",
        blog_related: "Related Articles",
        blog_categories: ["All", "AI & Technology", "Digital Strategy", "Business Coaching", "Digital Marketing", "Virtual Assistant"],
        blog_min_read: "min read",

        // ── TRAINING ──
        training_badge: "Professional Programs",
        training_title: "Choose Your Path to Success",
        training_desc: "1-Year Fast Track to Employment & Entrepreneurship, backed by professional certification and AI technology.",
        training_programs_badge: "Our Programs",
        training_programs_title: "Competency-Based Featured Programs",
        training_programs_desc: "Every program is designed to produce work-ready professionals and entrepreneurs in the AI-driven digital era.",
        training_stats: [
            { val: "3", label: "Featured Programs" },
            { val: "160+", label: "Training Hours" },
            { val: "BNSP", label: "Official Certification" },
            { val: "100%", label: "Practice-Based" },
        ],
        training_duration: "Duration", training_price: "Price",
        training_mentor_career: "Career at Afbenesia",
        training_mentor_title: "Join as a Mentor",
        training_mentor_desc: "Be part of the change. Guide Indonesia's future talent with your practical expertise.",
        training_cta_title: "Ready to #LevelUpYourCareer?",
        training_cta_desc: "Register now and secure your slot for the next enrollment wave.",
        training_ask: "Ask About Programs",
        training_register_link: "https://linktr.ee/lpk.afbenesia",

        // ── TRAINING DETAIL ──
        detail_overview: "Program Overview", detail_benefits: "Benefits & What You'll Learn",
        detail_curriculum: "Curriculum", detail_pricing: "Pricing & Packages",
        detail_faq_title: "Frequently Asked Questions",
        detail_register: "Register for This Program",
        detail_duration_label: "Program Duration", detail_level_label: "Level",
        detail_cert_label: "Certification", detail_method_label: "Method",
        detail_schedule_label: "Schedule", detail_online: "Online & Offline (Hybrid)",
        detail_interested: "Interested in this program?",
        detail_most_popular: "Most Popular",
        detail_ask_price: "Ask for Pricing →",
        detail_slot: "Secure your slot now before it fills up!",
        detail_ask_first: "Ask for Info First",
        detail_back: "← View All Programs",
        detail_benefits_badge: "Benefits",
        detail_syllabus_badge: "Syllabus",
        detail_investment_badge: "Investment",
        detail_ask_info: "Ask Info",
        detail_ask_info_btn: "Ask Program Info",
        detail_interested_sidebar: "Interested in this program?",

        // ── CONTACT ──
        contact_badge: "Contact Us",
        contact_title: "We Are Ready", contact_title2: "To Help You",
        contact_desc: "Have questions or want to start a project? Contact us via WhatsApp for the fastest response!",
        contact_wa_now: "Chat on WhatsApp Now",
        contact_info_title: "Contact Information",
        contact_info_desc: "Reach us directly through the following channels.",
        contact_form_title: "Send a Direct Message",
        contact_form_desc: "We will respond within 1×24 business hours.",
        contact_name: "Your Name", contact_email: "Your Email",
        contact_subject: "Subject", contact_message: "Message",
        contact_name_ph: "Full name", contact_email_ph: "email@you.com",
        contact_subject_ph: "Message subject",
        contact_message_ph: "Tell us about your business needs...",
        contact_send: "Send Message →", contact_sending: "Sending...",
        contact_sent_title: "Message Sent!",
        contact_sent_desc: "Thank you! Our team will reply to your message shortly.",
        contact_wa_direct: "Chat on WhatsApp",
        contact_faq_badge: "FAQ", contact_faq_title: "Frequently Asked Questions",
        contact_maps_title: "Our Location", contact_maps_open: "Open in Google Maps →",
        contact_faster: "Faster response via",
        contact_address_label: "Address", contact_email_label: "Email",
        contact_phone_label: "Phone", contact_wa_label: "WhatsApp",
        contact_wa_value: "Chat directly now",
        contact_faqs: [
            { q: "How long does the initial consultation take?", a: "The initial consultation lasts about 30–60 minutes. Free, no commitment, and can be done via WhatsApp or video call." },
            { q: "Is Afbenesia suitable for small businesses?", a: "Absolutely! We specialize in helping Indonesian SMEs grow through affordable yet effective digital strategies." },
            { q: "How long to see real results?", a: "For digital marketing, usually 1–3 months. Coaching and strategy can be seen within 3–6 months." },
            { q: "Are there long-term contracts?", a: "We're flexible — there are monthly and project-based packages. Good results will bring clients back naturally." },
        ],
    },
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("id");
    useEffect(() => {
        const saved = localStorage.getItem("afbenesia-lang");
        if (saved === "en" || saved === "id") setLang(saved);
        else {
            // Fallback: baca dari cookie jika localStorage kosong
            const cookie = document.cookie.split("; ").find(r => r.startsWith("afbenesia-lang="));
            const cookieVal = cookie?.split("=")[1];
            if (cookieVal === "en" || cookieVal === "id") setLang(cookieVal);
        }
    }, []);
    const toggleLang = () => {
        const next = lang === "id" ? "en" : "id";
        setLang(next);
        localStorage.setItem("afbenesia-lang", next);
        // Set cookie agar Server Components (service/portfolio detail) bisa membacanya
        document.cookie = `afbenesia-lang=${next}; path=/; max-age=31536000; SameSite=Lax`;
    };
    const t = (key) => {
        const val = translations[lang]?.[key];
        if (val !== undefined) return val;
        return translations["id"]?.[key] ?? key;
    };
    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t, translations }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() { return useContext(LanguageContext); }
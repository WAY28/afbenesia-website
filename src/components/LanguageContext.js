"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
    id: {
        // Navbar
        nav_home: "Home",
        nav_about: "Tentang Kami",
        nav_services: "Layanan",
        nav_training: "Pelatihan",
        nav_portfolio: "Portfolio",
        nav_blog: "Blog",
        nav_contact: "Kontak",
        nav_cta: "💬 Konsultasi Gratis",

        // Footer
        footer_tagline: "Humanized AI for Everlasting Business Growth. Mitra terpercaya Anda untuk transformasi digital yang berkelanjutan.",
        footer_nav: "Navigasi",
        footer_services: "Layanan",
        footer_chat: "Chat WhatsApp",
        footer_copy: "© 2026 PT. Afbe Cahaya Kreatif. All Rights Reserved.",
        footer_sub: "Humanized AI · Indonesia",

        // Common
        btn_wa: "💬 Konsultasi via WhatsApp",
        btn_free_consult: "Konsultasi Gratis Sekarang",
        btn_all_services: "Lihat Semua Layanan",
        btn_learn_more: "Pelajari lebih lanjut →",
        btn_contact_now: "Hubungi Kami Sekarang",
        btn_view_services: "Lihat Paket Layanan",
        read_more: "Baca →",
        back_blog: "← Kembali ke Semua Artikel",
        back_services: "← Lihat Semua Layanan",
        back_portfolio: "← Kembali ke Portfolio",
        register_now: "Daftar Sekarang",
        view_detail: "Lihat Detail →",
        see_detail: "Lihat Detail Program",

        // Home Hero
        hero_badge: "Humanized AI for Business Growth",
        hero_title: "Transformasi Bisnis",
        hero_title2: "Anda Bersama AI",
        hero_desc: "Kami menggabungkan kecerdasan buatan dengan sentuhan manusiawi untuk pertumbuhan bisnis yang berkelanjutan dan terukur di Indonesia.",

        // Stats
        stat_clients: "Klien Puas",
        stat_satisfaction: "Tingkat Kepuasan",
        stat_experience: "Tahun Pengalaman",
        stat_growth: "Rata-rata Kenaikan Omset",

        // Partners
        partners_badge: "Dipercaya Oleh",
        partners_title: "Klien & Mitra yang Telah Bekerja Sama",
        partners_desc: "Kami bangga bermitra dengan berbagai instansi dan perusahaan terkemuka di Indonesia.",

        // Services section
        services_badge: "Layanan Kami",
        services_title: "Solusi Tepat untuk",
        services_title2: "Pertumbuhan Bisnis",
        services_desc: "Layanan komprehensif yang dirancang khusus untuk kebutuhan bisnis Anda di era digital.",

        // Why us
        why_badge: "Mengapa Afbenesia?",
        why_title: "AI yang Terasa",
        why_title2: "Seperti Manusia",
        why_desc: "Banyak layanan AI terasa dingin dan impersonal. Kami berbeda — setiap strategi diracik dengan pemahaman mendalam tentang bisnis dan budaya lokal Indonesia.",
        why_know_more: "Kenali Kami Lebih Jauh →",

        // Testimonials
        testi_badge: "Testimoni Klien",
        testi_title: "Apa Kata Klien Kami?",

        // CTA section
        cta_badge: "Mulai Sekarang",
        cta_title: "Siap Mengubah",
        cta_title2: "Bisnis Anda?",
        cta_desc: "Dapatkan konsultasi gratis dan temukan bagaimana Afbenesia dapat membantu pertumbuhan bisnis Anda secara nyata.",

        // Training page
        training_badge: "Program Profesional",
        training_title: "Pilih Jalur Suksesmu",
        training_desc: "Program 1 Tahun Jalur Cepat Kerja & Wirausaha, didukung sertifikasi profesional dan teknologi AI.",
        training_programs: "Program Unggulan Berbasis Kompetensi",
        training_programs_desc: "Setiap program dirancang untuk melahirkan tenaga ahli siap kerja dan wirausaha di era digital.",
        training_duration: "Durasi",
        training_price: "Harga",
        training_contact_price: "Hubungi untuk harga",
        training_mentor_title: "Bergabung Sebagai Mentor",
        training_mentor_desc: "Jadilah bagian dari perubahan. Bimbing talenta masa depan Indonesia dengan keahlian praktis Anda.",
        training_register_link: "Daftar di sini",
        training_cta_title: "Siap #LevelUpKarir?",
        training_cta_desc: "Daftar sekarang dan amankan slotmu di gelombang pendaftaran berikutnya.",

        // Training detail
        detail_overview: "Deskripsi Program",
        detail_benefits: "Manfaat & Yang Akan Dipelajari",
        detail_curriculum: "Kurikulum",
        detail_pricing: "Harga & Paket",
        detail_faq: "Pertanyaan Umum",
        detail_register: "Daftar Program Ini",
        detail_back: "← Lihat Semua Program",
        detail_duration_label: "Durasi Program",
        detail_level_label: "Level",
        detail_cert_label: "Sertifikasi",
        detail_method_label: "Metode",
        detail_online: "Online & Offline",

        // Contact
        contact_badge: "Hubungi Kami",
        contact_title: "Kami Siap",
        contact_title2: "Membantu Anda",
        contact_desc: "Ada pertanyaan atau ingin memulai proyek? Hubungi kami via WhatsApp untuk respons tercepat!",
        contact_info_title: "Informasi Kontak",
        contact_info_desc: "Hubungi kami langsung melalui channel berikut.",
        contact_form_title: "Kirim Pesan Langsung",
        contact_form_desc: "Kami akan merespon dalam 1×24 jam kerja.",
        contact_name: "Nama Anda",
        contact_email: "Email Anda",
        contact_subject: "Subjek",
        contact_message: "Pesan",
        contact_name_ph: "Nama lengkap",
        contact_email_ph: "email@anda.com",
        contact_subject_ph: "Subjek pesan",
        contact_message_ph: "Ceritakan kebutuhan bisnis Anda...",
        contact_send: "Kirim Pesan →",
        contact_sending: "Mengirim...",
        contact_sent_title: "Pesan Terkirim!",
        contact_sent_desc: "Terima kasih! Tim kami akan segera membalas pesan Anda.",
        contact_faq_badge: "FAQ",
        contact_faq_title: "Pertanyaan yang Sering Diajukan",
        contact_maps_title: "Lokasi Kami",
        contact_maps_open: "Buka di Google Maps →",
        contact_faster: "Respons lebih cepat via",
        contact_address_label: "Alamat",
        contact_email_label: "Email",
        contact_phone_label: "Telepon",
        contact_wa_label: "WhatsApp",
        contact_wa_value: "Chat langsung sekarang",
    },

    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_training: "Training",
        nav_portfolio: "Portfolio",
        nav_blog: "Blog",
        nav_contact: "Contact",
        nav_cta: "💬 Free Consultation",

        // Footer
        footer_tagline: "Humanized AI for Everlasting Business Growth. Your trusted partner for sustainable digital transformation.",
        footer_nav: "Navigation",
        footer_services: "Services",
        footer_chat: "Chat on WhatsApp",
        footer_copy: "© 2026 PT. Afbe Cahaya Kreatif. All Rights Reserved.",
        footer_sub: "Humanized AI · Indonesia",

        // Common
        btn_wa: "💬 Consult via WhatsApp",
        btn_free_consult: "Start Free Consultation Now",
        btn_all_services: "View All Services",
        btn_learn_more: "Learn more →",
        btn_contact_now: "Contact Us Now",
        btn_view_services: "View Service Packages",
        read_more: "Read →",
        back_blog: "← Back to All Articles",
        back_services: "← View All Services",
        back_portfolio: "← Back to Portfolio",
        register_now: "Register Now",
        view_detail: "View Detail →",
        see_detail: "See Program Detail",

        // Home Hero
        hero_badge: "Humanized AI for Business Growth",
        hero_title: "Transform Your",
        hero_title2: "Business With AI",
        hero_desc: "We combine artificial intelligence with a human touch for sustainable and measurable business growth in Indonesia.",

        // Stats
        stat_clients: "Happy Clients",
        stat_satisfaction: "Satisfaction Rate",
        stat_experience: "Years Experience",
        stat_growth: "Avg. Revenue Growth",

        // Partners
        partners_badge: "Trusted By",
        partners_title: "Clients & Partners Who Have Worked With Us",
        partners_desc: "We are proud to partner with various leading institutions and companies in Indonesia.",

        // Services section
        services_badge: "Our Services",
        services_title: "The Right Solution for",
        services_title2: "Business Growth",
        services_desc: "Comprehensive services designed specifically for your business needs in the digital era.",

        // Why us
        why_badge: "Why Afbenesia?",
        why_title: "AI That Feels",
        why_title2: "Truly Human",
        why_desc: "Many AI services feel cold and impersonal. We're different — every strategy is crafted with a deep understanding of local Indonesian business culture.",
        why_know_more: "Get to Know Us →",

        // Testimonials
        testi_badge: "Client Testimonials",
        testi_title: "What Our Clients Say",

        // CTA section
        cta_badge: "Get Started",
        cta_title: "Ready to Transform",
        cta_title2: "Your Business?",
        cta_desc: "Get a free consultation and discover how Afbenesia can help grow your business in a real way.",

        // Training page
        training_badge: "Professional Programs",
        training_title: "Choose Your Path to Success",
        training_desc: "1-Year Fast Track to Employment & Entrepreneurship, backed by professional certification and AI technology.",
        training_programs: "Competency-Based Featured Programs",
        training_programs_desc: "Every program is designed to produce work-ready professionals and entrepreneurs in the AI-driven digital era.",
        training_duration: "Duration",
        training_price: "Price",
        training_contact_price: "Contact for pricing",
        training_mentor_title: "Join as a Mentor",
        training_mentor_desc: "Be part of the change. Guide Indonesia's future talent with your practical expertise.",
        training_register_link: "Register here",
        training_cta_title: "Ready to #LevelUpYourCareer?",
        training_cta_desc: "Register now and secure your slot for the next enrollment wave.",

        // Training detail
        detail_overview: "Program Overview",
        detail_benefits: "Benefits & What You'll Learn",
        detail_curriculum: "Curriculum",
        detail_pricing: "Pricing & Packages",
        detail_faq: "Frequently Asked Questions",
        detail_register: "Register for This Program",
        detail_back: "← View All Programs",
        detail_duration_label: "Program Duration",
        detail_level_label: "Level",
        detail_cert_label: "Certification",
        detail_method_label: "Method",
        detail_online: "Online & Offline",

        // Contact
        contact_badge: "Contact Us",
        contact_title: "We Are Ready",
        contact_title2: "To Help You",
        contact_desc: "Have questions or want to start a project? Contact us via WhatsApp for the fastest response!",
        contact_info_title: "Contact Information",
        contact_info_desc: "Reach us directly through the following channels.",
        contact_form_title: "Send a Direct Message",
        contact_form_desc: "We will respond within 1×24 business hours.",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_subject: "Subject",
        contact_message: "Message",
        contact_name_ph: "Full name",
        contact_email_ph: "email@you.com",
        contact_subject_ph: "Message subject",
        contact_message_ph: "Tell us about your business needs...",
        contact_send: "Send Message →",
        contact_sending: "Sending...",
        contact_sent_title: "Message Sent!",
        contact_sent_desc: "Thank you! Our team will reply to your message shortly.",
        contact_faq_badge: "FAQ",
        contact_faq_title: "Frequently Asked Questions",
        contact_maps_title: "Our Location",
        contact_maps_open: "Open in Google Maps →",
        contact_faster: "Faster response via",
        contact_address_label: "Address",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        contact_wa_label: "WhatsApp",
        contact_wa_value: "Chat directly now",
    },
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("id");

    useEffect(() => {
        const saved = localStorage.getItem("afbenesia-lang");
        if (saved === "en" || saved === "id") setLang(saved);
    }, []);

    const toggleLang = () => {
        const next = lang === "id" ? "en" : "id";
        setLang(next);
        localStorage.setItem("afbenesia-lang", next);
    };

    const t = (key) => translations[lang][key] || translations["id"][key] || key;

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
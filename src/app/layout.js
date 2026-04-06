import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
    title: {
        default: "Afbenesia — Humanized AI for Everlasting Business Growth",
        template: "%s | Afbenesia",
    },
    description: "Mitra terpercaya untuk transformasi digital, coaching bisnis, dan strategi AI di Indonesia.",
    keywords: ["AI digital strategy", "business coaching", "digital marketing", "virtual assistant", "Jombang", "Indonesia"],
    openGraph: {
        type: "website",
        locale: "id_ID",
        siteName: "Afbenesia",
        title: "Afbenesia — Humanized AI for Everlasting Business Growth",
        description: "Mitra terpercaya untuk transformasi digital, coaching bisnis, dan strategi AI di Indonesia.",
        images: [{ url: "/afbenesia.jpg", width: 800, height: 800, alt: "Afbenesia" }],
    },
    icons: {
        icon: "/afbenesia.jpg",
        shortcut: "/afbenesia.jpg",
        apple: "/afbenesia.jpg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link rel="icon" href="/afbenesia.jpg" type="image/jpeg" />
                <link rel="apple-touch-icon" href="/afbenesia.jpg" />
            </head>
            <body className="font-sans antialiased bg-white text-dark">
                <Navbar />
                <main className="pt-16 page-enter">
                    {children}
                </main>
                <WhatsAppButton />
                <Footer />

                {/* Scroll Reveal Script */}
                <script dangerouslySetInnerHTML={{__html: `
                    (function() {
                        function reveal() {
                            var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
                            els.forEach(function(el) {
                                var rect = el.getBoundingClientRect();
                                if (rect.top < window.innerHeight - 60) {
                                    el.classList.add('revealed');
                                }
                            });
                        }
                        window.addEventListener('scroll', reveal, { passive: true });
                        window.addEventListener('load', reveal);
                        reveal();
                    })();
                `}} />
            </body>
        </html>
    );
}
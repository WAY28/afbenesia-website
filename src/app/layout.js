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
    authors: [{ name: "Afbenesia" }],
    creator: "Afbenesia",
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://afbenesia-website.vercel.app",
        siteName: "Afbenesia",
        title: "Afbenesia — Humanized AI for Everlasting Business Growth",
        description: "Mitra terpercaya untuk transformasi digital, coaching bisnis, dan strategi AI di Indonesia.",
        images: [
            {
                url: "/afbenesia.jpg",
                width: 800,
                height: 800,
                alt: "Afbenesia Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Afbenesia — Humanized AI for Everlasting Business Growth",
        description: "Mitra terpercaya untuk transformasi digital, coaching bisnis, dan strategi AI di Indonesia.",
        images: ["/afbenesia.jpg"],
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
                <link
                    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                {/* Favicon */}
                <link rel="icon" href="/afbenesia.jpg" type="image/jpeg" />
                <link rel="apple-touch-icon" href="/afbenesia.jpg" />
            </head>
            <body className="font-sans antialiased bg-white text-dark">
                <Navbar />
                <main className="pt-16">
                    {children}
                </main>
                <WhatsAppButton />
                <Footer />
            </body>
        </html>
    );
}
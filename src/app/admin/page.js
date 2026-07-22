"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAdminAuth } from "./layout";

const resourceCards = [
    { href: "/admin/services", label: "Services", icon: "🤖", color: "bg-blue-500", count: 0 },
    { href: "/admin/portfolio", label: "Portfolio", icon: "💼", color: "bg-emerald-500", count: 0 },
    { href: "/admin/blog", label: "Blog", icon: "📝", color: "bg-purple-500", count: 0 },
    { href: "/admin/training", label: "Training", icon: "🎓", color: "bg-orange-500", count: 0 },
    { href: "/admin/testimonials", label: "Testimonials", icon: "⭐", color: "bg-yellow-500", count: 0 },
    { href: "/admin/partners", label: "Partners", icon: "🤝", color: "bg-teal-500", count: 0 },
    { href: "/admin/team", label: "Team", icon: "👥", color: "bg-pink-500", count: 0 },
    { href: "/admin/about", label: "About", icon: "ℹ️", color: "bg-indigo-500", count: 0 },
];

export default function AdminDashboard() {
    const { token } = useAdminAuth();
    const [stats, setStats] = useState(resourceCards);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) return;

        const fetchCounts = async () => {
            const resources = ["services", "portfolio", "blog", "training", "testimonials", "partners", "team"];

            const updatedStats = [...stats];

            for (let i = 0; i < resources.length; i++) {
                try {
                    const res = await fetch(`/api/admin/${resources[i]}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    const data = await res.json();
                    if (data.success && Array.isArray(data.data)) {
                        updatedStats[i].count = data.data.length;
                    }
                } catch (err) {
                    console.error(`Error fetching ${resources[i]}:`, err);
                }
            }

            setStats(updatedStats);
            setLoading(false);
        };

        fetchCounts();
    }, [token]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-dark">Dashboard Overview</h2>
                <p className="text-gray-500 text-sm mt-1">Selamat datang di panel admin Afbenesia. Kelola semua konten website di sini.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((card) => (
                    <Link
                        key={card.href}
                        href={card.href}
                        className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                        <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center text-lg mb-3`}>
                            {card.icon}
                        </div>
                        <p className="text-2xl font-bold text-dark">{card.count}</p>
                        <p className="text-gray-500 text-sm font-medium">{card.label}</p>
                    </Link>
                ))}
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-dark mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Link
                        href="/admin/blog"
                        className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                        <span className="text-xl">📝</span>
                        <span className="text-sm font-semibold text-purple-700">Tambah Artikel Blog</span>
                    </Link>
                    <Link
                        href="/admin/services"
                        className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                        <span className="text-xl">🤖</span>
                        <span className="text-sm font-semibold text-blue-700">Tambah Layanan</span>
                    </Link>
                    <Link
                        href="/admin/portfolio"
                        className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                        <span className="text-xl">💼</span>
                        <span className="text-sm font-semibold text-emerald-700">Tambah Portfolio</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}


"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, createContext, useContext } from "react";

// ── Auth Context ──
const AdminAuthContext = createContext();

export function useAdminAuth() {
    const ctx = useContext(AdminAuthContext);
    if (!ctx) {
        // Return a safe fallback when used outside provider
        // This can happen during initial render before provider mounts
        return { token: null, login: () => {}, logout: () => {}, loading: true };
    }
    return ctx;
}

function AdminAuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const saved = localStorage.getItem("afbenesia-admin-token");
        if (saved) {
            setToken(saved);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading && !token && pathname !== "/admin/login") {
            router.replace("/admin/login");
        }
    }, [loading, token, pathname, router]);

    const login = (newToken) => {
        localStorage.setItem("afbenesia-admin-token", newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem("afbenesia-admin-token");
        setToken(null);
        router.replace("/admin/login");
    };

    return (
        <AdminAuthContext.Provider value={{ token, login, logout, loading }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

// ── Sidebar ──
const sidebarLinks = [
    { href: "/admin", label: "Dashboard", icon: "📊" },
    { href: "/admin/services", label: "Services", icon: "🤖" },
    { href: "/admin/portfolio", label: "Portfolio", icon: "💼" },
    { href: "/admin/blog", label: "Blog", icon: "📝" },
    { href: "/admin/training", label: "Training", icon: "🎓" },
    { href: "/admin/testimonials", label: "Testimonials", icon: "⭐" },
    { href: "/admin/partners", label: "Partners", icon: "🤝" },
    { href: "/admin/team", label: "Team", icon: "👥" },
    { href: "/admin/about", label: "About", icon: "ℹ️" },
];

function AdminSidebar({ isOpen, onClose }) {
    const pathname = usePathname();
    const { logout } = useAdminAuth();

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-dark text-white z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto flex flex-col ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-5 border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-bold">A</div>
                        <div>
                            <p className="font-bold text-sm">Afbenesia</p>
                            <p className="text-[10px] text-white/40">Admin Panel</p>
                        </div>
                    </Link>
                </div>
                <nav className="flex-1 overflow-y-auto p-3 space-y-1">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                    isActive
                                        ? "bg-primary text-white"
                                        : "text-white/60 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                <span className="text-lg">{link.icon}</span>
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-3 border-t border-white/10 space-y-2">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-all"
                    >
                        <span>🌐</span>
                        View Website
                    </Link>
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all w-full"
                    >
                        <span>🚪</span>
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}

// ── Inner layout component (rendered inside provider) ──
function AdminLayoutInner({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { token, loading } = useAdminAuth();
    const pathname = usePathname();

    // Login page — just render children (no sidebar/header)
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
            </div>
        );
    }

    if (!token) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-h-screen">
                <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h1 className="text-lg font-bold text-dark hidden sm:block">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                            Admin
                        </span>
                    </div>
                </header>
                <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

// ── Main Admin Layout (root level — provider wraps everything) ──
export default function AdminLayout({ children }) {
    return (
        <AdminAuthProvider>
            <AdminLayoutInner>{children}</AdminLayoutInner>
        </AdminAuthProvider>
    );
}


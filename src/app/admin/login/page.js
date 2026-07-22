"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../layout";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useAdminAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (data.success) {
                login(data.token);
                router.push("/admin");
            } else {
                setError(data.message || "Login gagal");
            }
        } catch (err) {
            setError("Terjadi kesalahan. Silakan coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark to-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                        A
                    </div>
                    <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
                    <p className="text-white/50 text-sm mt-1">Afbenesia Website</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-dark mb-1.5">
                            Password Admin
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                            autoFocus
                            required
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4 border border-red-100">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Memproses..." : "Masuk →"}
                    </button>

                    <p className="text-gray-400 text-xs text-center mt-4">
                        Gunakan password admin yang telah ditentukan
                    </p>
                </form>
            </div>
        </div>
    );
}


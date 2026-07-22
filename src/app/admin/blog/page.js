"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminBlogPage() {
    const { token } = useAdminAuth();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        slug: "", category: "", categoryEn: "", title: "", titleEn: "",
        excerpt: "", excerptEn: "", content: "", contentEn: "",
        date: "", dateEn: "", readTime: "5", featured: false, active: true,
    });

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/admin/blog", { headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) setPosts(data.data);
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    useEffect(() => { if (token) fetchPosts(); }, [token]);

    const resetForm = () => {
        setForm({ slug: "", category: "", categoryEn: "", title: "", titleEn: "", excerpt: "", excerptEn: "", content: "", contentEn: "", date: "", dateEn: "", readTime: "5", featured: false, active: true });
        setEditing(null);
        setShowForm(false);
    };

    const openEdit = (post) => {
        setForm(post);
        setEditing(post.slug);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/admin/blog", {
                method: editing ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(editing ? { id: editing, ...form } : form),
            });
            const data = await res.json();
            if (data.success) { resetForm(); fetchPosts(); }
        } catch (err) { console.error(err); }
    };

    const handleDelete = async (slug) => {
        if (!confirm("Yakin ingin menghapus artikel ini?")) return;
        try {
            const res = await fetch(`/api/admin/blog?id=${slug}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) fetchPosts();
        } catch (err) { console.error(err); }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage Blog</h2>
                    <p className="text-gray-500 text-sm">Kelola artikel blog</p>
                </div>
                <button onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                    + Tambah Artikel
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && resetForm()}>
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{editing ? "Edit Artikel" : "Tambah Artikel Baru"}</h3>
                            <button onClick={resetForm} className="text-gray-400 hover:text-dark">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Slug</label>
                                    <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" disabled={!!editing} required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Read Time (menit)</label>
                                    <input type="text" value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Category (ID)</label>
                                    <input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Category (EN)</label>
                                    <input type="text" value={form.categoryEn} onChange={(e) => setForm({ ...form, categoryEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Title (ID)</label>
                                    <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Title (EN)</label>
                                    <input type="text" value={form.titleEn} onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date (ID)</label>
                                    <input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" placeholder="15 Maret 2026" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date (EN)</label>
                                    <input type="text" value={form.dateEn} onChange={(e) => setForm({ ...form, dateEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" placeholder="March 15, 2026" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Excerpt (ID)</label>
                                    <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Excerpt (EN)</label>
                                    <textarea value={form.excerptEn} onChange={(e) => setForm({ ...form, excerptEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Content (ID) — HTML optional</label>
                                <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-32" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Content (EN) — HTML optional</label>
                                <textarea value={form.contentEn} onChange={(e) => setForm({ ...form, contentEn: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-32" />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="featured" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" />
                                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
                                    <label htmlFor="active" className="text-sm font-medium text-gray-700">Active</label>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="submit" className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                                    {editing ? "Update" : "Simpan"}
                                </button>
                                <button type="button" onClick={resetForm} className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
                                    Batal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Title</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Category</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Date</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Featured</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Active</th>
                            <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {posts.map((post) => (
                            <tr key={post.slug} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium max-w-[200px] truncate">{post.title}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{post.category}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{post.date}</td>
                                <td className="px-4 py-3">
                                    {post.featured && <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Featured</span>}
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${post.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                        {post.active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => openEdit(post)} className="text-primary hover:underline text-xs font-semibold mr-3">Edit</button>
                                    <button onClick={() => handleDelete(post.slug)} className="text-red-500 hover:underline text-xs font-semibold">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && <tr><td colSpan={6} className="text-center py-10 text-gray-400">Belum ada artikel blog</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


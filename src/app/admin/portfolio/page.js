"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminPortfolioPage() {
    const { token } = useAdminAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        slug: "", title: "", titleEn: "", category: "", result: "", resultEn: "",
        desc: "", descEn: "", tags: "", active: true,
    });

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/admin/portfolio", { headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) setItems(data.data);
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    useEffect(() => { if (token) fetchItems(); }, [token]);

    const resetForm = () => {
        setForm({ slug: "", title: "", titleEn: "", category: "", result: "", resultEn: "", desc: "", descEn: "", tags: "", active: true });
        setEditing(null);
        setShowForm(false);
    };

    const openEdit = (item) => {
        setForm({ ...item, tags: Array.isArray(item.tags) ? item.tags.join(", ") : "" });
        setEditing(item.slug);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            tags: form.tags.split(",").map(t => t.trim()).filter(t => t),
        };
        try {
            const res = await fetch("/api/admin/portfolio", {
                method: editing ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(editing ? { id: editing, ...payload } : payload),
            });
            const data = await res.json();
            if (data.success) { resetForm(); fetchItems(); }
        } catch (err) { console.error(err); }
    };

    const handleDelete = async (slug) => {
        if (!confirm("Yakin ingin menghapus project ini?")) return;
        try {
            const res = await fetch(`/api/admin/portfolio?id=${slug}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) fetchItems();
        } catch (err) { console.error(err); }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage Portfolio</h2>
                    <p className="text-gray-500 text-sm">Kelola project portfolio</p>
                </div>
                <button onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                    + Tambah Project
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && resetForm()}>
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{editing ? "Edit Project" : "Tambah Project Baru"}</h3>
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
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Category</label>
                                    <input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
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
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Result (ID)</label>
                                    <input type="text" value={form.result} onChange={(e) => setForm({ ...form, result: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Result (EN)</label>
                                    <input type="text" value={form.resultEn} onChange={(e) => setForm({ ...form, resultEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Description (ID)</label>
                                    <textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Description (EN)</label>
                                    <textarea value={form.descEn} onChange={(e) => setForm({ ...form, descEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Tags (pisahkan dengan koma)</label>
                                <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" placeholder="AI Strategy, Digital Marketing, SEO" />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
                                <label htmlFor="active" className="text-sm font-medium text-gray-700">Active</label>
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
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Result</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Active</th>
                            <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {items.map((item) => (
                            <tr key={item.slug} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium">{item.title}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{item.category}</td>
                                <td className="px-4 py-3 font-semibold text-emerald-600">{item.result}</td>
                                <td className="px-4 py-3">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                        {item.active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => openEdit(item)} className="text-primary hover:underline text-xs font-semibold mr-3">Edit</button>
                                    <button onClick={() => handleDelete(item.slug)} className="text-red-500 hover:underline text-xs font-semibold">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {items.length === 0 && <tr><td colSpan={5} className="text-center py-10 text-gray-400">Belum ada data portfolio</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


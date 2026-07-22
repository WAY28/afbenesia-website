"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminTrainingPage() {
    const { token } = useAdminAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        slug: "", badge: "", badgeEn: "", title: "", desc: "", descEn: "",
        duration: "", durationEn: "", level: "", levelEn: "",
        price: "", priceEn: "", cert: "", certEn: "",
        highlights: "", highlightsEn: "", emoji: "🎓", active: true,
    });

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/admin/training", { headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) setItems(data.data);
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    useEffect(() => { if (token) fetchItems(); }, [token]);

    const resetForm = () => {
        setForm({ slug: "", badge: "", badgeEn: "", title: "", desc: "", descEn: "", duration: "", durationEn: "", level: "", levelEn: "", price: "", priceEn: "", cert: "", certEn: "", highlights: "", highlightsEn: "", emoji: "🎓", active: true });
        setEditing(null);
        setShowForm(false);
    };

    const openEdit = (item) => {
        setForm({
            ...item,
            highlights: Array.isArray(item.highlights) ? item.highlights.join("\n") : "",
            highlightsEn: Array.isArray(item.highlightsEn) ? item.highlightsEn.join("\n") : "",
        });
        setEditing(item.slug);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            highlights: form.highlights.split("\n").filter(h => h.trim()),
            highlightsEn: form.highlightsEn.split("\n").filter(h => h.trim()),
        };
        try {
            const res = await fetch("/api/admin/training", {
                method: editing ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(editing ? { id: editing, ...payload } : payload),
            });
            const data = await res.json();
            if (data.success) { resetForm(); fetchItems(); }
        } catch (err) { console.error(err); }
    };

    const handleDelete = async (slug) => {
        if (!confirm("Yakin ingin menghapus program ini?")) return;
        try {
            const res = await fetch(`/api/admin/training?id=${slug}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) fetchItems();
        } catch (err) { console.error(err); }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage Training</h2>
                    <p className="text-gray-500 text-sm">Kelola program pelatihan</p>
                </div>
                <button onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                    + Tambah Program
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && resetForm()}>
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{editing ? "Edit Program" : "Tambah Program Baru"}</h3>
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
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Emoji</label>
                                    <input type="text" value={form.emoji} onChange={(e) => setForm({ ...form, emoji: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Badge (ID)</label>
                                    <input type="text" value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Badge (EN)</label>
                                    <input type="text" value={form.badgeEn} onChange={(e) => setForm({ ...form, badgeEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Title</label>
                                <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
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
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Duration (ID)</label>
                                    <input type="text" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Duration (EN)</label>
                                    <input type="text" value={form.durationEn} onChange={(e) => setForm({ ...form, durationEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Level (ID)</label>
                                    <input type="text" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Level (EN)</label>
                                    <input type="text" value={form.levelEn} onChange={(e) => setForm({ ...form, levelEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Price (ID)</label>
                                    <input type="text" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Price (EN)</label>
                                    <input type="text" value={form.priceEn} onChange={(e) => setForm({ ...form, priceEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Certification (ID)</label>
                                    <input type="text" value={form.cert} onChange={(e) => setForm({ ...form, cert: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Certification (EN)</label>
                                    <input type="text" value={form.certEn} onChange={(e) => setForm({ ...form, certEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Highlights (ID) — satu per baris</label>
                                    <textarea value={form.highlights} onChange={(e) => setForm({ ...form, highlights: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Highlights (EN) — satu per baris</label>
                                    <textarea value={form.highlightsEn} onChange={(e) => setForm({ ...form, highlightsEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" />
                                </div>
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
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Program</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Duration</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Level</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Cert</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Active</th>
                            <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {items.map((item) => (
                            <tr key={item.slug} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium">
                                    <span className="mr-2">{item.emoji}</span>
                                    {item.title}
                                </td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{item.duration}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{item.level}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{item.cert}</td>
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
                        {items.length === 0 && <tr><td colSpan={6} className="text-center py-10 text-gray-400">Belum ada program pelatihan</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


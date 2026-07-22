"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminServicesPage() {
    const { token } = useAdminAuth();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        id: "", icon: "🤖", title: "", titleEn: "", tag: "", tagEn: "",
        desc: "", descEn: "", features: "", featuresEn: "", active: true,
    });

    const fetchServices = async () => {
        try {
            const res = await fetch("/api/admin/services", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (data.success) setServices(data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { if (token) fetchServices(); }, [token]);

    const resetForm = () => {
        setForm({ id: "", icon: "🤖", title: "", titleEn: "", tag: "", tagEn: "", desc: "", descEn: "", features: "", featuresEn: "", active: true });
        setEditing(null);
        setShowForm(false);
    };

    const openEdit = (svc) => {
        setForm({
            ...svc,
            features: Array.isArray(svc.features) ? svc.features.join("\n") : "",
            featuresEn: Array.isArray(svc.featuresEn) ? svc.featuresEn.join("\n") : "",
        });
        setEditing(svc.id);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            features: form.features.split("\n").filter(f => f.trim()),
            featuresEn: form.featuresEn.split("\n").filter(f => f.trim()),
        };

        try {
            const res = await fetch(`/api/admin/services`, {
                method: editing ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(editing ? { id: editing, ...payload } : payload),
            });
            const data = await res.json();
            if (data.success) {
                resetForm();
                fetchServices();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus layanan ini?")) return;
        try {
            const res = await fetch(`/api/admin/services?id=${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (data.success) fetchServices();
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage Services</h2>
                    <p className="text-gray-500 text-sm">Kelola layanan Afbenesia</p>
                </div>
                <button onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                    + Tambah Layanan
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && resetForm()}>
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{editing ? "Edit Layanan" : "Tambah Layanan Baru"}</h3>
                            <button onClick={resetForm} className="text-gray-400 hover:text-dark">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Icon (emoji)</label>
                                    <input type="text" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">ID (slug)</label>
                                    <input type="text" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" disabled={!!editing} required />
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
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Tag (ID) — optional</label>
                                    <input type="text" value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Tag (EN) — optional</label>
                                    <input type="text" value={form.tagEn} onChange={(e) => setForm({ ...form, tagEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
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
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Features (ID) — satu per baris</label>
                                    <textarea value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-24" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Features (EN) — satu per baris</label>
                                    <textarea value={form.featuresEn} onChange={(e) => setForm({ ...form, featuresEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-24" required />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })}
                                    className="rounded" />
                                <label htmlFor="active" className="text-sm font-medium text-gray-700">Active</label>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="submit"
                                    className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                                    {editing ? "Update" : "Simpan"}
                                </button>
                                <button type="button" onClick={resetForm}
                                    className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
                                    Batal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* List */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Icon</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">ID</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Title</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Tag</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Active</th>
                            <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {services.map((svc) => (
                            <tr key={svc.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 text-xl">{svc.icon}</td>
                                <td className="px-4 py-3 font-mono text-xs text-gray-500">{svc.id}</td>
                                <td className="px-4 py-3 font-medium">{svc.title}</td>
                                <td className="px-4 py-3">
                                    {svc.tag && <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{svc.tag}</span>}
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${svc.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                        {svc.active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => openEdit(svc)} className="text-primary hover:underline text-xs font-semibold mr-3">Edit</button>
                                    <button onClick={() => handleDelete(svc.id)} className="text-red-500 hover:underline text-xs font-semibold">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {services.length === 0 && (
                            <tr><td colSpan={6} className="text-center py-10 text-gray-400">Belum ada data layanan</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


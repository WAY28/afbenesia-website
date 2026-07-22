"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminPartnersPage() {
    const { token } = useAdminAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        id: "", name: "", abbr: "", logo: "", active: true,
    });

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/admin/partners", { headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) setItems(data.data);
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    useEffect(() => { if (token) fetchItems(); }, [token]);

    const resetForm = () => {
        setForm({ id: "", name: "", abbr: "", logo: "", active: true });
        setEditing(null);
        setShowForm(false);
    };

    const openEdit = (item) => {
        setForm(item);
        setEditing(item.id);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/admin/partners", {
                method: editing ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(editing ? { id: editing, ...form } : form),
            });
            const data = await res.json();
            if (data.success) { resetForm(); fetchItems(); }
        } catch (err) { console.error(err); }
    };

    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus partner ini?")) return;
        try {
            const res = await fetch(`/api/admin/partners?id=${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) fetchItems();
        } catch (err) { console.error(err); }
    };

    const getStatusColor = (active) => active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage Partners</h2>
                    <p className="text-gray-500 text-sm">Kelola mitra & klien</p>
                </div>
                <button onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                    + Tambah Partner
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && resetForm()}>
                    <div className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{editing ? "Edit Partner" : "Tambah Partner Baru"}</h3>
                            <button onClick={resetForm} className="text-gray-400 hover:text-dark">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">ID</label>
                                    <input type="text" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" disabled={!!editing} required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Logo Path</label>
                                    <input type="text" value={form.logo} onChange={(e) => setForm({ ...form, logo: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" placeholder="/logos/partner.png" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Abbreviation (use \n for newline)</label>
                                <input type="text" value={form.abbr} onChange={(e) => setForm({ ...form, abbr: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" placeholder="KemenKop\nUKM" />
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
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Name</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Abbreviation</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Logo</th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-600">Active</th>
                            <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium">{item.name}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs whitespace-pre-line">{item.abbr}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs font-mono">{item.logo}</td>
                                <td className="px-4 py-3">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getStatusColor(item.active)}`}>
                                        {item.active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => openEdit(item)} className="text-primary hover:underline text-xs font-semibold mr-3">Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:underline text-xs font-semibold">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {items.length === 0 && <tr><td colSpan={5} className="text-center py-10 text-gray-400">Belum ada partner</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


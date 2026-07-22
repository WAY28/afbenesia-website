"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminTeamPage() {
    const { token } = useAdminAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        id: "", name: "", role: "", roleEn: "", initials: "", desc: "", descEn: "", active: true,
    });

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/admin/team", { headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) setItems(data.data);
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    useEffect(() => { if (token) fetchItems(); }, [token]);

    const resetForm = () => {
        setForm({ id: "", name: "", role: "", roleEn: "", initials: "", desc: "", descEn: "", active: true });
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
            const res = await fetch("/api/admin/team", {
                method: editing ? "PUT" : "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(editing ? { id: editing, ...form } : form),
            });
            const data = await res.json();
            if (data.success) { resetForm(); fetchItems(); }
        } catch (err) { console.error(err); }
    };

    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus anggota tim?")) return;
        try {
            const res = await fetch(`/api/admin/team?id=${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success) fetchItems();
        } catch (err) { console.error(err); }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage Team</h2>
                    <p className="text-gray-500 text-sm">Kelola anggota tim Afbenesia</p>
                </div>
                <button onClick={() => { resetForm(); setShowForm(true); }}
                    className="bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all">
                    + Tambah Anggota
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && resetForm()}>
                    <div className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{editing ? "Edit Anggota" : "Tambah Anggota Baru"}</h3>
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
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Initials</label>
                                    <input type="text" value={form.initials} onChange={(e) => setForm({ ...form, initials: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" placeholder="JC" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Role (ID)</label>
                                    <input type="text" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Role (EN)</label>
                                    <input type="text" value={form.roleEn} onChange={(e) => setForm({ ...form, roleEn: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Description (ID)</label>
                                <textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Description (EN)</label>
                                <textarea value={form.descEn} onChange={(e) => setForm({ ...form, descEn: e.target.value })}
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-20" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-3">
                            {item.initials || item.name.charAt(0)}
                        </div>
                        <p className="font-bold text-dark">{item.name}</p>
                        <p className="text-gray-500 text-xs mb-3">{item.role}</p>
                        <p className="text-gray-400 text-xs mb-3 line-clamp-2">{item.desc}</p>
                        <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {item.active ? "Active" : "Inactive"}
                            </span>
                            <div className="flex gap-2">
                                <button onClick={() => openEdit(item)} className="text-primary hover:underline text-xs font-semibold">Edit</button>
                                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:underline text-xs font-semibold">Del</button>
                            </div>
                        </div>
                    </div>
                ))}
                {items.length === 0 && (
                    <div className="col-span-full text-center py-10 text-gray-400">Belum ada anggota tim</div>
                )}
            </div>
        </div>
    );
}


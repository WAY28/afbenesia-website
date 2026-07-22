"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "../layout";

export default function AdminAboutPage() {
    const { token } = useAdminAuth();
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [form, setForm] = useState({
        vision: "", visionEn: "", missions: "", missionsEn: "",
        values: [], timeline: [], achievements: [],
    });

    const fetchAbout = async () => {
        try {
            const res = await fetch("/api/admin/about", { headers: { Authorization: `Bearer ${token}` } });
            const data = await res.json();
            if (data.success && data.data) {
                setAbout(data.data);
                setForm({
                    vision: data.data.vision || "",
                    visionEn: data.data.visionEn || "",
                    missions: Array.isArray(data.data.missions) ? data.data.missions.join("\n") : "",
                    missionsEn: Array.isArray(data.data.missionsEn) ? data.data.missionsEn.join("\n") : "",
                    values: data.data.values || [],
                    timeline: data.data.timeline || [],
                    achievements: data.data.achievements || [],
                });
            }
        } catch (err) { console.error(err); }
        finally { setLoading(false); }
    };

    useEffect(() => { if (token) fetchAbout(); }, [token]);

    const handleSave = async () => {
        setSaving(true);
        setSaved(false);
        try {
            const payload = {
                vision: form.vision,
                visionEn: form.visionEn,
                missions: form.missions.split("\n").filter(m => m.trim()),
                missionsEn: form.missionsEn.split("\n").filter(m => m.trim()),
                values: form.values,
                timeline: form.timeline,
                achievements: form.achievements,
            };
            const res = await fetch("/api/admin/about", {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                setSaved(true);
                setTimeout(() => setSaved(false), 3000);
            }
        } catch (err) { console.error(err); }
        finally { setSaving(false); }
    };

    // Helper for managing nested arrays
    const addValue = () => {
        setForm({
            ...form,
            values: [...form.values, { id: `val-${Date.now()}`, title: "", titleEn: "", desc: "", descEn: "" }],
        });
    };

    const updateValue = (index, field, value) => {
        const updated = [...form.values];
        updated[index] = { ...updated[index], [field]: value };
        setForm({ ...form, values: updated });
    };

    const removeValue = (index) => {
        setForm({ ...form, values: form.values.filter((_, i) => i !== index) });
    };

    const addTimeline = () => {
        setForm({
            ...form,
            timeline: [...form.timeline, { year: "", desc: "", descEn: "" }],
        });
    };

    const updateTimeline = (index, field, value) => {
        const updated = [...form.timeline];
        updated[index] = { ...updated[index], [field]: value };
        setForm({ ...form, timeline: updated });
    };

    const removeTimeline = (index) => {
        setForm({ ...form, timeline: form.timeline.filter((_, i) => i !== index) });
    };

    const addAchievement = () => {
        setForm({
            ...form,
            achievements: [...form.achievements, { id: `ach-${Date.now()}`, icon: "🏆", title: "", titleEn: "", desc: "", descEn: "" }],
        });
    };

    const updateAchievement = (index, field, value) => {
        const updated = [...form.achievements];
        updated[index] = { ...updated[index], [field]: value };
        setForm({ ...form, achievements: updated });
    };

    const removeAchievement = (index) => {
        setForm({ ...form, achievements: form.achievements.filter((_, i) => i !== index) });
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-dark">Manage About Page</h2>
                    <p className="text-gray-500 text-sm">Kelola konten halaman About</p>
                </div>
                <button onClick={handleSave} disabled={saving}
                    className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                        saved ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-primary-dark"
                    }`}>
                    {saving ? "Menyimpan..." : saved ? "✓ Tersimpan" : "Simpan Semua"}
                </button>
            </div>

            <div className="space-y-6">
                {/* Vision & Mission */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-bold text-dark mb-4">Visi & Misi</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Vision (ID)</label>
                            <textarea value={form.vision} onChange={(e) => setForm({ ...form, vision: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-24" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Vision (EN)</label>
                            <textarea value={form.visionEn} onChange={(e) => setForm({ ...form, visionEn: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-24" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Missions (ID) — satu per baris</label>
                            <textarea value={form.missions} onChange={(e) => setForm({ ...form, missions: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-24" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Missions (EN) — satu per baris</label>
                            <textarea value={form.missionsEn} onChange={(e) => setForm({ ...form, missionsEn: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm h-24" />
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-dark">Nilai-nilai (Values)</h3>
                        <button onClick={addValue} className="text-primary text-sm font-semibold hover:underline">+ Tambah Value</button>
                    </div>
                    {form.values.map((val, i) => (
                        <div key={val.id || i} className="border border-gray-100 rounded-xl p-4 mb-3">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-semibold text-gray-400">Value #{i + 1}</span>
                                <button onClick={() => removeValue(i)} className="text-red-500 text-xs hover:underline">Hapus</button>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-2">
                                <input type="text" placeholder="Title (ID)" value={val.title} onChange={(e) => updateValue(i, "title", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm" />
                                <input type="text" placeholder="Title (EN)" value={val.titleEn} onChange={(e) => updateValue(i, "titleEn", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <textarea placeholder="Description (ID)" value={val.desc} onChange={(e) => updateValue(i, "desc", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm h-16" />
                                <textarea placeholder="Description (EN)" value={val.descEn} onChange={(e) => updateValue(i, "descEn", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm h-16" />
                            </div>
                        </div>
                    ))}
                    {form.values.length === 0 && <p className="text-gray-400 text-sm">Belum ada nilai-nilai. Klik "+ Tambah Value"</p>}
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-dark">Timeline</h3>
                        <button onClick={addTimeline} className="text-primary text-sm font-semibold hover:underline">+ Tambah Event</button>
                    </div>
                    {form.timeline.map((item, i) => (
                        <div key={i} className="border border-gray-100 rounded-xl p-4 mb-3">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-semibold text-gray-400">Event #{i + 1}</span>
                                <button onClick={() => removeTimeline(i)} className="text-red-500 text-xs hover:underline">Hapus</button>
                            </div>
                            <div className="mb-2">
                                <input type="text" placeholder="Year (e.g. 2024)" value={item.year} onChange={(e) => updateTimeline(i, "year", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm w-32" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <textarea placeholder="Description (ID)" value={item.desc} onChange={(e) => updateTimeline(i, "desc", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm h-16" />
                                <textarea placeholder="Description (EN)" value={item.descEn} onChange={(e) => updateTimeline(i, "descEn", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm h-16" />
                            </div>
                        </div>
                    ))}
                    {form.timeline.length === 0 && <p className="text-gray-400 text-sm">Belum ada timeline. Klik "+ Tambah Event"</p>}
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-dark">Achievements</h3>
                        <button onClick={addAchievement} className="text-primary text-sm font-semibold hover:underline">+ Tambah Achievement</button>
                    </div>
                    {form.achievements.map((ach, i) => (
                        <div key={ach.id || i} className="border border-gray-100 rounded-xl p-4 mb-3">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-semibold text-gray-400">Achievement #{i + 1}</span>
                                <button onClick={() => removeAchievement(i)} className="text-red-500 text-xs hover:underline">Hapus</button>
                            </div>
                            <div className="grid grid-cols-3 gap-3 mb-2">
                                <input type="text" placeholder="Icon (emoji)" value={ach.icon} onChange={(e) => updateAchievement(i, "icon", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm" />
                                <input type="text" placeholder="Title (ID)" value={ach.title} onChange={(e) => updateAchievement(i, "title", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm" />
                                <input type="text" placeholder="Title (EN)" value={ach.titleEn} onChange={(e) => updateAchievement(i, "titleEn", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <textarea placeholder="Description (ID)" value={ach.desc} onChange={(e) => updateAchievement(i, "desc", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm h-16" />
                                <textarea placeholder="Description (EN)" value={ach.descEn} onChange={(e) => updateAchievement(i, "descEn", e.target.value)}
                                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm h-16" />
                            </div>
                        </div>
                    ))}
                    {form.achievements.length === 0 && <p className="text-gray-400 text-sm">Belum ada achievement. Klik "+ Tambah Achievement"</p>}
                </div>
            </div>
        </div>
    );
}


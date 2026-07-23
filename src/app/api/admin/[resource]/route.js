// ============================================================
// /api/admin/[resource] — CRUD for admin data resources using SQLite
// Resources: services, portfolio, blog, training, testimonials,
//            partners, team, about
// ============================================================

import { getAll, getById, createItem, updateItem, deleteItem, getAbout, updateAbout } from "@/lib/db";

// Simple token validation
function validateToken(token) {
    if (!token) return false;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
    try {
        const decoded = Buffer.from(token, "base64").toString("utf-8");
        const [, pwd] = decoded.split(":");
        return pwd === ADMIN_PASSWORD;
    } catch {
        return false;
    }
}

// Resource config: { table, idField }
const resourceConfig = {
    services: { table: "services", idField: "id" },
    portfolio: { table: "portfolio", idField: "slug" },
    blog: { table: "blog", idField: "slug" },
    training: { table: "training", idField: "slug" },
    testimonials: { table: "testimonials", idField: "id" },
    partners: { table: "partners", idField: "id" },
    team: { table: "team", idField: "id" },
};

// Serialize arrays to JSON strings for storage
function serialize(obj) {
    const result = { ...obj };
    for (const key of Object.keys(result)) {
        if (Array.isArray(result[key])) {
            result[key] = JSON.stringify(result[key]);
        }
    }
    return result;
}

// GET /api/admin/[resource]
export async function GET(request, { params }) {
    const { resource } = await params;
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!validateToken(token)) {
        return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    try {
        if (resource === "about") {
            const data = await getAbout();
            return Response.json({ success: true, data });
        }

        const config = resourceConfig[resource];
        if (!config) {
            return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
        }

        const data = await getAll(config.table);
        return Response.json({ success: true, data });
    } catch (error) {
        console.error(`[Admin API] Error fetching ${resource}:`, error);
        return Response.json({ success: false, message: "Error fetching data" }, { status: 500 });
    }
}

// POST /api/admin/[resource] — Create new item
export async function POST(request, { params }) {
    const { resource } = await params;
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!validateToken(token)) {
        return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    if (resource === "about") {
        return Response.json({ success: false, message: "Use PUT for about resource" }, { status: 400 });
    }

    const config = resourceConfig[resource];
    if (!config) {
        return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
    }

    try {
        const body = await request.json();
        const serialized = serialize(body);

        // Add createdAt if not present
        if (!serialized.createdAt) {
            serialized.createdAt = new Date().toISOString();
        }

        await createItem(config.table, serialized);
        return Response.json({ success: true, message: "Item created", data: body }, { status: 201 });
    } catch (error) {
        console.error(`[Admin API] Error creating ${resource}:`, error);
        return Response.json({ success: false, message: "Error creating item" }, { status: 500 });
    }
}

// PUT /api/admin/[resource] — Update item
export async function PUT(request, { params }) {
    const { resource } = await params;
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!validateToken(token)) {
        return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    try {
        if (resource === "about") {
            const body = await request.json();
            const serialized = serialize(body);
            await updateAbout(serialized);
            return Response.json({ success: true, message: "About updated", data: body });
        }

        const config = resourceConfig[resource];
        if (!config) {
            return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
        }

        const body = await request.json();
        const { id, ...updateData } = body;
        const idValue = body[config.idField] || id;

        if (!idValue) {
            return Response.json({ success: false, message: "ID required" }, { status: 400 });
        }

        const serialized = serialize(updateData);
        await updateItem(config.table, serialized, config.idField, idValue);
        return Response.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.error(`[Admin API] Error updating ${resource}:`, error);
        return Response.json({ success: false, message: "Error updating item" }, { status: 500 });
    }
}

// DELETE /api/admin/[resource]
export async function DELETE(request, { params }) {
    const { resource } = await params;
    const token = request.headers.get("authorization")?.replace("Bearer ", "");
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!validateToken(token)) {
        return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    if (!id) {
        return Response.json({ success: false, message: "ID parameter required" }, { status: 400 });
    }

    if (resource === "about") {
        return Response.json({ success: false, message: "Cannot delete about resource" }, { status: 400 });
    }

    const config = resourceConfig[resource];
    if (!config) {
        return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
    }

    try {
        await deleteItem(config.table, config.idField, id);
        return Response.json({ success: true, message: "Item deleted" });
    } catch (error) {
        console.error(`[Admin API] Error deleting ${resource}:`, error);
        return Response.json({ success: false, message: "Error deleting item" }, { status: 500 });
    }
}


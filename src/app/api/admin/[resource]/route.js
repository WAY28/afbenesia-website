// ============================================================
// /api/admin/[resource] — CRUD for admin data resources
// Resources: services, portfolio, blog, training, testimonials,
//            partners, team, about
// ============================================================

import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

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

// Get file path for a resource
function getFilePath(resource) {
    const allowedResources = [
        "services", "portfolio", "blog", "training",
        "testimonials", "partners", "team", "about",
    ];
    if (!allowedResources.includes(resource)) return null;
    return path.join(DATA_DIR, `${resource}.json`);
}

// GET /api/admin/[resource]
export async function GET(request, { params }) {
    const { resource } = await params;
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!validateToken(token)) {
        return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const filePath = getFilePath(resource);
    if (!filePath) {
        return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
    }

    try {
        const content = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(content);
        return Response.json({ success: true, data });
    } catch (error) {
        // File doesn't exist yet, return empty data
        const emptyData = resource === "about" ? {} : [];
        return Response.json({ success: true, data: emptyData });
    }
}

// POST /api/admin/[resource] — Create new item
export async function POST(request, { params }) {
    const { resource } = await params;
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!validateToken(token)) {
        return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const filePath = getFilePath(resource);
    if (!filePath) {
        return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
    }

    // For "about" resource, use PUT instead (singular object)
    if (resource === "about") {
        return Response.json({ success: false, message: "Use PUT for about resource" }, { status: 400 });
    }

    try {
        const body = await request.json();
        let data = [];

        try {
            const content = await fs.readFile(filePath, "utf-8");
            data = JSON.parse(content);
        } catch {
            data = [];
        }

        if (!Array.isArray(data)) data = [];

        // Add ID if not present
        if (!body.id && resource !== "partners") {
            body.id = `${resource}-${Date.now()}`;
        }

        data.push(body);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

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

    const filePath = getFilePath(resource);
    if (!filePath) {
        return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
    }

    try {
        const body = await request.json();

        // For "about" resource, replace the whole object
        if (resource === "about") {
            await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8");
            return Response.json({ success: true, message: "Updated", data: body });
        }

        let data = [];
        try {
            const content = await fs.readFile(filePath, "utf-8");
            data = JSON.parse(content);
        } catch {
            return Response.json({ success: false, message: "No data found" }, { status: 404 });
        }

        if (!Array.isArray(data)) {
            return Response.json({ success: false, message: "Invalid data format" }, { status: 500 });
        }

        const { id, ...updateData } = body;
        const index = data.findIndex((item) => item.id === id || item.slug === id);

        if (index === -1) {
            return Response.json({ success: false, message: "Item not found" }, { status: 404 });
        }

        data[index] = { ...data[index], ...updateData, id: data[index].id };
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

        return Response.json({ success: true, message: "Item updated", data: data[index] });
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

    const filePath = getFilePath(resource);
    if (!filePath) {
        return Response.json({ success: false, message: "Resource not found" }, { status: 404 });
    }

    if (resource === "about") {
        return Response.json({ success: false, message: "Cannot delete about resource" }, { status: 400 });
    }

    try {
        let data = [];
        try {
            const content = await fs.readFile(filePath, "utf-8");
            data = JSON.parse(content);
        } catch {
            return Response.json({ success: false, message: "No data found" }, { status: 404 });
        }

        if (!Array.isArray(data)) {
            return Response.json({ success: false, message: "Invalid data format" }, { status: 500 });
        }

        const newData = data.filter((item) => item.id !== id && item.slug !== id);

        if (newData.length === data.length) {
            return Response.json({ success: false, message: "Item not found" }, { status: 404 });
        }

        await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
        return Response.json({ success: true, message: "Item deleted" });
    } catch (error) {
        console.error(`[Admin API] Error deleting ${resource}:`, error);
        return Response.json({ success: false, message: "Error deleting item" }, { status: 500 });
    }
}


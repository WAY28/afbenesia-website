// ============================================================
// POST /api/admin/login
// Simple password-based authentication
// ============================================================

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(request) {
    try {
        const body = await request.json();
        const { password } = body;

        if (!password) {
            return Response.json({ success: false, message: "Password diperlukan" }, { status: 400 });
        }

        if (password !== ADMIN_PASSWORD) {
            return Response.json({ success: false, message: "Password salah" }, { status: 401 });
        }

        // Generate a simple token (base64 encoded timestamp + password hash)
        const token = Buffer.from(`${Date.now()}:${ADMIN_PASSWORD}`).toString("base64");

        return Response.json({
            success: true,
            message: "Login berhasil",
            token,
        });
    } catch (error) {
        console.error("[Admin Login] Error:", error);
        return Response.json({ success: false, message: "Server error" }, { status: 500 });
    }
}


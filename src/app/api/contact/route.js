export async function POST(request) { const body = await request.json(); return Response.json({ success: true, message: "Pesan diterima!" }) }

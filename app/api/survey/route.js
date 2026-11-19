import { NextResponse } from "next/server";
export async function POST(request) {
  const data = await request.json();
  if (!data.name || !data.email || !data.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  console.log("New site survey request:", data);
  return NextResponse.json({ ok: true });
}

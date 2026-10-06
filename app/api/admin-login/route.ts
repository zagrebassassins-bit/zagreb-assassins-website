import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Admin login API is working",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body?.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, message: "Incorrect password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value !== "authenticated") {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const images = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      max_results: 100,
      direction: "desc",
    });

    const videos = await cloudinary.api.resources({
      resource_type: "video",
      type: "upload",
      max_results: 100,
      direction: "desc",
    });

    const media = [
      ...images.resources.map((item: any) => ({
        type: "image",
        public_id: item.public_id,
        url: item.secure_url,
      })),
      ...videos.resources.map((item: any) => ({
        type: "video",
        public_id: item.public_id,
        url: item.secure_url,
      })),
    ];

    return NextResponse.json({
      success: true,
      media,
    });
  } catch (error) {
    console.error("Media list error:", error);

    return NextResponse.json(
      { success: false, message: "Could not load media" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value !== "authenticated") {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    const publicId = body?.publicId;
    const resourceType = body?.resourceType;

    if (!publicId || !resourceType) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing media information",
        },
        { status: 400 }
      );
    }

    await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
      type: "upload",
      invalidate: true,
    });

    return NextResponse.json({
      success: true,
      message: "Media deleted successfully",
    });
  } catch (error) {
    console.error("Media delete error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Could not delete media",
      },
      { status: 500 }
    );
  }
}
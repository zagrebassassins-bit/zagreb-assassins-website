import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";

async function getMedia() {
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

  return [
    ...images.resources.map((item: any) => ({
      type: "image",
      url: item.secure_url,
      id: item.public_id,
    })),
    ...videos.resources.map((item: any) => ({
      type: "video",
      url: item.secure_url,
      id: item.public_id,
    })),
  ];
}

export default async function GalleryPage() {
  const media = await getMedia();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0c",
        color: "#f3efe9",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          ZAGREB ASSASSINS GALLERY
        </h1>

        {media.length === 0 ? (
          <p>No photos or videos uploaded yet.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {media.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#121214",
                  border: "1px solid #29292c",
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt="Zagreb Assassins"
                    style={{
                      width: "100%",
                      height: 400,
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 4,
                    }}
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    style={{
                      width: "100%",
                      height: 400,
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 4,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
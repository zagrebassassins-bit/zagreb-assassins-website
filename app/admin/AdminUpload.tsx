"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function AdminUpload() {
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
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 15,
          }}
        >
          ZAGREB ASSASSINS ADMIN
        </h1>

        <p
          style={{
            color: "#96928d",
            marginBottom: 35,
          }}
        >
          Upload photos and videos to the website gallery.
        </p>

        <CldUploadWidget
          uploadPreset="zagreb_assassins"
          options={{
            sources: ["local", "camera"],
            multiple: true,
            resourceType: "auto",
          }}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              style={{
                display: "inline-block",
                background: "#e5222b",
                color: "#ffffff",
                border: "none",
                padding: "16px 30px",
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              UPLOAD PHOTO / VIDEO
            </button>
          )}
        </CldUploadWidget>
      </div>
    </main>
  );
}
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 20% 20%, #ffd9c6 0%, #f4efe4 35%, #f8f4ea 100%)",
          color: "#0f172a",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#8f3319",
            marginBottom: 22,
          }}
        >
          ADRYEL WEB STUDIO
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.08,
            maxWidth: 980,
          }}
        >
          Sites profissionais com performance e foco em resultado
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

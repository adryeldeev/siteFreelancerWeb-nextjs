import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
            "radial-gradient(circle at 15% 15%, #ffe9b8 0%, #f4efe4 40%, #f8f4ea 100%)",
          color: "#0f172a",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 700, color: "#8f3319" }}>
          ADRYEL WEB STUDIO
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 58,
            fontWeight: 850,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Landing pages e sites para crescer sua presenca digital
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

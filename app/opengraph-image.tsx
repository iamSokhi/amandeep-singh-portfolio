import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0E14",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#34D0B6",
            }}
          />
          <div style={{ color: "#9AA5B1", fontSize: 22 }}>
            open to select frontend engagements
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#E7EAEE", fontSize: 68, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
          <div style={{ color: "#E8AA3B", fontSize: 40, marginTop: 8 }}>
            {siteConfig.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            color: "#9AA5B1",
            fontSize: 22,
            borderTop: "1px solid #232B36",
            paddingTop: 28,
          }}
        >
          <div>11+ yrs experience</div>
          <div>React · TypeScript</div>
          <div>{siteConfig.location}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

"use client";

import { products } from "../data/products";
import TiltCard from "./TiltCard";

export default function TikTokFeed() {
  return (
    <div style={{
      height: "80vh",
      overflowY: "scroll",
      scrollSnapType: "y mandatory"
    }}>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            height: "80vh",
            scrollSnapAlign: "start",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TiltCard>
            <div style={{
              width: "300px",
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid #333"
            }}>
              <div style={{
                height: "180px",
                background: "url(https://source.unsplash.com/400x300/?mousepad,neon) center/cover",
                borderRadius: "12px"
              }} />

              <h2>{p.name}</h2>
              <p style={{ color: "#aaa" }}>{p.story}</p>
              <p style={{ color: "#39ff88" }}>${p.price}</p>
            </div>
          </TiltCard>
        </div>
      ))}
    </div>
  );
}
